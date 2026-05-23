import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Button from '../common/Button'
import FloatingElements from './FloatingElements'
import heroImage from '../../assets/hero.png'

const Hero = () => {
  return (
    <section className="pt-28 pb-12 md:pt-36 md:pb-20 relative overflow-hidden">
      <FloatingElements />
      
      <div className="container mx-auto px-5 md:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-10">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1 text-center lg:text-left"
          >
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-[#6E4F34] dark:text-roseGold leading-tight">
              Luxury Beauty Services
              <br />
              At Your Doorstep
            </h1>
            <p className="text-lg text-[#997F66] dark:text-gray-300 mt-6 max-w-lg mx-auto lg:mx-0">
              Professional home salon services specially crafted for women with comfort, privacy & elegance.
              Halal-friendly products and 100% women staff.
            </p>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start mt-8">
              <Link to="/booking">
                <Button variant="primary">
                  <i className="fas fa-calendar-check"></i> Book Appointment
                </Button>
              </Link>
              <Link to="/services">
                <Button variant="secondary">
                  <i className="fas fa-gem"></i> View Packages
                </Button>
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-1 flex justify-center"
          >
            <div className="relative w-80 h-80 md:w-[450px] md:h-[450px] rounded-full overflow-hidden shadow-2xl border-4 border-white/60 dark:border-roseGold/30">
              <img
                src={heroImage}
                alt="Hijabi woman receiving beauty service"
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-roseGold/20 to-transparent"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero