import React from 'react';
import './Contacto.css';

const Contacto = () => {
  return (
    <div className="contactos-container">

      <div className="card">
        <div className="card-content">
          <a href="https://www.facebook.com/ricardo.carrillofonseca" target="_blank" rel="noopener noreferrer" className="link">
            <h2>Facebook</h2>
            <p>Ricardo Carrillo Fonseca</p>
          </a>
        </div>
      </div>

      <div className="card">
        <div className="card-content">
          <a href='https://www.instagram.com/r_carrillo11/' target="_blank" rel="noopener noreferrer" className="link">
            <h2>Instagram</h2>
            <p>r_carrillo11</p>
          </a>
        </div>
      </div>

      <div className="card">
        <div className="card-content">
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