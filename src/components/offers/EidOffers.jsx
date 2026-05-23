import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import SectionTitle from '../common/SectionTitle'
import { offersData } from './offersData'

const EidOffers = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-peach/20 to-cream">
      <div className="container mx-auto px-5 md:px-8">
        <SectionTitle 
          title="Eid Special Offers" 
          subtitle="Limited time luxury packages for the perfect glow"
        />
        
        <div className="grid md:grid-cols-3 gap-8">
          {offersData.map((pkg, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -12 }}
              className="package-card bg-white dark:bg-gray-800 rounded-3xl shadow-xl overflow-hidden border border-roseGold/40 flex flex-col h-full"
            >
              <div className="p-6 bg-gradient-to-br from-[#FFF1E6] to-[#FFE4D6] dark:from-gray-700 dark:to-gray-800 flex flex-col h-full">
                <h3 className="text-2xl font-serif font-bold text-luxuryBrown dark:text-roseGold">{pkg.name}</h3>
                <div className="mt-2">
                  <span className="text-3xl font-bold text-roseGold">{pkg.price}</span>
                  <span className="line-through text-gray-400 ml-2">{pkg.original}</span>
                </div>
                <ul className="mt-4 space-y-3 text-sm min-h-[180px]">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <i className="fas fa-check-circle text-roseGold text-xs"></i>
                      <span className="dark:text-gray-200">{feature}</span>
                    </li>
                  ))}
                </ul>
                      <div className="mt-auto pt-6">
                          <Link to="/booking">
                              <button className="w-full bg-roseGold hover:bg-roseGold/80 text-white py-3 rounded-full transition duration-300 font-medium">
                                  Book Now →
                              </button>
                          </Link>
                      </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default EidOffers