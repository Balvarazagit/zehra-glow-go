import React from 'react'
import { motion } from 'framer-motion'

const ServiceCard = ({ icon, name, index }) => {
    const icons = {
        spa: 'spa',
        thread: 'spa',
        wax: 'hand-sparkles',
        makeup: 'brush',
        hair: 'feather',
        color: 'palette',
        manicure: 'hand-peace',
        pedicure: 'shoe-prints',
        bridal: 'ring',
        mehendi: 'leaf',
    }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      whileHover={{ y: -8 }}
      className="service-card bg-white/70 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl p-5 text-center shadow-md border border-roseGold/30 hover:border-roseGold transition-all duration-300"
    >
      <div className="w-16 h-16 mx-auto bg-roseGold/10 rounded-full flex items-center justify-center text-2xl text-roseGold mb-3">
        <i className={`fas fa-${icons[icon] || 'spa'}`}></i>
      </div>
      <h3 className="font-semibold text-luxuryBrown dark:text-white">{name}</h3>
    </motion.div>
  )
}

export default ServiceCard