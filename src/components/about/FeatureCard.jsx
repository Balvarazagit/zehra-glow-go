import React from 'react'
import { motion } from 'framer-motion'

const FeatureCard = ({ icon, title, description, index }) => {
  const icons = {
    female: 'female',
    home: 'home',
    heart: 'hand-holding-heart',
    lock: 'lock',
    tags: 'tags',
    mobile: 'mobile-alt',
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{
        y: -10,
        scale: 1.03,
      }}
      className="
        relative
        overflow-hidden
        rounded-3xl
        p-8
        text-center
        border
        border-roseGold/20
        bg-white/70
        dark:bg-gradient-to-br
        dark:from-[#1E1B1B]
        dark:to-[#2B2222]
        backdrop-blur-xl
        shadow-lg
        hover:shadow-2xl
        transition-all
        duration-500
        group
      "
    >
      {/* Glow Effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-r from-roseGold/10 to-transparent"></div>

      {/* Icon */}
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
          transition-all
          duration-500
        "
      >
        <i
          className={`fas fa-${icons[icon]} text-3xl text-roseGold`}
        ></i>
      </div>

      {/* Title */}
      <h3
        className="
          relative
          z-10
          text-2xl
          font-semibold
          text-luxuryBrown
          dark:text-white
          mb-3
        "
      >
        {title}
      </h3>

      {/* Description */}
      <p
        className="
          relative
          z-10
          text-sm
          leading-7
          text-gray-600
          dark:text-gray-300
        "
      >
        {description}
      </p>

      {/* Bottom Glow Line */}
      <div className="absolute bottom-0 left-0 w-0 h-1 bg-roseGold group-hover:w-full transition-all duration-500"></div>
    </motion.div>
  )
}

export default FeatureCard