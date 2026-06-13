import React from 'react'
import { motion } from 'framer-motion'
import EidOffers from '../components/offers/EidOffers'
import Booking from '../components/booking/Booking'

const OffersPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="pt-24">
        <EidOffers />
        <Booking />
      </div>
    </motion.div>
  )
}

export default OffersPage