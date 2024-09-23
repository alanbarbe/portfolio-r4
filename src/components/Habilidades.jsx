import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Habilidades() {
  const [ref, enVista] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const habilidades = ['React', 'Node.js', 'JavaScript', 'HTML5', 'CSS3', 'Git'];

  return (
    <motion.section 
      ref={ref}
      className="py-16"
      initial={{ opacity: 0, y: 20 }}
      animate={enVista ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-4xl font-bold mb-8 text-center">Habilidades</h2>
      <div className="flex flex-wrap justify-center gap-4">
        {habilidades.map((habilidad) => (
          <motion.span 
            key={habilidad} 
            className="px-4 py-2 bg-white text-purple-600 rounded-full text-lg font-semibold"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {habilidad}
          </motion.span>
        ))}
      </div>
    </motion.section>
  );
}