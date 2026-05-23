import React, { useState } from 'react'
import { motion } from 'framer-motion'
import SectionTitle from '../common/SectionTitle'
import { galleryData } from './galleryData'

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null)

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-cream/30 to-blush/20">
      <div className="container mx-auto px-5 md:px-8">
        <SectionTitle 
          title="Our Beauty Gallery" 
          subtitle="Elegant transformations & bridal inspiration"
        />
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {galleryData.map((image, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.05 }}
              whileHover={{ scale: 1.03 }}
              className="overflow-hidden rounded-2xl shadow-md cursor-pointer"
              onClick={() => setSelectedImage(image.url)}
            >
              <img src={image.url} className="w-full h-full object-cover aspect-square" alt={image.title} />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4" onClick={() => setSelectedImage(null)}>
          <img src={selectedImage} alt="Gallery" className="max-w-full max-h-full object-contain rounded-lg" />
          <button className="absolute top-4 right-4 text-white text-3xl" onClick={() => setSelectedImage(null)}>×</button>
        </div>
      )}
    </section>
  )
}

export default Gallery