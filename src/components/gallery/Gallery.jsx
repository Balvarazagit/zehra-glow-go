import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SectionTitle from '../common/SectionTitle'
import { galleryData } from './galleryData'

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null)

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-[#FFF8F4] to-[#FFEFE7] dark:from-[#111111] dark:to-[#1A1414] overflow-hidden">
      <div className="container mx-auto px-5 md:px-8">
        <SectionTitle
          title="Our Beauty Gallery"
          subtitle="Elegant transformations & bridal inspiration"
        />

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-14">
          {galleryData.map((image, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.08 }}
              whileHover={{
                y: -8,
                scale: 1.03,
              }}
              className="
                relative
                overflow-hidden
                rounded-3xl
                cursor-pointer
                group
                shadow-lg
                border
                border-white/20
                dark:border-roseGold/10
              "
              onClick={() => setSelectedImage(image.url)}
            >
              {/* Image */}
              <img
                src={image.url}
                alt={image.title}
                className="
                  w-full
                  h-full
                  object-cover
                  aspect-square
                  transition-all
                  duration-700
                  group-hover:scale-110
                "
              />

              {/* Overlay */}
              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-black/70
                  via-black/10
                  to-transparent
                  opacity-0
                  group-hover:opacity-100
                  transition-all
                  duration-500
                  flex
                  items-end
                  p-5
                "
              >
                <div>
                  <h3 className="text-white text-lg font-semibold">
                    {image.title}
                  </h3>

                  <p className="text-gray-200 text-sm mt-1">
                    Luxury beauty experience
                  </p>
                </div>
              </div>

              {/* Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-roseGold/10 transition duration-500"></div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Premium Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="
              fixed
              inset-0
              bg-black/95
              backdrop-blur-xl
              z-50
              flex
              items-center
              justify-center
              p-4
            "
            onClick={() => setSelectedImage(null)}
          >
            {/* Close Button */}
            <button
              className="
                absolute
                top-5
                right-5
                w-12
                h-12
                rounded-full
                bg-white/10
                hover:bg-white/20
                text-white
                text-3xl
                flex
                items-center
                justify-center
                transition-all
                duration-300
              "
            >
              ×
            </button>

            {/* Image */}
            <motion.img
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              src={selectedImage}
              alt="Gallery"
              className="
                max-w-full
                max-h-[90vh]
                object-contain
                rounded-3xl
                shadow-2xl
                border
                border-white/10
              "
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Gallery