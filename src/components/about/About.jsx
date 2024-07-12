import React from 'react';
import Title from '../../components/Title/Title';
import './about.css';
import Card from '../../components/card/Card';
import Trait from './../Trait/Trait';

function About() {
  return (
    <div className='background'>
      <div className='about'>
        <Title text="LA GREEN CITY LEAGUE C'EST QUOI ?" />
        <div className='aboutLine'>
        <Trait />
        </div>
        
        <div className='align'>
          <Card />
        </div>
      </div>
    </div>
  );
}

export default About;
