import React from 'react'
import { motion } from 'framer-motion'

const FloatingWhatsApp = () => {
  return (
    <motion.a
      href="https://wa.me/919029215892?text=Hi%20Zehra%2C%20I%20would%20like%20to%20book%20a%20beauty%20service"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      className="fixed bottom-6 right-4 md:bottom-6 md:right-6 bg-green-500 text-white p-4 rounded-full shadow-2xl z-40 hover:bg-green-600 transition-all duration-300"
    >
      <i className="fab fa-whatsapp text-2xl"></i>
    </motion.a>
  )
}

export default FloatingWhatsApp