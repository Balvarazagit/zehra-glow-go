import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'

const NavLinks = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'Offers', path: '/offers' },
  { name: 'Why Us', path: '/about' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Testimonials', path: '/about' },
  { name: 'Book', path: '/booking' },
]

const MobileMenu = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-40"
            onClick={onClose}
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween' }}
            className="fixed right-0 top-0 h-full w-3/4 max-w-sm bg-white dark:bg-[#1E1B17] z-50 shadow-2xl"
          >
            <div className="p-6 pt-20">
              <button onClick={onClose} className="absolute top-4 right-4 text-2xl">
                <i className="fas fa-times"></i>
              </button>
              <div className="flex flex-col gap-4">
                {NavLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    onClick={onClose}
                    className="py-3 text-lg text-luxuryBrown dark:text-white hover:text-roseGold transition border-b border-roseGold/20"
                  >
                    {link.name}
                  </Link>
                ))}
                <a
                  href="https://wa.me/919029215892"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 bg-green-600 text-white py-3 rounded-full text-center flex items-center justify-center gap-2"
                >
                  <i className="fab fa-whatsapp"></i> WhatsApp Booking
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