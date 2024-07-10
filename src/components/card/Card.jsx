import React from 'react'
import './card.css'
import img from '../../assets/photo.jpg'
import img1 from '../../assets/FRATERNITY.png';
import img2 from '../../assets/GREENTA 2.png';
import img3 from '../../assets/3.png';
import {card} from '../data'

function Card() {
    return (
        <>
     
        <section className="wrapper">
  {/* BEGIN: card */}
  <div className="card" data-effect="zoom">
    <button className="card__save  js-save" type="button">
      <i className="fa  fa-bookmark" />
    </button>
    <figure className="card__image">
            <img
              src={img}
              alt="Short description"
            />
          </figure>
    <div className="card__header">
      <figure className="card__profile">
        <img
          src={img}
          alt="Short description"
        />
      </figure>
    </div>
    <div className="card__body">
      <h3 className="card__name">FRATERNITE</h3>
      <p className="card__job">astronaut &amp; engineer</p>
      <p className="card__bio">
        {" "}
        American astronaut, engineer, and the first person to walk on the Moon.
      </p>
    </div>
    <div className="card__footer">
      <p className="card__date">Feb 10 2018</p>
      <p className="" />
    </div>
  </div>
  {/* END: card */}
   {/* BEGIN: card */}
   <div className="card" data-effect="zoom">
    <button className="card__save  js-save" type="button">
      <i className="fa  fa-bookmark" />
    </button>
    <figure className="card__image">
            <img
              src={img}
              alt="Short description"
            />
          </figure>
    <div className="card__header">
      <figure className="card__profile">
        <img
          src={img}
          alt="Short description"
        />
      </figure>
    </div>
    <div className="card__body">
      <h3 className="card__name">GRINTA</h3>
      <p className="card__job">astronaut &amp; engineer</p>
      <p className="card__bio">
        {" "}
        American astronaut, engineer, and the first person to walk on the Moon.
      </p>
    </div>
    <div className="card__footer">
      <p className="card__date">Feb 10 2018</p>
      <p className="" />
    </div>
  </div>
  {/* END: card */}
    {/* BEGIN: card */}
    <div className="card" data-effect="zoom">
    <button className="card__save  js-save" type="button">
      <i className="fa  fa-bookmark" />
    </button>
    <figure className="card__image">
            <img
              src={img}
              alt="Short description"
            />
          </figure>
    <div className="card__header">
      <figure className="card__profile">
        <img
          src={img}
          alt="Short description"
        />
      </figure>
    </div>
    <div className="card__body">
      <h3 className="card__name">ENGAGEMENT</h3>
      <p className="card__job">astronaut &amp; engineer</p>
      <p className="card__bio">
        {" "}
        American astronaut, engineer, and the first person to walk on the Moon.
      </p>
    </div>
    <div className="card__footer">
      <p className="card__date">Feb 10 2018</p>
      <p className="" />
    </div>
  </div>
  {/* END: card */}
</section>


      
  
</>

    )
}

export default Card
