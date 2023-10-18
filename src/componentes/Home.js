import React from 'react';
import './Home.css';
import palmera from '../componentes/img/coconut.png';

const Home = () => {
  return (
    <div className="home-container">
      <div className="profile-section">
        <div className="profile-info">
          <h1 className="name">Ricardo Carrillo Fonseca</h1>
          <p className="job-title">Web Developer</p>
        </div>
      </div>

      <div className="skills-section">
        <h2>Habilidades</h2>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>Bootstrap</li>
          <li>React</li>
          <li>Angular</li>
          <li>SQL</li>
          <li>MongoDB</li>
        </ul>
      </div>

      <div>
        <img src={palmera} alt="palmera" className='palmera' />
      </div>
    </div>
  );
};

export default Home;