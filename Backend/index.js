const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const session = require('express-session')
const Mongostore = require('connect-mongo');
const UserModel = require('./models/UserModel');
const bcrypt = require('bcrypt');

const app = express();
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}));

mongoose.connect("mongodb+srv://koblankossonou:koblankossonou@cluster0.ecsz1gb.mongodb.net/", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('Connexion à MongoDB réussie !'))
.catch(err => console.log('Connexion à MongoDB échouée !', err));

//configuration session
app.use(session({
    secret: 'yourSecretKey',
    resave: false,
    saveUninitialized: false,
    store: Mongostore.create({ mongoUrl: 'mongodb://localhost:27017/todo' }),
    cookie: {
        maxAge: 1000 * 60 * 60 * 24, 
        httpOnly: true,
        secure: false 
    }
}));

// route Connexion
app.post('/login', (req, res) => {
    const { email, password } = req.body;
    UserModel.findOne({ email })
        .then(user => {
            if (user) {
                bcrypt.compare(password,user.password)
                .then(match => {
                    if (match) {
                        res.json("success");
                    } else {
                        res.json("le mot de passe est incorrect");
                    }
                })
                .catch(err => res.json(err));
            } else {
                res.json("Cet utilisateur est inexistant");
            }
        })
        .catch(err => res.json(err));
});

// Route d'inscription
app.post('/signup', (req, res) => {
    const { name, email, password } = req.body;
    bcrypt.hash(password, 10)
    .then(hash => {
        UserModel.findOne({ email })
        .then(user => {
            if (user) {
                return res.json("Cet utilisateur existe déjà");
            }
            UserModel.create({ name, email, password: hash })
                .then(newUser => {
                    req.session.userId = newUser._id;
                    res.json(newUser);
                })
                .catch(err => res.json(err));
        })
        .catch(err => console.log(err.message));
    })
    .catch(err => res.json(err));
});

// Middleware de vérification de session
function isAuthenticated(req, res, next) {
    if (req.session.userId) {
        next();
    } else {
        res.status(401).json("Non autorisé");
    }
}

// route Logout
app.post('/logout', (req, res) => {
    req.session.destroy(err => {
        if (err) {
            return res.status(500).json("Logout échoué");
        }
        res.clearCookie('connect.sid');
        res.json("Déconnexion réussie");
    });
});


app.get('/todo', isAuthenticated, (req, res) => {
    UserModel.findById(req.session.userId)
    .then(user => res.json(user))
    .catch(err => res.json(err));
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`App écoute le port ${PORT}`);
});

