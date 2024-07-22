import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './inscriptionTable.module.css';

function InscriptionTable() {
  const [inscriptions, setInscriptions] = useState([]); // État pour stocker les inscriptions
  const [editMode, setEditMode] = useState(null); // État pour gérer le mode édition
  const [editData, setEditData] = useState({ // État pour stocker les données d'édition
    nom: '',
    prenoms: '',
    phone: '',
    equipe: '',
    quartier: ''
  });

  useEffect(() => {
    fetchInscriptions(); // Appel à la fonction fetchInscriptions au chargement du composant
  }, []);

  // Fonction pour récupérer les inscriptions depuis l'API
  const fetchInscriptions = async () => {
    try {
      const response = await axios.get('https://backend.bonoua-ci.com/api/inscription');
      console.log('Réponse API:', response); // Ajout pour débogage
      setInscriptions(response.data.data);
    } catch (error) {
      console.error('Erreur lors du chargement des inscriptions:', error.message);
    }
  };

  // Fonction pour supprimer une inscription par ID
  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://backend.bonoua-ci.com/api/remove/${id}`);
      fetchInscriptions(); // Actualisation des inscriptions après suppression
    } catch (error) {
      console.error('Erreur lors de la suppression:', error);
    }
  };

  // Fonction pour passer en mode édition d'une inscription
  const handleEdit = (inscription) => {
    setEditMode(inscription.id); // Activation du mode édition avec l'ID de l'inscription
    setEditData({ ...inscription }); // Initialisation des champs d'édition avec les données de l'inscription
  };

  // Fonction pour annuler l'édition
  const handleCancelEdit = () => {
    setEditMode(null); // Désactivation du mode édition
    setEditData({ // Réinitialisation des données d'édition
      nom: '',
      prenoms: '',
      phone: '',
      equipe: '',
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
      await axios.put(`https://backend.bonoua-ci.com/api/update/${id}`, editData);
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
            <th>phone</th>
            <th>equipe</th>
            <th>Quartier</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {inscriptions?.length > 0 ? (
            inscriptions.map((inscription) => (
              <tr key={inscription.id}>
                {editMode === inscription.id ? (
                  // Mode édition : affichage des champs d'édition
                  <>
                    <td><input type="text" name="nom" value={editData.nom} onChange={handleChange} /></td>
                    <td><input type="text" name="prenoms" value={editData.prenoms} onChange={handleChange} /></td>
                    <td><input type="number" name="phone" value={editData.phone} onChange={handleChange} /></td>
                    <td><input type="text" name="equipe" value={editData.equipe} onChange={handleChange} /></td>
                    <td><input type="text" name="quartier" value={editData.quartier} onChange={handleChange} /></td>
                    <td>
                      <button onClick={() => handleSaveEdit(inscription.id)}>Save</button>
                      <button onClick={handleCancelEdit}>Cancel</button>
                    </td>
                  </>
                ) : (
                  // Mode normal : affichage des données d'inscription
                  <>
                    <td>{inscription.nom}</td>
                    <td>{inscription.prenoms}</td>
                    <td>{inscription.phone}</td>
                    <td>{inscription.equipe}</td>
                    <td>{inscription.quartier}</td>
                    <td>
                      <button onClick={() => handleEdit(inscription)}>Edit</button>
                      <button onClick={() => handleDelete(inscription.id)}>Delete</button>
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
