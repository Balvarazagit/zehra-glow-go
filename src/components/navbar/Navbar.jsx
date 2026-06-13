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
  { name: "Track", path: '/track-booking' },
]

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const { darkMode, toggleDarkMode } = useTheme()
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40)
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
        className={`
          fixed top-0 left-0 w-full z-50
          transition-all duration-300
          border-b border-white/10
          ${
            isScrolled
              ? 'bg-white/70 dark:bg-[#141414]/80 backdrop-blur-2xl shadow-xl'
              : 'bg-white/30 dark:bg-[#141414]/40 backdrop-blur-xl'
          }
        `}
      >
        <div className="container mx-auto px-5 md:px-8">
          <div className="flex items-center justify-between h-[78px]">

            {/* Logo */}
            <Link to="/" className="flex items-center gap-3">
              <div className="
                w-12 h-12
                rounded-full
                bg-gradient-to-br
                from-roseGold/20
                to-roseGold/5
                dark:from-roseGold/30
                dark:to-transparent
                border border-roseGold/20
                flex items-center justify-center
                shadow-lg
              ">
                <i className="fas fa-spa text-roseGold text-xl"></i>
              </div>

              <div>
                <h2 className="
                  font-serif
                  text-2xl
                  font-bold
                  text-luxuryBrown
                  dark:text-white
                ">
                  Zehra Glow
                </h2>

                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Luxury Home Salon
                </p>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">

              {NavLinks.map((link) => {
                const active = location.pathname === link.path

                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`
                      relative
                      text-sm
                      font-medium
                      transition-all
                      duration-300
                      ${
                        active
                          ? 'text-roseGold'
                          : 'text-[#6B4C3A] dark:text-gray-300 hover:text-roseGold'
                      }
                    `}
                  >
                    {link.name}

                    {active && (
                      <motion.div
                        layoutId="navbar-indicator"
                        className="
                          absolute
                          -bottom-2
                          left-0
                          w-full
                          h-[2px]
                          bg-roseGold
                          rounded-full
                        "
                      />
                    )}
                  </Link>
                )
              })}

              {/* Dark Mode */}
              <button
                onClick={toggleDarkMode}
                className="
                  w-11 h-11
                  rounded-full
                  bg-white/60
                  dark:bg-[#252525]
                  border border-roseGold/20
                  flex items-center justify-center
                  text-roseGold
                  hover:scale-110
                  transition-all
                  duration-300
                  shadow-lg
                "
              >
                <i
                  className={`fas ${
                    darkMode ? 'fa-sun' : 'fa-moon'
                  }`}
                ></i>
              </button>
            </div>

            {/* Mobile */}
            <div className="md:hidden flex items-center gap-3">

              <button
                onClick={toggleDarkMode}
                className="
                  w-10 h-10
                  rounded-full
                  bg-white/50
                  dark:bg-[#252525]
                  border border-roseGold/20
                  text-roseGold
                  flex items-center justify-center
                "
              >
                <i
                  className={`fas ${
                    darkMode ? 'fa-sun' : 'fa-moon'
                  }`}
                ></i>
              </button>

              <button
                onClick={() => setMobileMenuOpen(true)}
                className="
                  w-10 h-10
                  rounded-full
                  bg-roseGold/10
                  border border-roseGold/20
                  text-roseGold
                  flex items-center justify-center
                "
              >
                <i className="fas fa-bars text-lg"></i>
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </>
  )
}

export default Navbar