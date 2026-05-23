import React from 'react'
import { motion } from 'framer-motion'

const FeatureCard = ({ icon, title, description, index }) => {
  const icons = {
    'female': 'fa-female',
    'home': 'fa-home',
    'heart': 'fa-hand-holding-heart',
    'lock': 'fa-lock',
    'tags': 'fa-tags',
    'mobile': 'fa-mobile-alt',
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ scale: 1.02 }}
      className="glass-card p-6 text-center backdrop-blur-sm"
    >
      <i className={`fas fa-${icons[icon]} text-3xl text-roseGold mb-3`}></i>
      <h3 className="text-xl font-semibold text-luxuryBrown dark:text-white mb-2">{title}</h3>
      <p className="text-sm text-gray-600 dark:text-gray-300">{description}</p>
    </motion.div>
  )
}

export default FeatureCard