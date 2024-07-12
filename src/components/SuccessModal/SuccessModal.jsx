// SuccessModal.jsx
import React from 'react';
import styles from './successModal.module.css';

function SuccessModal({ show, onClose }) {
  if (!show) {
    return null;
  }

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <h2>Inscription Réussie</h2>
        <p>Votre inscription a été réalisée avec succès.</p>
        <button onClick={onClose}>Fermer</button>
      </div>
    </div>
  );
}

export default SuccessModal;
