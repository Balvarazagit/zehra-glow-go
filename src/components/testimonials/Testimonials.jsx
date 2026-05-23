import React from 'react'
import { motion } from 'framer-motion'
import SectionTitle from '../common/SectionTitle'
import { testimonialData } from './testimonialData'

const Testimonials = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-[#FFF8F4] to-[#FFEFE7] dark:from-[#111111] dark:to-[#1A1414] overflow-hidden">
      <div className="container mx-auto px-5 md:px-8">
        <SectionTitle
          title="Loved by Our Clients"
          subtitle="What Muslim women say about their experience"
        />

        <div className="flex overflow-x-auto gap-7 pb-6 snap-x snap-mandatory hide-scrollbar mt-14">
          {testimonialData.map((testimonial, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{
                y: -10,
                scale: 1.02,
              }}
              className="
                relative
                overflow-hidden
                snap-start
                min-w-[300px]
                md:min-w-[400px]
                rounded-[32px]
                border
                border-roseGold/20
                bg-white/80
                dark:bg-gradient-to-br
                dark:from-[#1B1818]
                dark:to-[#2B2222]
                backdrop-blur-xl
                shadow-xl
                p-8
                group
                transition-all
                duration-500
              "
            >
              {/* Hover Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-roseGold/10 to-transparent transition duration-500"></div>

              {/* Quote Icon */}
              <div
                className="
                  w-14
                  h-14
                  rounded-full
                  bg-roseGold/10
                  dark:bg-roseGold/20
                  flex
                  items-center
                  justify-center
                  border
                  border-roseGold/20
                  mb-5
                "
              >
                <i className="fas fa-quote-left text-roseGold text-xl"></i>
              </div>

              {/* Review Text */}
              <p
                className="
                  relative
                  z-10
                  text-gray-700
                  dark:text-gray-300
                  italic
                  leading-8
                  text-[15px]
                "
              >
                "{testimonial.text}"
              </p>

              {/* Bottom Section */}
              <div className="flex items-center justify-between mt-8">
                <div className="flex items-center gap-4">
                  {/* User Avatar */}
                  <div
                    className="
                      w-14
                      h-14
                      rounded-full
                      bg-roseGold/10
                      dark:bg-roseGold/20
                      flex
                      items-center
                      justify-center
                      border
                      border-roseGold/20
                    "
                  >
                    <i className="fas fa-user text-roseGold text-xl"></i>
                  </div>

                  {/* User Info */}
                  <div>
                    <h4 className="font-semibold text-lg text-luxuryBrown dark:text-white">
                      {testimonial.name}
                    </h4>

                    <div className="flex gap-1 mt-1 text-yellow-400 text-sm">
                      {'★'.repeat(testimonial.rating)}
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Hover Line */}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-roseGold group-hover:w-full transition-all duration-500"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials