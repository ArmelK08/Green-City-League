import React from 'react'
import './card.css'
import img from '../../assets/photo.jpg'
import img1 from '../../assets/FRATERNITY.jpg';
import img2 from '../../assets/IMG-20231128-WA0178.jpg';
import img3 from '../../assets/3.jpg';
// import {card} from '../data'

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
              src={img1}
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
      <div className='card__bioHover'>
<p className="card__bio">
        {" "}
        la fraternité dans le basketball enrichit l'expérience sportive mais également les relations humaines
      </p>
      </div>
      
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
              src={img3}
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
        compétitivité saine qui pousse les joueurs à se dépasser, à améliorer constamment leurs compétences
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
              src={img2}
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
         engager envers l'équipe, vous aiderez vos coéquipiers à s'améliorer et vous serez prêts à faire des sacrifices pour l'équipe.
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
