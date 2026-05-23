import React from 'react'
import { motion } from 'framer-motion'
import SectionTitle from '../common/SectionTitle'
import ServiceCard from './ServiceCard'
import { servicesData } from './servicesData'

const Services = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-[#FFF8F4] to-[#FFEFE7] dark:from-[#111111] dark:to-[#1B1515]">
      <div className="container mx-auto px-5 md:px-8">
        <SectionTitle 
          title="Indulge in Luxury Services" 
          subtitle="Experience premium home treatments with halal-certified products"
        />
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {servicesData.map((service, idx) => (
            <ServiceCard key={idx} {...service} index={idx} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services