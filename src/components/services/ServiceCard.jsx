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
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.08 }}
      whileHover={{
        y: -12,
        scale: 1.03,
      }}
      className="
        relative
        overflow-hidden
        rounded-3xl
        p-6
        text-center
        border
        border-roseGold/20
        bg-white/70
        dark:bg-gradient-to-br
        dark:from-[#1A1818]
        dark:to-[#2B2222]
        backdrop-blur-xl
        shadow-lg
        hover:shadow-2xl
        transition-all
        duration-500
        group
      "
    >
      {/* Hover Glow */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-r from-roseGold/10 to-transparent"></div>

      {/* Icon Circle */}
      <div
        className="
          relative
          z-10
          w-20
          h-20
          mx-auto
          rounded-full
          flex
          items-center
          justify-center
          bg-roseGold/10
          dark:bg-roseGold/20
          border
          border-roseGold/30
          mb-5
          group-hover:scale-110
          group-hover:rotate-6
          transition-all
          duration-500
        "
      >
        <i
          className={`fas fa-${icons[icon] || 'spa'} text-3xl text-roseGold`}
        ></i>
      </div>

      {/* Service Name */}
      <h3
        className="
          relative
          z-10
          text-lg
          md:text-xl
          font-semibold
          text-luxuryBrown
          dark:text-white
          tracking-wide
        "
      >
        {name}
      </h3>

      {/* Bottom Glow Line */}
      <div className="absolute bottom-0 left-0 h-1 w-0 bg-roseGold group-hover:w-full transition-all duration-500"></div>
    </motion.div>
  )
}

export default ServiceCard