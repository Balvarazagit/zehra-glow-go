import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'

const NavLinks = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'Offers', path: '/offers' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Book', path: '/booking' },
  { name: 'About', path: '/about' },
  { name: "Track", path: '/track-booking' },
]

const MobileMenu = ({ isOpen, onClose }) => {
  const location = useLocation()

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.35 }}
            className="
              fixed
              right-0
              top-0
              h-full
              w-[85%]
              max-w-sm
              z-50
              bg-white/90
              dark:bg-[#141414]/95
              backdrop-blur-2xl
              border-l border-white/10
              shadow-2xl
            "
          >
            <div className="p-6">

              {/* Top */}
              <div className="flex items-center justify-between mb-10">

                <div>
                  <h2 className="font-serif text-2xl font-bold text-luxuryBrown dark:text-white">
                    Zehra Glow
                  </h2>

                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    Luxury Beauty
                  </p>
                </div>

                <button
                  onClick={onClose}
                  className="
                    w-10 h-10
                    rounded-full
                    bg-roseGold/10
                    text-roseGold
                    flex items-center justify-center
                  "
                >
                  <i className="fas fa-times"></i>
                </button>
              </div>

              {/* Links */}
              <div className="flex flex-col gap-3">

                {NavLinks.map((link) => {
                  const active = location.pathname === link.path

                  return (
                    <Link
                      key={link.name}
                      to={link.path}
                      onClick={onClose}
                      className={`
                        px-5
                        py-4
                        rounded-2xl
                        transition-all
                        duration-300
                        font-medium
                        ${
                          active
                            ? 'bg-roseGold text-white shadow-lg'
                            : 'text-luxuryBrown dark:text-gray-300 hover:bg-roseGold/10 hover:text-roseGold'
                        }
                      `}
                    >
                      {link.name}
                    </Link>
                  )
                })}

                {/* WhatsApp */}
                <a
                  href="https://wa.me/919029215892"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    mt-5
                    bg-green-600
                    hover:bg-green-700
                    text-white
                    py-4
                    rounded-2xl
                    text-center
                    font-medium
                    flex items-center justify-center gap-2
                    transition-all
                    duration-300
                    shadow-lg
                  "
                >
                  <i className="fab fa-whatsapp text-xl"></i>
                  WhatsApp Booking
                </a>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export default MobileMenu