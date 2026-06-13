import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const NotFound = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen flex items-center justify-center pt-24"
    >
      <div className="text-center">
        <h1 className="text-6xl font-serif text-roseGold mb-4">404</h1>
        <h2 className="text-2xl font-serif text-luxuryBrown mb-4">Page Not Found</h2>
        <p className="text-gray-600 mb-8">The page you're looking for doesn't exist.</p>
        <Link to="/" className="btn-primary inline-flex">
          <i className="fas fa-home mr-2"></i> Back to Home
        </Link>
      </div>
    </motion.div>
  )
}

export default NotFound