import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-8 text-center">
      <div className="flex justify-center space-x-4 mb-4">
        <motion.a href="https://github.com/alanbarbe" aria-label="GitHub" whileHover={{ scale: 1.2 }}><Github className="text-white" /></motion.a>
        <motion.a href="#" aria-label="LinkedIn" whileHover={{ scale: 1.2 }}><Linkedin className="text-white" /></motion.a>
        <motion.a href="mailto:alanbarbecabj@gmail.com" aria-label="Email" whileHover={{ scale: 1.2 }}><Mail className="text-white" /></motion.a>
        <motion.a href="tel:+34600000000" aria-label="Teléfono" whileHover={{ scale: 1.2 }}><Phone className="text-white" /></motion.a>
      </div>
      <p className="text-sm text-gray-300">&copy; 2024 Alan Barbé. Todos los derechos reservados.</p>
    </footer>
  );
}
