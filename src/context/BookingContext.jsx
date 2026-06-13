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
      const response = await fetch(
        "https://localhost:7123/api/bookings",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(bookingData),
        }
      )

      if (!response.ok) {
        throw new Error("Failed to create booking")
      }

      const result = await response.json()

      localStorage.setItem(
        "lastBookingId",
        result.bookingId
      )

      toast.success(
        `Booking Confirmed! ID: ${result.bookingId}`
      )

      return result
    } catch (error) {
      console.error(error)
      toast.error("Booking Failed")
      throw error
    }
  }

  return (
    <BookingContext.Provider value={{ bookings, createBooking }}>
      {children}
    </BookingContext.Provider>
  )
}