import React from 'react'
import { motion } from 'framer-motion'
import Gallery from '../components/gallery/Gallery'

const GalleryPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="pt-24">
        <Gallery />
      </div>
    </motion.div>
  )
}

export default GalleryPage