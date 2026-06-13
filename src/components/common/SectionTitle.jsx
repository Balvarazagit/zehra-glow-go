import React from 'react'
import { motion } from 'framer-motion'

const SectionTitle = ({ title, subtitle, centered = true }) => {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-serif font-semibold text-luxuryBrown dark:text-roseGold tracking-wide"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-[#AD8A6C] dark:text-gray-300 mt-3 max-w-xl mx-auto"
        >
          {subtitle}
        </motion.p>
      )}
      <div className="w-20 h-[2px] bg-roseGold mx-auto mt-4 rounded-full"></div>
    </div>
  )
}

export default SectionTitle