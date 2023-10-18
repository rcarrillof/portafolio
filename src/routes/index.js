import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Home from '../components/Home';
import Proyectos from '../components/Proyectos';
import Contacto from '../components/Contacto';

const AppRoutes = () => {
  return (
    <Router>
      <div className="Container">
        <Navbar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/proyectos" element={<Proyectos />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </div>
    </Router>
  );
};

export default AppRoutes;