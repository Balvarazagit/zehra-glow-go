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
        <footer className="bg-gradient-to-r from-[#FAF0E6] to-[#FDE8DC] dark:from-gray-800 dark:to-gray-900 pt-12 pb-6 mt-10 border-t border-roseGold/20">
            <div className="container mx-auto px-5">
                <div className="grid md:grid-cols-4 gap-8">
                    {/* Brand */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                    >
                        <i className="fas fa-star-of-life text-roseGold text-2xl"></i>
                        <h3 className="font-serif text-2xl font-bold mt-2 text-luxuryBrown dark:text-roseGold">Zehra Glow & Go</h3>
                        <p className="text-sm mt-2 text-gray-600 dark:text-gray-300">Luxury home salon for modest women, since 2022.</p>
                    </motion.div>

                    {/* Quick Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                    >
                        <h4 className="font-bold text-lg text-luxuryBrown dark:text-white">Quick Links</h4>
                        <ul className="space-y-2 mt-3 text-sm">
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <Link to={link.path} className="text-gray-600 dark:text-gray-300 hover:text-roseGold transition">
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
                        <h4 className="font-bold text-lg text-luxuryBrown dark:text-white">Contact</h4>
                        <div className="space-y-2 mt-3 text-sm text-gray-600 dark:text-gray-300">
                            <p><i className="fas fa-phone-alt mr-2 text-roseGold"></i> +91 90292 15892</p>
                            <p><i className="fab fa-whatsapp mr-2 text-green-500"></i> WhatsApp Available</p>
                            <p><i className="fas fa-envelope mr-2"></i> hello@zehraglow.com</p>
                        </div>
                    </motion.div>

                    {/* Social */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                    >
                        <h4 className="font-bold text-lg text-luxuryBrown dark:text-white">Follow Us</h4>
                        <div className="flex gap-4 mt-3">
                            <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-roseGold text-2xl transition">
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-roseGold text-2xl transition">
                                <i className="fab fa-facebook"></i>
                            </a>
                            <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-roseGold text-2xl transition">
                                <i className="fab fa-pinterest"></i>
                            </a>
                        </div>
                    </motion.div>
                </div>

                <div className="border-t border-roseGold/20 mt-8 pt-5 text-center text-sm text-gray-500 dark:text-gray-400">
                    <p>
                        © 2025 Zehra Glow & Go — Privacy & Comfort First. Islamic elegance
                    </p>

                    <p className="mt-3 text-xs opacity-70">
                        Designed & Developed by{" "}
                        <a
                            href="https://portfolio-mxf7.vercel.app/"
                            target="_blank"
                            rel="noreferrer"
                            className="text-roseGold font-medium hover:underline"
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