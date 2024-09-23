import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function SobreMi() {
  const [ref, enVista] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.section 
      ref={ref}
      className="py-16"
      initial={{ opacity: 0, y: 20 }}
      animate={enVista ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-4xl font-bold mb-8 text-center">Sobre Mí</h2>
      <p className="text-xl max-w-2xl mx-auto text-center">
        Soy un desarrollador web apasionado por crear experiencias digitales únicas y funcionales. 
        Con experiencia en React, Node.js y diseño UI/UX, me enfoco en desarrollar aplicaciones 
        web eficientes y atractivas que resuelven problemas reales.
      </p>
    </motion.section>
  );
}