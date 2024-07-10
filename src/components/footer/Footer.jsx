import React from 'react';
import styles from './footer.module.css';
import { Icon } from '@iconify/react';
import Logo from '../logo/Logo';

function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles.gcl}>
                <div className={styles.logo}>
                  <Logo/>
                </div>
                <div className={styles.name}>
                    GREEN CITY LEAGUE
                </div>
            </div>

            <div className={styles.separator}></div> {/* Ligne de séparation */}
            <div className={styles.text}>
                SUIVEZ NOUS SUR NOS DIFFERENTS RESEAUX SOCIAUX
            </div>
            <div className={styles.rs}>
                <a href='https://www.tiktok.com/@44greencity?_t=8nseQSKhM7J&_r=1'> <div className={styles.circle}><Icon icon="ic:baseline-tiktok" className={styles.icon}/></div></a>
                <a href='https://www.facebook.com/green.league.city?mibextid=ZbWKwL'><div className={styles.circle}><Icon icon="ri:facebook-fill" className={styles.icon} /></div></a>
                <a href='https://www.instagram.com/green_city_league?igsh=MXBkajI0YjY0ajhuZg=='><div className={styles.circle}><Icon icon="mdi:instagram" className={styles.icon} /></div></a>
              
            </div>
        </div>
    );
}

export default Footer;
