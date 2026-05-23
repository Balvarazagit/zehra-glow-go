import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'
import { useTheme } from '../../context/ThemeContext'
import MobileMenu from './MobileMenu'

const NavLinks = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'Offers', path: '/offers' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Book', path: '/booking' },
  { name: 'About', path: '/about' },
]

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { darkMode, toggleDarkMode } = useTheme()
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/90 dark:bg-[#1E1B17]/90 backdrop-blur-xl shadow-lg'
            : 'bg-white/60 dark:bg-[#1E1B17]/60 backdrop-blur-md'
        } border-b border-roseGold/20`}
      >
        <div className="container mx-auto px-5 py-3 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2">
            <i className="fas fa-star-of-life text-roseGold text-2xl"></i>
            <span className="font-serif text-2xl font-semibold text-luxuryBrown dark:text-roseGold">
              Zehra Glow & Go
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-8 items-center">
            {NavLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-[#6B4C3A] dark:text-gray-200 hover:text-roseGold transition font-medium ${
                  location.pathname === link.path ? 'text-roseGold border-b-2 border-roseGold' : ''
                }`}
              >
                {link.name}
              </Link>
            ))}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full bg-roseGold/10 text-roseGold hover:bg-roseGold/20 transition"
            >
              <i className={`fas ${darkMode ? 'fa-sun' : 'fa-moon'}`}></i>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex gap-3">
            <button
              onClick={toggleDarkMode}
              className="text-roseGold p-2"
            >
              <i className={`fas ${darkMode ? 'fa-sun' : 'fa-moon'} text-xl`}></i>
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-luxuryBrown dark:text-white"
            >
              <i className="fas fa-bars text-2xl"></i>
            </button>
          </div>
        </div>
      </motion.nav>

      <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </>
  )
}

export default Navbar