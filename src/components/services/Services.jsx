import React from 'react'
import { motion } from 'framer-motion'
import SectionTitle from '../common/SectionTitle'
import ServiceCard from './ServiceCard'
import { servicesData } from './servicesData'

const Services = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-cream/50 to-blush/30">
      <div className="container mx-auto px-5 md:px-8">
        <SectionTitle 
          title="Indulge in Luxury Services" 
          subtitle="Experience premium home treatments with halal-certified products"
        />
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
          {servicesData.map((service, idx) => (
            <ServiceCard key={idx} {...service} index={idx} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services