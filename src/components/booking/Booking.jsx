import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useBooking } from '../../context/BookingContext'
import SectionTitle from '../common/SectionTitle'
import toast from 'react-hot-toast'

const Booking = () => {
  const { createBooking } = useBooking()
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'Facial & Waxing Basic',
    address: '',
    date: '',
    time: '',
    notes: '',
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!formData.name || !formData.phone || !formData.address || !formData.date || !formData.time) {
      toast.error('Please fill all required fields')
      return
    }
    await createBooking(formData)
    setFormData({
      name: '', phone: '', service: 'Facial & Waxing Basic', address: '', date: '', time: '', notes: ''
    })
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <section id="booking-section" className="py-16 md:py-24">
      <div className="container mx-auto px-5 md:px-8">
        <div className="max-w-3xl mx-auto">
          <SectionTitle 
            title="Book Your Glow Session" 
            subtitle="Reserve your spot in seconds"
          />
          
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="glass-card p-6 md:p-8 rounded-3xl shadow-2xl"
          >
            <form onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-5">
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name *"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-3 rounded-xl border border-roseGold/30 bg-white/70 dark:bg-gray-800/70 focus:border-roseGold transition"
                  required
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number *"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full p-3 rounded-xl border border-roseGold/30 bg-white/70 dark:bg-gray-800/70 focus:border-roseGold transition"
                  required
                />
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full p-3 rounded-xl border border-roseGold/30 bg-white/70 dark:bg-gray-800/70 focus:border-roseGold transition"
                >
                  <option>Facial & Waxing Basic</option>
                  <option>Cleanup & Waxing</option>
                  <option>Facial & Waxing Full</option>
                  <option>Bridal Makeup</option>
                  <option>Hair Spa Treatment</option>
                </select>
                <input
                  type="text"
                  name="address"
                  placeholder="Your Address *"
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full p-3 rounded-xl border border-roseGold/30 bg-white/70 dark:bg-gray-800/70 focus:border-roseGold transition"
                  required
                />
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full p-3 rounded-xl border border-roseGold/30 bg-white/70 dark:bg-gray-800/70 focus:border-roseGold transition"
                  required
                />
                <input
                  type="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  className="w-full p-3 rounded-xl border border-roseGold/30 bg-white/70 dark:bg-gray-800/70 focus:border-roseGold transition"
                  required
                />
                <textarea
                  name="notes"
                  rows="2"
                  placeholder="Special requests (modest preferences)"
                  value={formData.notes}
                  onChange={handleChange}
                  className="md:col-span-2 p-3 rounded-xl border border-roseGold/30 bg-white/70 dark:bg-gray-800/70 focus:border-roseGold transition"
                ></textarea>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 mt-6">
                <button type="submit" className="bg-roseGold text-white py-3 px-8 rounded-full flex-1 hover:shadow-lg transition duration-300">
                  <i className="fas fa-calendar-alt"></i> Confirm Booking
                </button>
                <a
                  href="https://wa.me/919029215892?text=Hello%20Zehra%20Glow%20%26%20Go%2C%20I%20want%20to%20book%20a%20service"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-600 text-white py-3 px-6 rounded-full flex items-center justify-center gap-2 hover:bg-green-700 transition"
                >
                  <i className="fab fa-whatsapp"></i> Book on WhatsApp
                </a>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Booking