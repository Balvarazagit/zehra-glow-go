import React, { createContext, useState, useContext } from 'react'
import toast from 'react-hot-toast'

const BookingContext = createContext()

export const useBooking = () => {
  const context = useContext(BookingContext)
  if (!context) {
    throw new Error('useBooking must be used within BookingProvider')
  }
  return context
}

export const BookingProvider = ({ children }) => {
  const [bookings, setBookings] = useState([])

  const createBooking = async (bookingData) => {
    try {
      // Simulate API call
      const newBooking = {
        id: Date.now(),
        ...bookingData,
        createdAt: new Date().toISOString(),
        status: 'pending'
      }
      setBookings([...bookings, newBooking])
      toast.success('Booking confirmed! We will contact you shortly.')
      return newBooking
    } catch (error) {
      toast.error('Booking failed. Please try again.')
      throw error
    }
  }

  return (
    <BookingContext.Provider value={{ bookings, createBooking }}>
      {children}
    </BookingContext.Provider>
  )
}