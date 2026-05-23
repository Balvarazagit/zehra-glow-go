import React from 'react'
import { motion } from 'framer-motion'
import SectionTitle from '../common/SectionTitle'
import FeatureCard from './FeatureCard'
import { featuresData } from './featuresData'

const WhyChooseUs = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-5 md:px-8">
        <SectionTitle 
          title="Why Zehra Glow & Go?" 
          subtitle="Privacy, trust & excellence at your doorstep"
        />
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuresData.map((feature, idx) => (
            <FeatureCard key={idx} {...feature} index={idx} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs