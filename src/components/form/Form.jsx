// Form.jsx
import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import SuccessModal from '../SuccessModal/SuccessModal';
import styles from './form.module.css';

function Form() {
  const [currentStep, setCurrentStep] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    nom: '',
    prenoms: '',
    contact: '',
    team: '',
    quartier: ''
  });
  const fieldsets = useRef([]);

  useEffect(() => {
    if (fieldsets.current.length > 0) {
      fieldsets.current.forEach((fieldset, index) => {
        if (index === currentStep) {
          fieldset.style.display = "block";
        } else {
          fieldset.style.display = "none";
        }
      });
    }
  }, [currentStep]);

  const handleNext = () => {
    setCurrentStep((prev) => Math.min(prev + 1, fieldsets.current.length - 1));
  };

  const handlePrevious = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 0));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/api/inscription', formData);
      if (response.data.msg === 'Inscription effectuée') {
        setShowModal(true);
      } else {
        alert('Erreur: ' + response.data.msg);
      }
    } catch (error) {
      console.error('Erreur lors de l\'inscription:', error);
    }
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className={styles.contain} >
      <form id={styles.msform} onSubmit={handleSubmit}>
        {/* Progressbar */}
        <ul id={styles.progressbar}>
          <li className={currentStep >= 0 ? styles.active : ''}>Information Personnelle</li>
          <li className={currentStep >= 1 ? styles.active : ''}>Social Profiles</li>
          <li className={currentStep >= 2 ? styles.active : ''}>Personal Details</li>
        </ul>
        {/* Fieldsets */}
        <fieldset ref={(el) => (fieldsets.current[0] = el)} className={styles.fieldset}>
          <h2 className={styles.fsTitle}>Information du capitaine</h2>
          <div className={styles.step1}>
            <input type="text" name="nom" placeholder="NOM" value={formData.nom} onChange={handleChange} required />
            <input type="text" name="prenoms" placeholder="PRENOMS" value={formData.prenoms} onChange={handleChange} required />
            <input type="number" name="contact" placeholder="CONTACT" value={formData.contact} onChange={handleChange} required />
            <input type="button" name="Suivant" className={`${styles.actionButton} ${styles.next}`} value="Suivant" onClick={handleNext} />
          </div>
        </fieldset>
        <fieldset ref={(el) => (fieldsets.current[1] = el)} className={styles.fieldset}>
          <h2 className={styles.fsTitle}>INFORMATION EQUIPE</h2>
          <div className={styles.step}>
            <input type="text" name="team" placeholder="Nom de l'équipe" value={formData.team} onChange={handleChange} />
            <input type="text" name="quartier" placeholder="quartier" value={formData.quartier} onChange={handleChange} />
            <input type="button" name="Retour" className={`${styles.actionButton} ${styles.previous}`} value="Retour" onClick={handlePrevious} />
            <input type="button" name="Suivant" className={`${styles.actionButton} ${styles.next}`} value="Suivant" onClick={handleNext} />
          </div>
        </fieldset>
        <fieldset ref={(el) => (fieldsets.current[2] = el)} className={styles.fieldset}>
          <h2 className={styles.fsTitle}>IMPORTANT</h2>
          <h3 className={styles.fsSubtitle}>We will never sell it</h3>
          <div className={styles.info}>
            LES FRAIS D'INSCRIPTION SONT AUX PRIX DE 20.000 FR POUR VALIDER L'INSCRIPTION FAITES UN DEPOT AU 0777456115 / 0778261090 
            ET REVENEZ APPUYER "VALIDER"
          </div>
          <input type="button" name="Retour" className={`${styles.actionButton} ${styles.previous}`} value="Retour" onClick={handlePrevious} />
          <button type="submit" className={`${styles.actionButton} ${styles.submit}`} target="_top">VALIDER</button>
        </fieldset>
      </form>
      <SuccessModal show={showModal} onClose={closeModal} />
    </div>
  );
}

export default Form;
