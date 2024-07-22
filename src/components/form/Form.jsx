// Form.jsx
import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import SuccessModal from "../SuccessModal/SuccessModal";
import styles from "./form.module.css";

function Form() {
  const [currentStep, setCurrentStep] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [msgError, setMsgError] = useState("");
  const [formData, setFormData] = useState({
    nom: "",

    prenoms: "",
    phone: "",
    equipe: "",
    quartier: "",
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
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `https://backend.bonoua-ci.com/api/inscription`,
        formData
      );
      if (response.data.message === "Inscription effectuée") {
        setMsgError("");
        setShowModal(true);
      } else {
        alert("Erreur: " + response.data.message);
      }
    } catch (error) {
      console.error("Erreur lors de l'inscription:", error);
      setMsgError(error.response.data.message);
    }
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className={styles.contain}>
      <form id={styles.msform}>
        {/* Progressbar */}
        <ul id={styles.progressbar}>
          <li className={currentStep >= 0 ? styles.active : ""}>
            Information Personnelle
          </li>
          <li className={currentStep >= 1 ? styles.active : ""}>equipe</li>
          <li className={currentStep >= 2 ? styles.active : ""}>Paiement</li>
        </ul>
        {/* Fieldsets */}
        <fieldset
          ref={(el) => (fieldsets.current[0] = el)}
          className={styles.fieldset}
        >
          <h2 className={styles.fsTitle}>Information du capitaine</h2>
          <div className={styles.step1}>
            <input
              type="text"
              name="nom"
              placeholder="NOM"
              value={formData.nom}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="prenoms"
              placeholder="PRENOMS"
              value={formData.prenoms}
              onChange={handleChange}
              required
            />
            <input
              type="number"
              name="phone"
              placeholder="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
            <input
              type="button"
              className={`${styles.actionButton} ${styles.next}`}
              value="Suivant"
              onClick={handleNext}
            />
          </div>
        </fieldset>
        <fieldset
          ref={(el) => (fieldsets.current[1] = el)}
          className={styles.fieldset}
        >
          <h2 className={styles.fsTitle}>INFORMATION EQUIPE</h2>
          <div className={styles.step}>
            <input
              type="text"
              name="equipe"
              placeholder="Nom de l'équipe"
              value={formData.equipe}
              onChange={handleChange}
            />
            <input
              type="text"
              name="quartier"
              placeholder="Quartier"
              value={formData.quartier}
              onChange={handleChange}
            />
            <input
              type="button"
              className={`${styles.actionButton} ${styles.previous}`}
              value="Retour"
              onClick={handlePrevious}
            />
            <input
              type="button"
              className={`${styles.actionButton} ${styles.next}`}
              value="Suivant"
              onClick={handleNext}
            />
          </div>
        </fieldset>
        <fieldset
          ref={(el) => (fieldsets.current[2] = el)}
          className={styles.fieldset}
        >
          <h2 className={styles.fsTitle}>IMPORTANT</h2>
          <div className={styles.info}>
            Les frais d'inscription sont de 25.000 FR. Pour valider
            l'inscription, effectuez un dépôt au 0777456115 / 0778261090 et
            appuyez sur "Valider".
          </div>
          <input
            type="button"
            className={`${styles.actionButton} ${styles.previous}`}
            value="Retour"
            onClick={handlePrevious}
          />
          <button
            type="submit"
            onClick={handleSubmit}
            className={`${styles.actionButton} ${styles.submit}`}
          >
            Valider
          </button>
        </fieldset>
      </form>
      {msgError && (
        <div
          style={{
            width: "100%",
            position: "absolute",
            padding: "1em",
            background: "red",
            zIndex:"90",
            color: "white",
          }}
        >
          {msgError}
        </div>
      )}

      <SuccessModal show={showModal} onClose={closeModal} />
    </div>
  );
}

export default Form;
