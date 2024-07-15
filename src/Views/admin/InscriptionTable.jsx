import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './inscriptionTable.module.css';

function InscriptionTable() {
  const [inscriptions, setInscriptions] = useState([]); // État pour stocker les inscriptions
  const [editMode, setEditMode] = useState(null); // État pour gérer le mode édition
  const [editData, setEditData] = useState({ // État pour stocker les données d'édition
    nom: '',
    prenoms: '',
    contact: '',
    team: '',
    quartier: ''
  });

  useEffect(() => {
    fetchInscriptions(); // Appel à la fonction fetchInscriptions au chargement du composant
  }, []);

  // Fonction pour récupérer les inscriptions depuis l'API
  const fetchInscriptions = async () => {
    try {
      const response = await axios.get('https://api-green-city-league-7e45969d49f6.herokuapp.com/api/inscription');
      console.log('Réponse API:', response.data); // Ajout pour débogage
      setInscriptions(response.data.inscriptions);
    } catch (error) {
      console.error('Erreur lors du chargement des inscriptions:', error.message);
    }
  };

  // Fonction pour supprimer une inscription par ID
  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://api-green-city-league-7e45969d49f6.herokuapp.com/api/inscription/${id}`);
      fetchInscriptions(); // Actualisation des inscriptions après suppression
    } catch (error) {
      console.error('Erreur lors de la suppression:', error);
    }
  };

  // Fonction pour passer en mode édition d'une inscription
  const handleEdit = (inscription) => {
    setEditMode(inscription._id); // Activation du mode édition avec l'ID de l'inscription
    setEditData({ ...inscription }); // Initialisation des champs d'édition avec les données de l'inscription
  };

  // Fonction pour annuler l'édition
  const handleCancelEdit = () => {
    setEditMode(null); // Désactivation du mode édition
    setEditData({ // Réinitialisation des données d'édition
      nom: '',
      prenoms: '',
      contact: '',
      team: '',
      quartier: ''
    });
  };

  // Fonction pour mettre à jour les champs d'édition
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditData({
      ...editData,
      [name]: value
    });
  };

  // Fonction pour sauvegarder les modifications d'une inscription
  const handleSaveEdit = async (id) => {
    try {
      await axios.put(`https://api-green-city-league-7e45969d49f6.herokuapp.com/api/inscription/${id}`, editData);
      setEditMode(null); // Désactivation du mode édition après sauvegarde
      fetchInscriptions(); // Actualisation des inscriptions après mise à jour
    } catch (error) {
      console.error('Erreur lors de la mise à jour:', error);
    }
  };

  return (
    <div>
      <h2>Inscriptions</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Nom</th>
            <th>Prénoms</th>
            <th>Contact</th>
            <th>Team</th>
            <th>Quartier</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {inscriptions.length > 0 ? (
            inscriptions.map((inscription) => (
              <tr key={inscription._id}>
                {editMode === inscription._id ? (
                  // Mode édition : affichage des champs d'édition
                  <>
                    <td><input type="text" name="nom" value={editData.nom} onChange={handleChange} /></td>
                    <td><input type="text" name="prenoms" value={editData.prenoms} onChange={handleChange} /></td>
                    <td><input type="number" name="contact" value={editData.contact} onChange={handleChange} /></td>
                    <td><input type="text" name="team" value={editData.team} onChange={handleChange} /></td>
                    <td><input type="text" name="quartier" value={editData.quartier} onChange={handleChange} /></td>
                    <td>
                      <button onClick={() => handleSaveEdit(inscription._id)}>Save</button>
                      <button onClick={handleCancelEdit}>Cancel</button>
                    </td>
                  </>
                ) : (
                  // Mode normal : affichage des données d'inscription
                  <>
                    <td>{inscription.nom}</td>
                    <td>{inscription.prenoms}</td>
                    <td>{inscription.contact}</td>
                    <td>{inscription.team}</td>
                    <td>{inscription.quartier}</td>
                    <td>
                      <button onClick={() => handleEdit(inscription)}>Edit</button>
                      <button onClick={() => handleDelete(inscription._id)}>Delete</button>
                    </td>
                  </>
                )}
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6">Aucune inscription trouvée</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default InscriptionTable;
