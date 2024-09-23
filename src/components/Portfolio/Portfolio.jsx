import React from 'react';
import Header from '../Header/Header.jsx';
import SobreMi from '../SobreMi/SobreMi.jsx';
import Proyectos from '../Proyectos/Proyectos.jsx';
import Habilidades from '../Habilidades/Habilidades.jsx';
import Contacto from '../Contacto/Contacto.jsx';
import Footer from '../Footer/Footer.jsx';
import './Portfolio.css'

export default function Portfolio() {
  return (
    <div className="portfolio">
      <div className="portfolio-content">
        <Header />
        <SobreMi />
        <Proyectos />
        <Habilidades />
        <Contacto />
        <Footer />
      </div>
    </div>
  );
}