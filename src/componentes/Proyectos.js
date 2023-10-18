import React from 'react';
import './Proyectos.css';

const Proyectos = () => {
  return (
    <div className="proyectos-container">

      <div className="card_p">
        <div className="proyecto-card">
          <h3>Administrador de Pacientes</h3>
          <p>Proyecto hecho en React, mayo 02</p>
          <a href="https://github.com/rcarrillof/AdministradorPacientes" target="_blank" rel="noopener noreferrer">Ver proyecto</a>
        </div>
      </div>

      <div className="card_p">
        <div className="proyecto-card">
          <h3>Proyecto Angular</h3>
          <p>Descripción del Proyecto Angular.</p>
          <a href="https://github.com/rcarrillof/proyecto_angularRicardo" target="_blank" rel="noopener noreferrer">Ver proyecto</a>
        </div>
      </div>

      <div className="card_p">
        <div className="proyecto-card">
          <h3>HTML, CSS, Bootstrap</h3>
          <a href="https://github.com/rcarrillof/proyecto_angularRicardo" target="_blank" rel="noopener noreferrer">Ver proyecto</a>
        </div>
      </div>
    </div>
  );
};

export default Proyectos;
