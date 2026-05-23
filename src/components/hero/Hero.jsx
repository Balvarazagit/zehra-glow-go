import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Button from '../common/Button'
import FloatingElements from './FloatingElements'
import heroImage from '../../assets/hero.png'

const Hero = () => {
  return (
    <section className="relative overflow-hidden pt-24 md:pt-32 pb-16 md:pb-24 bg-gradient-to-br from-[#FFF8F4] via-[#FFF3EC] to-[#FFE7DA] dark:from-[#111111] dark:via-[#181414] dark:to-[#221B1B]">
      
      <FloatingElements />

      {/* Glow Effect */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-roseGold/10 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-peach/20 blur-3xl rounded-full"></div>

      <div className="container mx-auto px-5 md:px-8 relative z-10">
        
        <div className="flex flex-col-reverse lg:flex-row items-center gap-14">

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="flex-1 text-center lg:text-left"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/70 dark:bg-[#2A2323] border border-roseGold/20 shadow-md mb-6">
              <span className="w-2 h-2 bg-roseGold rounded-full animate-pulse"></span>

              <p className="text-sm font-medium text-luxuryBrown dark:text-gray-200">
                Trusted Home Salon For Muslim Women
              </p>
            </div>

            {/* Heading */}
            <h1 className="text-5xl md:text-7xl leading-[1.1] font-serif font-bold text-[#6E4F34] dark:text-white">
              Luxury Beauty
              <span className="block text-roseGold mt-2">
                At Your Doorstep
              </span>
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl text-[#8A715D] dark:text-gray-300 mt-7 max-w-2xl mx-auto lg:mx-0 leading-8">
              Premium home salon services specially crafted for women with
              comfort, privacy & elegance. Halal-friendly products and
              professional female beauticians.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-5 justify-center lg:justify-start mt-10">
              <Link to="/booking">
                <Button variant="primary">
                  <i className="fas fa-calendar-check mr-2"></i>
                  Book Appointment
                </Button>
              </Link>

              <Link to="/services">
                <Button variant="secondary">
                  <i className="fas fa-spa mr-2"></i>
                  Explore Services
                </Button>
              </Link>
            </div>

            {/* Features */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 mt-10">
              <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                <i className="fas fa-check-circle text-roseGold"></i>
                100% Women Staff
              </div>

              <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                <i className="fas fa-shield-alt text-roseGold"></i>
                Privacy Guaranteed
              </div>

              <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                <i className="fas fa-home text-roseGold"></i>
                Doorstep Service
              </div>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 flex justify-center"
          >
            <div className="relative">

              {/* Outer Glow */}
              <div className="absolute inset-0 bg-roseGold/20 blur-3xl rounded-full scale-110"></div>

              {/* Main Image */}
              <div className="relative w-[320px] h-[320px] md:w-[520px] md:h-[520px] rounded-full overflow-hidden border-[10px] border-white/60 dark:border-[#2E2525] shadow-[0_20px_60px_rgba(0,0,0,0.2)]">
                <img
                  src={heroImage}
                  alt="Hijabi woman beauty service"
                  className="w-full h-full object-cover"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
              </div>

              {/* Floating Cards */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute top-10 -left-6 bg-white dark:bg-[#2A2323] px-5 py-3 rounded-2xl shadow-xl border border-roseGold/10"
              >
                <div className="flex items-center gap-3">
                  <i className="fas fa-star text-yellow-400"></i>

                  <div>
                    <h4 className="font-bold text-sm dark:text-white">
                      4.9 Rating
                    </h4>
                    <p className="text-xs text-gray-500">
                      Trusted by 2k+ Women
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 6, repeat: Infinity }}
                className="absolute bottom-10 -right-6 bg-white dark:bg-[#2A2323] px-5 py-3 rounded-2xl shadow-xl border border-roseGold/10"
              >
                <div className="flex items-center gap-3">
                  <i className="fab fa-whatsapp text-green-500 text-xl"></i>

                  <div>
                    <h4 className="font-bold text-sm dark:text-white">
                      Instant Booking
                    </h4>
                    <p className="text-xs text-gray-500">
                      Easy WhatsApp Support
                    </p>
                  </div>
                </div>
              </motion.div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default Hero