import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Footer = () => {
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Offers', path: '/offers' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ]

  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-[#FFF8F4] to-[#FFEFE7] dark:from-[#111111] dark:to-[#1A1414] border-t border-roseGold/10">
      {/* Glow Background */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-roseGold/10 blur-3xl rounded-full"></div>

      <div className="container relative z-10 mx-auto px-5 md:px-8 pt-16 pb-8">
        <div className="grid md:grid-cols-4 gap-10">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 rounded-full bg-roseGold/10 dark:bg-roseGold/20 flex items-center justify-center border border-roseGold/20">
                <i className="fas fa-spa text-roseGold text-2xl"></i>
              </div>

              <div>
                <h3 className="font-serif text-2xl font-bold text-luxuryBrown dark:text-white">
                  Zehra Glow & Go
                </h3>

                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Luxury Home Salon
                </p>
              </div>
            </div>

            <p className="text-sm mt-5 leading-7 text-gray-600 dark:text-gray-300">
              Premium beauty services designed specially for modest women with
              privacy, elegance and comfort at home.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="text-xl font-semibold text-luxuryBrown dark:text-white mb-5">
              Quick Links
            </h4>

            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="
                      text-gray-600
                      dark:text-gray-300
                      hover:text-roseGold
                      transition-all
                      duration-300
                      hover:translate-x-1
                      inline-block
                    "
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-xl font-semibold text-luxuryBrown dark:text-white mb-5">
              Contact Info
            </h4>

            <div className="space-y-4 text-sm">
              <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                <div className="w-10 h-10 rounded-full bg-roseGold/10 dark:bg-roseGold/20 flex items-center justify-center">
                  <i className="fas fa-phone-alt text-roseGold"></i>
                </div>

                <span><a href="tel:+919029215892">+91 90292 15892</a></span>
              </div>

              <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center">
                  <i className="fab fa-whatsapp text-green-500"></i>
                </div>

                <span><a href="https://wa.me/919029215892">WhatsApp Available</a></span>
              </div>

              <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                <div className="w-10 h-10 rounded-full bg-roseGold/10 dark:bg-roseGold/20 flex items-center justify-center">
                  <i className="fas fa-envelope text-roseGold"></i>
                </div>

                <span><a href="mailto:zehraglowandgo@gmail.com">zehraglowandgo@gmail.com</a></span>
              </div>
            </div>
          </motion.div>

          {/* Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="text-xl font-semibold text-luxuryBrown dark:text-white mb-5">
              Follow Us
            </h4>

            <div className="flex gap-4">
              <a
                href="#"
                className="
                  w-12
                  h-12
                  rounded-full
                  bg-white
                  dark:bg-[#2A2323]
                  flex
                  items-center
                  justify-center
                  text-xl
                  text-gray-600
                  dark:text-gray-300
                  hover:text-roseGold
                  hover:scale-110
                  transition-all
                  duration-300
                  shadow-lg
                "
              >
                <i className="fab fa-instagram"></i>
              </a>

              <a
                href="#"
                className="
                  w-12
                  h-12
                  rounded-full
                  bg-white
                  dark:bg-[#2A2323]
                  flex
                  items-center
                  justify-center
                  text-xl
                  text-gray-600
                  dark:text-gray-300
                  hover:text-roseGold
                  hover:scale-110
                  transition-all
                  duration-300
                  shadow-lg
                "
              >
                <i className="fab fa-facebook-f"></i>
              </a>

              <a
                href="#"
                className="
                  w-12
                  h-12
                  rounded-full
                  bg-white
                  dark:bg-[#2A2323]
                  flex
                  items-center
                  justify-center
                  text-xl
                  text-gray-600
                  dark:text-gray-300
                  hover:text-roseGold
                  hover:scale-110
                  transition-all
                  duration-300
                  shadow-lg
                "
              >
                <i className="fab fa-pinterest-p"></i>
              </a>
            </div>
          </motion.div>
        </div>

        {/* Bottom */}
        <div className="border-t border-roseGold/10 mt-12 pt-6 text-center">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            © 2025 Zehra Glow & Go — Privacy & Comfort First.
            Islamic Elegance ✨
          </p>

          <p className="mt-3 text-xs text-gray-400 dark:text-gray-500">
            Designed & Developed by{' '}
            <a
              href="https://portfolio-mxf7.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="text-roseGold hover:underline font-medium"
            >
              Balva Aliraza
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer