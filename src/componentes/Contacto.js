import React from 'react';
import './Contacto.css';
import fb from './img/fb_2.png';
import ig from './img/ig.png';
import linkedin from './img/linkedin.png';

const Contacto = () => {
  return (
    <div className="contactos-container">

      <div className="card">
        <div className="card-content">
          <img src={fb} alt="logo facebook" className='Logo_fb' />
          <a href="https://www.facebook.com/ricardo.carrillofonseca" target="_blank" rel="noopener noreferrer" className="link">
            <h2>Facebook</h2>
            <p>Ricardo Carrillo Fonseca</p>
          </a>
        </div>
      </div>

      <div className="card">

        <div className="card-content">
          <img src={ig} alt="logo Instagram" className='Logo_ig' />
          <a href='https://www.instagram.com/r_carrillo11/' target="_blank" rel="noopener noreferrer" className="link">
            <h2>Instagram</h2>
            <p>r_carrillo11</p>
          </a>
        </div>
      </div>

      <div className="card">
        <div className="card-content">
        <img src={linkedin} alt="logo linkedin" className='Logo_linkedin' />
          <a href='https://www.linkedin.com/in/ricardo-carrillo-fonseca-081a641a2/' target="_blank" rel="noopener noreferrer" className="link">
            <h2>linkedin</h2>
            <p>Ricardo Carrillo Fonseca</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contacto;