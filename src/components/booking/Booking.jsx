import React, { useState, useEffect } from 'react'
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
  const [trackingId, setTrackingId] = useState("")
  const handleSubmit = async (e) => {
    e.preventDefault()

    if (
      !formData.name ||
      !formData.phone ||
      !formData.address ||
      !formData.date ||
      !formData.time
    ) {
      toast.error('Please fill all required fields')
      return
    }

    try {
      const result = await createBooking(formData)

      setTrackingId(result.bookingId)

      localStorage.setItem(
        "latestBookingId",
        result.bookingId
      )

      toast.success("Booking Confirmed Successfully ✨")

      setFormData({
        name: '',
        phone: '',
        service: 'Facial & Waxing Basic',
        address: '',
        date: '',
        time: '',
        notes: '',
      })
    } catch (error) {
      console.error(error)
    }
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  useEffect(() => {
    const savedId = localStorage.getItem("latestBookingId")

    if (savedId) {
      setTrackingId(savedId)
    }
  }, [])

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-[#FFF8F4] to-[#FFEFE7] dark:from-[#111111] dark:to-[#1A1414] overflow-hidden">
      <div className="container mx-auto px-5 md:px-8">
        <div className="max-w-4xl mx-auto">
          <SectionTitle
            title="Book Your Glow Session"
            subtitle="Reserve your luxury beauty appointment in seconds"
          />

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="
              relative
              overflow-hidden
              rounded-[36px]
              border
              border-roseGold/20
              bg-white/80
              dark:bg-gradient-to-br
              dark:from-[#1B1818]
              dark:to-[#2B2222]
              backdrop-blur-2xl
              shadow-2xl
              p-6
              md:p-10
            "
          >
            {/* Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-roseGold/5 to-transparent"></div>

            <form onSubmit={handleSubmit} className="relative z-10">
              <div className="grid md:grid-cols-2 gap-5">
                {/* Name */}
                <div>
                  <label className="text-sm font-medium text-luxuryBrown dark:text-gray-200 mb-2 block">
                    Full Name
                  </label>

                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="
                      w-full
                      p-4
                      rounded-2xl
                      border
                      border-roseGold/20
                      bg-white/70
                      dark:bg-[#2A2323]
                      dark:text-white
                      focus:outline-none
                      focus:border-roseGold
                      focus:ring-2
                      focus:ring-roseGold/20
                      transition-all
                    "
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="text-sm font-medium text-luxuryBrown dark:text-gray-200 mb-2 block">
                    Phone Number
                  </label>

                  <input
                    type="tel"
                    name="phone"
                    placeholder="Enter your phone number"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="
                      w-full
                      p-4
                      rounded-2xl
                      border
                      border-roseGold/20
                      bg-white/70
                      dark:bg-[#2A2323]
                      dark:text-white
                      focus:outline-none
                      focus:border-roseGold
                      focus:ring-2
                      focus:ring-roseGold/20
                      transition-all
                    "
                  />
                </div>

                {/* Service */}
                <div>
                  <label className="text-sm font-medium text-luxuryBrown dark:text-gray-200 mb-2 block">
                    Select Service
                  </label>

                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="
                      w-full
                      p-4
                      rounded-2xl
                      border
                      border-roseGold/20
                      bg-white/70
                      dark:bg-[#2A2323]
                      dark:text-white
                      focus:outline-none
                      focus:border-roseGold
                      focus:ring-2
                      focus:ring-roseGold/20
                      transition-all
                    "
                  >
                    <option>Facial & Waxing Basic</option>
                    <option>Cleanup & Waxing</option>
                    <option>Facial & Waxing Full</option>
                    <option>Bridal Makeup</option>
                    <option>Hair Spa Treatment</option>
                  </select>
                </div>

                {/* Address */}
                <div>
                  <label className="text-sm font-medium text-luxuryBrown dark:text-gray-200 mb-2 block">
                    Address
                  </label>

                  <input
                    type="text"
                    name="address"
                    placeholder="Enter your address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                    className="
                      w-full
                      p-4
                      rounded-2xl
                      border
                      border-roseGold/20
                      bg-white/70
                      dark:bg-[#2A2323]
                      dark:text-white
                      focus:outline-none
                      focus:border-roseGold
                      focus:ring-2
                      focus:ring-roseGold/20
                      transition-all
                    "
                  />
                </div>

                {/* Date */}
                <div>
                  <label className="text-sm font-medium text-luxuryBrown dark:text-gray-200 mb-2 block">
                    Appointment Date
                  </label>

                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                    className="
                      w-full
                      p-4
                      rounded-2xl
                      border
                      border-roseGold/20
                      bg-white/70
                      dark:bg-[#2A2323]
                      dark:text-white
                      focus:outline-none
                      focus:border-roseGold
                      focus:ring-2
                      focus:ring-roseGold/20
                      transition-all
                    "
                  />
                </div>

                {/* Time */}
                <div>
                  <label className="text-sm font-medium text-luxuryBrown dark:text-gray-200 mb-2 block">
                    Appointment Time
                  </label>

                  <input
                    type="time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    required
                    className="
                      w-full
                      p-4
                      rounded-2xl
                      border
                      border-roseGold/20
                      bg-white/70
                      dark:bg-[#2A2323]
                      dark:text-white
                      focus:outline-none
                      focus:border-roseGold
                      focus:ring-2
                      focus:ring-roseGold/20
                      transition-all
                    "
                  />
                </div>

                {/* Notes */}
                <div className="md:col-span-2">
                  <label className="text-sm font-medium text-luxuryBrown dark:text-gray-200 mb-2 block">
                    Special Requests
                  </label>

                  <textarea
                    name="notes"
                    rows="4"
                    placeholder="Any modest preferences or special requests..."
                    value={formData.notes}
                    onChange={handleChange}
                    className="
                      w-full
                      p-4
                      rounded-2xl
                      border
                      border-roseGold/20
                      bg-white/70
                      dark:bg-[#2A2323]
                      dark:text-white
                      focus:outline-none
                      focus:border-roseGold
                      focus:ring-2
                      focus:ring-roseGold/20
                      transition-all
                      resize-none
                    "
                  ></textarea>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <button
                  type="submit"
                  className="
                    flex-1
                    py-4
                    rounded-full
                    bg-roseGold
                    hover:bg-[#d89b66]
                    text-white
                    font-medium
                    shadow-lg
                    hover:shadow-roseGold/30
                    transition-all
                    duration-300
                  "
                >
                  <i className="fas fa-calendar-check mr-2"></i>
                  Confirm Booking
                </button>

                <a
                  href="https://wa.me/919029215892?text=Hello%20Zehra%20Glow%20%26%20Go%2C%20I%20want%20to%20book%20a%20service"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    flex-1
                    py-4
                    rounded-full
                    bg-green-600
                    hover:bg-green-700
                    text-white
                    font-medium
                    flex
                    items-center
                    justify-center
                    gap-2
                    shadow-lg
                    transition-all
                    duration-300
                  "
                >
                  <i className="fab fa-whatsapp text-xl"></i>
                  Book on WhatsApp
                </a>
              </div>
            </form>
            {trackingId && (
              <div
                className="
                  mt-6
                  p-5
                  rounded-2xl
                  bg-green-50
                  border
                  border-green-300
                  text-center
                "
              >
                <h3 className="text-xl font-bold text-green-700">
                  Booking Confirmed 🎉
                </h3>

                <p className="mt-2 text-gray-700">
                  Your Tracking ID
                </p>

                <div className="mt-3 text-2xl font-bold text-green-800">
                  {trackingId}
                </div>

                <p className="mt-3 text-sm text-gray-600">
                  Save this Tracking ID to track your booking status.
                </p>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Booking