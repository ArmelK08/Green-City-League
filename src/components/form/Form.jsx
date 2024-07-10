import React, { useState, useRef, useEffect } from 'react';
import styles from './form.module.css';

function Form() {
  const [currentStep, setCurrentStep] = useState(0);
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

  return (
    <div>
      <form id={styles.msform}>
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
          <input type="text" name="NOM" placeholder="NOM" required/>
          <input type="text" name="prenoms" placeholder="PRENOMS" required/>
          <input type="number" name="contact" placeholder="CONTACT" required/>
          <input type="button" name="Suivant" className={`${styles.actionButton} ${styles.next}`} value="Suivant" onClick={handleNext} />
          </div>
         </fieldset>
        <fieldset ref={(el) => (fieldsets.current[1] = el)} className={styles.fieldset}>
          <h2 className={styles.fsTitle}>INFORMATION EQUIPE</h2>
          <div className={styles.step}>
          <input type="text" name="nequipe" placeholder="Nom de l'équipe" />
          <input type="text" name="quartier" placeholder="quartier" />

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
          
          <input type="button" name="Retour" className={`${styles.actionButton} ${styles.previous}`} value="Suivant" onClick={handlePrevious} />
          <a className={`${styles.actionButton} ${styles.submit}`} target="_top">VALIDER</a>
        </fieldset>
      </form>
    </div>
  );
}

export default Form;
