import React from 'react';
import './Habilidades.css';

export default function Habilidades() {
  const habilidades = ['React', 'Node.js', 'JavaScript', 'HTML5', 'CSS3', 'Git'];

  return (
    <section className="habilidades">
      <h2 className="habilidades-titulo">Habilidades</h2>
      <div className="habilidades-lista">
        {habilidades.map((habilidad) => (
          <span key={habilidad} className="habilidad-tag">
            {habilidad}
          </span>
        ))}
      </div>
    </section>
  );
}