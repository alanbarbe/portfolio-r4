import React from 'react';
import { motion } from 'framer-motion';

export default function Header() {
  return (
    <motion.header 
      className="py-16 text-center"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-5xl font-bold mb-2">Alan Barbé</h1>
      <p className="text-2xl">Desarrollador Web Full Stack</p>
    </motion.header>
  );
}