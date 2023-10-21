import React from 'react';
import './Contacto.css';
import fb from './img/fb_2.png';
import ig from './img/ig.png';
import linkedin from './img/linkedin.png';

const Contacto = () => {
  return (
    <section className="contactos-container">
      <a href="https://www.facebook.com/ricardo.carrillofonseca" target="_blank" rel="noopener noreferrer" className="link">
        <article className="card">
          <div className="card-content">
            <img src={fb} alt="Logo de Facebook" className='Logo_fb' />
            <h2>Facebook</h2>
            <p>Ricardo Carrillo Fonseca</p>
          </div>
        </article>
      </a>

      <a href='https://www.instagram.com/r_carrillo11/' target="_blank" rel="noopener noreferrer" className="link">
        <article className="card">
          <div className="card-content">
            <img src={ig} alt="Logo de Instagram" className='Logo_ig' />
            <h2>Instagram</h2>
            <p>r_carrillo11</p>
          </div>
        </article>
      </a>

      {/* <a href='https://www.linkedin.com/in/ricardo-carrillo-fonseca-081a641a2/' target="_blank" rel="noopener noreferrer" className="link"> */}
        <article className="card">
          <div className="card-content">
            <img src={linkedin} alt="Logo de LinkedIn" className='Logo_linkedin' />
            <h2>LinkedIn</h2>
            <p>Ricardo Carrillo Fonseca</p>
          </div>
        </article>
      {/* </a> */}
    </section>
  );
};

export default Contacto;