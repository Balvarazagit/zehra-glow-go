import React from 'react'
import { motion } from 'framer-motion'
import SectionTitle from '../common/SectionTitle'
import { testimonialData } from './testimonialData'

const Testimonials = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-cream/50 to-peach/30">
      <div className="container mx-auto px-5 md:px-8">
        <SectionTitle 
          title="Loved by Our Clients" 
          subtitle="What Muslim women say about their experience"
        />
        
        <div className="flex overflow-x-auto gap-6 pb-6 snap-x hide-scrollbar">
          {testimonialData.map((testimonial, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="snap-start min-w-[280px] md:min-w-[380px] bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-roseGold/20"
            >
              <i className="fas fa-quote-left text-roseGold text-2xl mb-3"></i>
              <p className="text-gray-700 dark:text-gray-300 italic">"{testimonial.text}"</p>
              <div className="flex items-center gap-3 mt-4">
                <i className="fas fa-user-circle text-3xl text-roseGold"></i>
                <div>
                  <h4 className="font-bold text-luxuryBrown dark:text-white">{testimonial.name}</h4>
                  <div className="flex text-yellow-400">
                    {'★'.repeat(testimonial.rating)}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials