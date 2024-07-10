import React from 'react';
import Title from '../../components/Title/Title';
import './about.css';
import Card from '../../components/card/Card';

function About() {
  return (
    <div className='background'>
      <div className='about'>
        <Title text="LA GREEN CITY LEAGUE C'EST QUOI ?" />
        <div className='align'>
          <Card />
        </div>
      </div>
    </div>
  );
}

export default About;
