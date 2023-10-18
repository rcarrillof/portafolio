import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import './App.css';
import Home from './componentes/Home';
import Proyectos from './componentes/Proyectos';
import Contacto from './componentes/Contacto';
import './componentes/transition.css';

console.log('App Component: Renderizando...');

function App() {
  const location = useLocation();

  return (
    <div className="Container_principal">
      <TransitionGroup>
        <CSSTransition
          key={location.key}
          classNames="fade"
          timeout={300}
        >
          <Routes>
            <Route path="/Home" element={<Home />} />
            <Route path="/Proyectos" element={<Proyectos />} />
            <Route path="/Contacto" element={<Contacto />} />
          </Routes>
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
}

export default App;
