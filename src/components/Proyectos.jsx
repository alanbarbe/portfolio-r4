import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Proyectos() {
  const [ref, enVista] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const datosProyectos = [
    { id: 1, titulo: "Tienda en Línea", descripcion: "E-commerce completo con React y Node.js", color: "from-blue-400 to-blue-600" },
    { id: 2, titulo: "Portfolio Personal", descripcion: "Showcase de proyectos y habilidades", color: "from-green-400 to-green-600" },
    { id: 3, titulo: "Blog Tecnológico", descripcion: "Plataforma de blog sobre tecnología", color: "from-yellow-400 to-yellow-600" },
  ];

  return (
    <motion.section 
      ref={ref}
      className="py-16"
      initial={{ opacity: 0, y: 20 }}
      animate={enVista ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-4xl font-bold mb-8 text-center">Proyectos Destacados</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {datosProyectos.map((proyecto) => (
          <motion.div key={proyecto.id} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <div className={`overflow-hidden shadow-lg transition-all duration-300 bg-gradient-to-br ${proyecto.color} p-4 rounded-lg`}>
              <h3 className="text-2xl font-bold text-white mb-2">{proyecto.titulo}</h3>
              <p className="text-gray-200 mb-4">{proyecto.descripcion}</p>
              <img 
                src={`/api/placeholder/400/200`} 
                alt={proyecto.titulo}
                className="w-full h-48 object-cover rounded-md mb-4 transition-transform duration-300 transform hover:scale-105"
              />
              <button className="w-full bg-white text-blue-600 hover:bg-gray-100 transition-colors duration-300 p-2 rounded">
                Ver proyecto
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}