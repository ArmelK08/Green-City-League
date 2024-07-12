const mongoose = require('mongoose');

const InscriptionSchema = new mongoose.Schema({
    nom: {
        type: String,
        required: [true, 'le Nom est requis']
    },
    prenoms: {
        type: String,
        required: [true, 'le Prenoms est requis'],
        minLength: 3,
        maxLength: 20
    },
    contact: {
        type: String, // Changement de Number à String pour conserver le zéro initial
        required: [true, 'le contact est requis'],
    },
    team: {
        type: String,
        required: [true, 'le nom de la team est requise'],
        unique: true // Définir le champ team comme unique
    },
    quartier: {
        type: String,
        required: [true, 'le quartier est requis'],
    }
}, { timestamps: true }); // Ajoute les champs createdAt et updatedAt

const InscriptionModel = mongoose.model('inscriptions', InscriptionSchema);
module.exports = InscriptionModel;
