import React from 'react';
import './info.css';
import Title from '../Title/Title';
import Bouton from '../Bouton/Bouton';
import { Link } from 'react-router-dom';
import Trait from '../Trait/Trait';

function Info() {
    return (
        <div className='container'>
            <div className="info-card">
                <div className="left">
                    <div className="right">
                    <Title text='A SAVOIR' className='title'/>
                    <div className="infoLine">
                    <Trait/>
                    </div>
                    <p className='info'>
                    La Green City League est un tournoi qui vise à rassembler les passionnés de basketball de tous âges, des plus jeunes aux plus âgés. L'objectif principal de ce tournoi est de créer une communauté dynamique et engagée autour de ce sport populaire. En encourageant la participation de toutes les générations, la Green City League promeut non seulement la pratique du basketball mais aussi les valeurs de l'esprit sportif, de la compétition saine et du travail d'équipe. C'est un événement qui célèbre la passion commune pour le basketball tout en créant des opportunités de développement personnel et communautaire à travers le sport.
                    </p>
                    <div>
                        <Link to="/inscription">
                            <Bouton text="S'inscrire" className="btn--snakeBorder"/>    
                        </Link>
                    </div>
                </div>
                </div>
                
            </div>
        </div>
    )
}

export default Info;
