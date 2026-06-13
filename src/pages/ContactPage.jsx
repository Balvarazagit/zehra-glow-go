import React from 'react'
import { motion } from 'framer-motion'
import Booking from '../components/booking/Booking'

const ContactPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="pt-24">
        <Booking />
      </div>
    </motion.div>
  )
}

export default ContactPage