import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Contacto() {
  const [ref, enVista] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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
    <motion.section 
      ref={ref}
      className="py-16"
      initial={{ opacity: 0, y: 20 }}
      animate={enVista ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-4xl font-bold mb-8 text-center">Contacto</h2>
      <form className="max-w-md mx-auto space-y-4" onSubmit={manejarEnvio}>
        <input 
          type="text"
          placeholder="Nombre" 
          name="nombre"
          value={datosFormulario.nombre}
          onChange={manejarCambioInput}
          className="w-full p-2 bg-white bg-opacity-20 text-white placeholder-gray-300 rounded"
        />
        <input 
          type="email" 
          placeholder="Email" 
          name="email"
          value={datosFormulario.email}
          onChange={manejarCambioInput}
          className="w-full p-2 bg-white bg-opacity-20 text-white placeholder-gray-300 rounded"
        />
        <textarea 
          placeholder="Mensaje" 
          name="mensaje"
          value={datosFormulario.mensaje}
          onChange={manejarCambioInput}
          className="w-full p-2 bg-white bg-opacity-20 text-white placeholder-gray-300 rounded"
        />
        <button type="submit" className="w-full p-2 bg-white text-purple-600 hover:bg-gray-100 rounded">
          Enviar mensaje
        </button>
      </form>
    </motion.section>
  );
}