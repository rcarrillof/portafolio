import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import Navbar from './componentes/Navbar';
import './index.css';
/* import 'bootstrap/dist/css/bootstrap.min.css'; (no activar hasta solucionar el error con las cards en Contacto.js & .css)*/


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Router>
      <Navbar />
      <App />
    </Router>
  </React.StrictMode>,
);
