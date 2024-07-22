const express = require('express');
const router = express.Router();

const Inscription = require('../models/InscriptionModel'); // Chemin relatif au modèle

// Route POST pour l'inscription
router.post('/inscription', async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*'); // Ajout de l'en-tête CORS
  try {
    console.log('Requête reçue:', req.body);
    const newInscription = new Inscription(req.body);
    await newInscription.save()
      .then((savedInscription) => {
        console.log('Inscription réussie:', savedInscription);
        res.status(201).json({ msg: 'Inscription effectuée' });
      })
      .catch((error) => {
        console.log('Erreur lors de la sauvegarde:', error);
        if (error.code === 11000 && error.keyPattern && error.keyPattern.team) {
          res.status(400).json({ msg: 'Nom de team déjà utilisé' });
        } else {
          res.status(500).json({ msg: 'Erreur inscription' });
        }
      });
  } catch (error) {
    console.log('Erreur dans le bloc try-catch:', error);
    res.status(500).json({ msg: 'Erreur inscription' });
  }
});

// Route GET pour obtenir toutes les inscriptions
router.get('/inscription', async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*'); // Ajout de l'en-tête CORS
  try {
    const inscriptions = await Inscription.find();
    console.log(inscriptions);
    res.status(200).json({ inscriptions });
  } catch (error) {
    console.log('Erreur lors de la récupération des inscriptions:', error);
    res.status(500).json({ msg: 'Erreur de chargement' });
  }
});

// Ajoutez des en-têtes CORS similaires pour les autres routes PUT, DELETE, etc.

module.exports = router;
