import React, { useState } from "react";

const Tracking = () => {
  const [bookingNumber, setBookingNumber] = useState("");
  const [booking, setBooking] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleTrack = async () => {
    if (!bookingNumber) return;

    try {
      setLoading(true);

      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/bookings/track/${bookingNumber}`
      );

      if (!response.ok) {
        throw new Error("Booking not found");
      }

      const data = await response.json();

      setBooking(data);
    } catch (error) {
      alert("Booking not found");
      setBooking(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto py-20 px-4">
      <h1 className="text-4xl font-bold mb-8">
        Track Booking
      </h1>

      <div className="flex gap-3">
        <input
          type="text"
          placeholder="Enter Booking ID"
          value={bookingNumber}
          onChange={(e) =>
            setBookingNumber(e.target.value)
          }
          className="border p-3 rounded-lg flex-1"
        />

        <button
          onClick={handleTrack}
          className="bg-roseGold text-white px-6 rounded-lg"
        >
          Track
        </button>
      </div>

      {loading && (
        <p className="mt-4">Loading...</p>
      )}

      {booking && (
        <div className="mt-8 p-6 border rounded-xl shadow">
          <h2 className="text-2xl font-semibold mb-4">
            Booking Details
          </h2>

          <p>
            <strong>Name:</strong> {booking.name}
          </p>

          <p>
            <strong>Service:</strong> {booking.service}
          </p>

          <p>
            <strong>Date:</strong>{" "}
            {new Date(
              booking.date
            ).toLocaleDateString()}
          </p>

          <p>
            <strong>Time:</strong> {booking.time}
          </p>

          <p>
            <strong>Status:</strong>{" "}
            <span
              className={
                booking.status === "confirmed"
                  ? "text-green-600"
                  : booking.status === "completed"
                  ? "text-blue-600"
                  : booking.status === "cancelled"
                  ? "text-red-600"
                  : "text-yellow-600"
              }
            >
              {booking.status}
            </span>
          </p>
        </div>
      )}
    </div>
  );
};

export default Tracking;