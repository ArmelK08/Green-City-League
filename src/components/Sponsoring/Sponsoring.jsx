import React from 'react';
import styles from './sponsoring.module.css';
import merch1 from '../../assets/IMG-20231009-WA0025(1).jpg';
import merch2 from '../../assets/IMG-20231212-WA0259(1).jpg';
import Bouton from '../Bouton/Bouton';

function Sponsoring() {
    return (
        <div className={styles.glasses}>
            <div className={styles.sponsoring}> 
                <div className={styles.merch}>
                    <div className={styles.left} style={{ backgroundImage: `url(${merch1})` }}>
                        {/* Contenu de la colonne de gauche */}
                    </div>
                    <div className={styles.right} style={{ backgroundImage: `url(${merch2})` }}>
                        {/* Contenu de la colonne de droite */}
                    </div>
                </div>
                <div className={styles.merchBtn}>
                    <a href=' https://wa.link/814jpf'>
                        <Bouton text='Acheter' className="btn--snakeBorder" />
                    </a>
                    
                </div>
            </div>
        </div>
    );
}

export default Sponsoring;
