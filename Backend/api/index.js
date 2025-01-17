const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
// const InscriptionRoutes = require('../routes/Inscriptions');

const app = express();
app.use(express.json());

const corsOptions = {
  origin: 'https://gcl-indol.vercel.app', // Autorise votre front-end Vercel
  methods: 'GET,POST,PUT,DELETE',
  allowedHeaders: ['Content-Type', 'Authorization'],
};

app.use((req, res, next) => {
  res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
  next();
});
   
app.use(cors(corsOptions));

mongoose.connect('mongodb+srv://koblankossonou:koblankossonou@cluster0.ecsz1gb.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connexion à MongoDB réussie !'))
.catch(err => console.log('Connexion à MongoDB échouée !', err));

// app.use('/api', InscriptionRoutes);

app.get('/', (req, res) => {
  res.send('Bienvenue sur l\'API Green City League');
});



const DEFAULT_PORT = 5173;
const PORT = process.env.PORT || DEFAULT_PORT;

const server = app.listen(PORT, () => {
  console.log(`App écoute le port ${PORT}`);
});

server.on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.log(`Le port ${PORT} est déjà utilisé, en utilisant un port différent...`);
    server.listen(0); // Écoute sur un port disponible automatiquement
  } else {
    console.error('Erreur lors du démarrage du serveur:', err);
  }
});

server.on('listening', () => {
  const address = server.address();
  const port = address.port;
  console.log(`App écoute maintenant sur le port ${port}`);
});

module.exports = app;
