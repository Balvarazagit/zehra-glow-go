import React from 'react'
import Hero from '../components/hero/Hero'
import Services from '../components/services/Services'
import EidOffers from '../components/offers/EidOffers'
import WhyChooseUs from '../components/about/WhyChooseUs'
import Gallery from '../components/gallery/Gallery'
import Testimonials from '../components/testimonials/Testimonials'
import Booking from '../components/booking/Booking'

const Home = () => {
  return (
    <>
      <Hero />
      <Services />
      <EidOffers />
      <WhyChooseUs />
      <Gallery />
      <Testimonials />
      <Booking />
    </>
  )
}

export default Home