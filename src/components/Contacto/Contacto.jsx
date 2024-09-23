import React, { useState } from 'react';
import './Contacto.css';

export default function Contacto() {
  const [datosFormulario, setDatosFormulario] = useState({ nombre: '', email: '', mensaje: '' });

  const manejarCambioInput = (e) => {
    const { name, value } = e.target;
    setDatosFormulario((prev) => ({ ...prev, [name]: value }));
  };

  const manejarEnvio = (e) => {
    e.preventDefault();
    console.log('Formulario enviado:', datosFormulario);
    // Aquí iría la lógica para enviar el formulario
  };

  return (
    <section className="contacto">
      <h2 className="contacto-titulo">Contacto</h2>
      <form className="contacto-formulario" onSubmit={manejarEnvio}>
        <input 
          type="text"
          placeholder="Nombre" 
          name="nombre"
          value={datosFormulario.nombre}
          onChange={manejarCambioInput}
          className="contacto-input"
        />
        <input 
          type="email" 
          placeholder="Email" 
          name="email"
          value={datosFormulario.email}
          onChange={manejarCambioInput}
          className="contacto-input"
        />
        <textarea 
          placeholder="Mensaje" 
          name="mensaje"
          value={datosFormulario.mensaje}
          onChange={manejarCambioInput}
          className="contacto-textarea"
        />
        <button type="submit" className="contacto-boton">
          Enviar mensaje
        </button>
      </form>
    </section>
  );
}