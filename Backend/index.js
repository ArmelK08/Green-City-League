const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const InscriptionRoutes = require('./routes/Inscriptions.jsx'); 

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/GCL', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('Connexion à MongoDB réussie !'))
.catch(err => console.log('Connexion à MongoDB échouée !', err));

app.use('/api', InscriptionRoutes);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`App écoute le port ${PORT}`);
});
