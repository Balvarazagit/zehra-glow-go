import React from 'react'
import { motion } from 'framer-motion'
import Services from '../components/services/Services'
import Booking from '../components/booking/Booking'

const ServicesPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="pt-24">
        <Services />
        <Booking />
      </div>
    </motion.div>
  )
}

export default ServicesPage