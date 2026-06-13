import React from 'react'
import { motion } from 'framer-motion'
import WhyChooseUs from '../components/about/WhyChooseUs'
import Testimonials from '../components/testimonials/Testimonials'
import Booking from '../components/booking/Booking'

const AboutPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="pt-24">
        <WhyChooseUs />
        <Testimonials />
        <Booking />
      </div>
    </motion.div>
  )
}

export default AboutPage