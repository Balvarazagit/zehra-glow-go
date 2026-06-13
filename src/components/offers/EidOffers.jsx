import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import SectionTitle from '../common/SectionTitle'
import { offersData } from './offersData'

const EidOffers = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-[#FFF7F2] to-[#FFEDE4] dark:from-[#111111] dark:to-[#1A1414] overflow-hidden">
      <div className="container mx-auto px-5 md:px-8">
        <SectionTitle
          title="Eid Special Offers"
          subtitle="Limited time luxury packages for the perfect glow"
        />

        <div className="grid md:grid-cols-3 gap-8 mt-14">
          {offersData.map((pkg, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.12 }}
              whileHover={{
                y: -14,
                scale: 1.03,
              }}
              className={`
                relative
                overflow-hidden
                rounded-[32px]
                border
                backdrop-blur-xl
                shadow-xl
                transition-all
                duration-500
                flex
                flex-col
                h-full
                group
                ${
                  idx === 1
                    ? 'border-roseGold bg-white dark:bg-gradient-to-br dark:from-[#241B1B] dark:to-[#332727] scale-[1.02]'
                    : 'border-roseGold/20 bg-white/80 dark:bg-gradient-to-br dark:from-[#1B1818] dark:to-[#2B2222]'
                }
              `}
            >
              {/* Popular Badge */}
              {idx === 1 && (
                <div className="absolute top-5 right-5 z-20 bg-roseGold text-white text-xs px-4 py-1 rounded-full shadow-lg">
                  Most Popular
                </div>
              )}

              {/* Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-roseGold/10 to-transparent transition duration-500"></div>

              <div className="relative z-10 p-8 flex flex-col h-full">
                {/* Package Name */}
                <h3 className="text-2xl md:text-3xl font-serif font-bold text-luxuryBrown dark:text-white leading-snug">
                  {pkg.name}
                </h3>

                {/* Price */}
                <div className="mt-5 flex items-end gap-3">
                  <span className="text-4xl font-bold text-roseGold">
                    {pkg.price}
                  </span>

                  <span className="line-through text-gray-400 text-lg mb-1">
                    {pkg.original}
                  </span>
                </div>

                {/* Features */}
                <ul className="mt-8 space-y-4 min-h-[220px]">
                  {pkg.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-3 text-sm md:text-base text-gray-700 dark:text-gray-300"
                    >
                      <div className="w-6 h-6 rounded-full bg-roseGold/10 dark:bg-roseGold/20 flex items-center justify-center">
                        <i className="fas fa-check text-roseGold text-xs"></i>
                      </div>

                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Button */}
                <div className="mt-auto pt-8">
                  <Link to="/booking">
                    <button
                      className="
                        w-full
                        py-3.5
                        rounded-full
                        bg-roseGold
                        hover:bg-[#d89b66]
                        text-white
                        font-medium
                        tracking-wide
                        shadow-lg
                        hover:shadow-roseGold/30
                        transition-all
                        duration-300
                      "
                    >
                      Book Now →
                    </button>
                  </Link>
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

export default EidOffers