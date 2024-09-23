import React from 'react';
import './Proyectos.css';

export default function Proyectos() {
  const datosProyectos = [
    { id: 1, titulo: "Tienda en Línea", descripcion: "E-commerce completo con React y Node.js", color: "blue" },
    { id: 2, titulo: "Portfolio Personal", descripcion: "Showcase de proyectos y habilidades", color: "green" },
    { id: 3, titulo: "Blog Tecnológico", descripcion: "Plataforma de blog sobre tecnología", color: "yellow" },
  ];

  return (
    <section className="proyectos">
      <h2 className="proyectos-titulo">Proyectos Destacados</h2>
      <div className="proyectos-grid">
        {datosProyectos.map((proyecto) => (
          <div key={proyecto.id} className={`proyecto-card ${proyecto.color}`}>
            <h3 className="proyecto-titulo">{proyecto.titulo}</h3>
            <p className="proyecto-descripcion">{proyecto.descripcion}</p>
            <img 
              src={`https://via.placeholder.com/400x200?text=${proyecto.titulo}`}
              alt={proyecto.titulo}
              className="proyecto-imagen"
            />
            <button className="proyecto-boton">Ver proyecto</button>
          </div>
        ))}
      </div>
    </section>
  );
}