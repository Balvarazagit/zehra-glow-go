import React from 'react'
import { motion } from 'framer-motion'

const Button = ({ children, variant = 'primary', className = '', onClick, ...props }) => {
  const baseStyles = "px-8 py-3 rounded-full transition-all duration-300 flex items-center gap-2 font-medium"
  const variants = {
    primary: "bg-roseGold text-white hover:shadow-xl hover:scale-105",
    secondary: "border-2 border-roseGold text-roseGold hover:bg-roseGold/10",
    outline: "border border-roseGold/50 text-luxuryBrown hover:border-roseGold hover:bg-roseGold/5",
  }

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </motion.button>
  )
}

export default Button