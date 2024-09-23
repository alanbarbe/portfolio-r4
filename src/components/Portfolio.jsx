import React from 'react';
import Header from './Header';
import SobreMi from './SobreMi';
import Proyectos from './Proyectos';
import Habilidades from './Habilidades.jsx';
import Contacto from './Contacto';
import Footer from './Footer';

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 text-white">
      <div className="max-w-6xl mx-auto px-4">
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