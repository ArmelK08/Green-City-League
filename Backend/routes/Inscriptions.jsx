const express = require('express');
const router = express.Router();
const Inscription = require('../models/InscriptionModel'); // Chemin relatif au modèle

// Route POST pour l'inscription

router.post('/inscription', async (req, res) => {
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
    try {
        const inscriptions = await Inscription.find();
        console.log(inscriptions);
        res.status(200).json({ inscriptions });
    } catch (error) {
        console.log('Erreur lors de la récupération des inscriptions:', error);
        res.status(500).json({ msg: 'Erreur de chargement' });
    }
});

// Route GET pour obtenir une inscription spécifique par ID
router.get('/inscription/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const inscription = await Inscription.findById(id);
        if (!inscription) {
            return res.status(404).json({ msg: 'Inscription non trouvée' });
        }
        console.log(inscription);
        res.status(200).json(inscription);
    } catch (error) {
        console.log('Erreur lors de la récupération de l\'inscription:', error);
        res.status(500).json({ msg: 'Erreur de chargement' });
    }
});

// Route PUT pour mettre à jour une inscription par ID
router.put('/inscription/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const updatedInscription = await Inscription.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedInscription) {
            return res.status(404).json({ msg: 'Inscription non trouvée' });
        }
        console.log(updatedInscription);
        res.status(200).json({ msg: 'Inscription mise à jour', updatedInscription });
    } catch (error) {
        console.log('Erreur lors de la mise à jour de l\'inscription:', error);
        res.status(500).json({ msg: 'Erreur de mise à jour' });
    }
});

// Route DELETE pour supprimer une inscription par ID
router.delete('/inscription/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const deletedInscription = await Inscription.findByIdAndDelete(id);
        if (!deletedInscription) {
            return res.status(404).json({ msg: 'Inscription non trouvée' });
        }
        console.log(deletedInscription);
        res.status(200).json({ msg: 'Inscription supprimée', deletedInscription });
    } catch (error) {
        console.log('Erreur lors de la suppression de l\'inscription:', error);
        res.status(500).json({ msg: 'Erreur de suppression' });
    }
});

module.exports = router;
