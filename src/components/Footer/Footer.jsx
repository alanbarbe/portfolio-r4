import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="pie-de-pagina">
      <div className="redes-sociales">
        <a href="https://github.com/alanbarbe" className="red-social" aria-label="GitHub">🐙</a>
        <a href="https://es.linkedin.com/" className="red-social" aria-label="LinkedIn">💼</a>
        <a href="mailto:alanbarbecabj@gmail.com" className="red-social" aria-label="Email">✉️</a>
        <a href="tel:+34600000000" className="red-social" aria-label="Teléfono">📞</a>
      </div>
      <p className="derechos-autor">&copy; 2024 Alan Barbé. Todos los derechos reservados.</p>
    </footer>
  );
}