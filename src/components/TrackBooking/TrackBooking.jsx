import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import toast from "react-hot-toast";
import "./TrackBooking.css";

const API_URL = "https://localhost:7123/api/bookings";

const TrackBooking = () => {
  const [bookingId, setBookingId] = useState("");
  const [phone, setPhone] = useState("");
  const [booking, setBooking] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleTrack = async () => {
    if (!bookingId || !phone) {
      toast.error("Please enter Booking ID and Phone Number");
      setError("Both fields are required");
      return;
    }

    setError("");
    
    try {
      setLoading(true);
      setBooking(null);

      const response = await fetch(`${API_URL}/track/${bookingId}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        if (response.status === 404) {
          toast.error("Booking not found. Please check your Booking ID.");
          setError("No booking found with this ID");
        } else {
          toast.error("Something went wrong. Please try again.");
          setError("Server error. Please try later.");
        }
        return;
      }

      const data = await response.json();

      // Verify phone number matches
      if (data.phone !== phone) {
        toast.error("Phone number does not match this booking");
        setError("Phone number verification failed");
        return;
      }

      setBooking(data);
      toast.success("Booking found successfully!");
    } catch (error) {
      console.error("Track booking error:", error);
      toast.error("Network error. Please check your connection.");
      setError("Unable to connect to server");
    } finally {
      setLoading(false);
    }
  };

  const getStatusClass = (status) => {
    switch (status?.toLowerCase()) {
      case "confirmed":
        return "status-confirmed";
      case "completed":
        return "status-completed";
      case "cancelled":
        return "status-cancelled";
      default:
        return "status-pending";
    }
  };

  const getStatusIcon = (status) => {
    switch (status?.toLowerCase()) {
      case "confirmed":
        return "fas fa-check-circle";
      case "completed":
        return "fas fa-star";
      case "cancelled":
        return "fas fa-times-circle";
      default:
        return "fas fa-clock";
    }
  };

  const getStatusMessage = (status) => {
    switch (status?.toLowerCase()) {
      case "confirmed":
        return "Your booking has been confirmed! We'll contact you shortly.";
      case "completed":
        return "Service completed! Thank you for choosing Zehra Glow & Go.";
      case "cancelled":
        return "This booking has been cancelled. Please book again for services.";
      default:
        return "Your booking is pending confirmation. We'll update you soon.";
    }
  };

  const handleReset = () => {
    setBookingId("");
    setPhone("");
    setBooking(null);
    setError("");
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="track-container"
    >
      <div className="track-background">
        <div className="floating-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>
      </div>

      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="track-card"
      >
        <div className="track-header">
          <i className="fas fa-search-location"></i>
          <h1>Track Your Booking</h1>
          <p>Enter your booking details to check status</p>
        </div>

        <div className="track-form">
          <div className="input-group">
            <i className="fas fa-hashtag"></i>
            <input
              type="text"
              placeholder="Booking ID"
              value={bookingId}
              onChange={(e) => setBookingId(e.target.value)}
              disabled={loading}
            />
          </div>

          <div className="input-group">
            <i className="fas fa-phone-alt"></i>
            <input
              type="tel"
              placeholder="Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              disabled={loading}
            />
          </div>

          {error && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="error-message"
            >
              <i className="fas fa-exclamation-circle"></i>
              <span>{error}</span>
            </motion.div>
          )}

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleTrack}
            disabled={loading}
            className="track-btn"
          >
            {loading ? (
              <>
                <i className="fas fa-spinner fa-spin"></i>
                Searching...
              </>
            ) : (
              <>
                <i className="fas fa-search"></i>
                Track Booking
              </>
            )}
          </motion.button>

          {(bookingId || phone) && !booking && !loading && (
            <button onClick={handleReset} className="reset-btn">
              <i className="fas fa-undo-alt"></i>
              Clear Fields
            </button>
          )}
        </div>

        <AnimatePresence>
          {booking && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.4 }}
              className="booking-result"
            >
              <div className="result-header">
                <i className="fas fa-receipt"></i>
                <h2>Booking Details</h2>
                <span className={`status-badge ${getStatusClass(booking.status)}`}>
                  <i className={getStatusIcon(booking.status)}></i>
                  {booking.status || "Pending"}
                </span>
              </div>

              <div className="status-message">
                <i className={getStatusIcon(booking.status)}></i>
                <p>{getStatusMessage(booking.status)}</p>
              </div>

              <div className="booking-info-grid">
                <div className="info-item">
                  <div className="info-label">
                    <i className="fas fa-id-card"></i>
                    <strong>Booking ID</strong>
                  </div>
                  <div className="info-value">#{booking.id}</div>
                </div>

                <div className="info-item">
                  <div className="info-label">
                    <i className="fas fa-user"></i>
                    <strong>Customer Name</strong>
                  </div>
                  <div className="info-value">{booking.name}</div>
                </div>

                <div className="info-item">
                  <div className="info-label">
                    <i className="fas fa-phone-alt"></i>
                    <strong>Phone Number</strong>
                  </div>
                  <div className="info-value">{booking.phone}</div>
                </div>

                <div className="info-item">
                  <div className="info-label">
                    <i className="fas fa-spa"></i>
                    <strong>Service</strong>
                  </div>
                  <div className="info-value">{booking.service}</div>
                </div>

                <div className="info-item">
                  <div className="info-label">
                    <i className="fas fa-calendar-alt"></i>
                    <strong>Date</strong>
                  </div>
                  <div className="info-value">
                    {new Date(booking.date).toLocaleDateString('en-US', {
                      weekday: 'long',
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-label">
                    <i className="fas fa-clock"></i>
                    <strong>Time</strong>
                  </div>
                  <div className="info-value">{booking.time}</div>
                </div>

                <div className="info-item full-width">
                  <div className="info-label">
                    <i className="fas fa-map-marker-alt"></i>
                    <strong>Address</strong>
                  </div>
                  <div className="info-value">{booking.address}</div>
                </div>

                {booking.notes && (
                  <div className="info-item full-width">
                    <div className="info-label">
                      <i className="fas fa-comment"></i>
                      <strong>Special Notes</strong>
                    </div>
                    <div className="info-value notes">{booking.notes}</div>
                  </div>
                )}
              </div>

              <div className="booking-timeline">
                <h3>Booking Timeline</h3>
                <div className="timeline">
                  <div className={`timeline-step ${booking.status !== "cancelled" ? "active" : ""}`}>
                    <div className="timeline-icon">
                      <i className="fas fa-calendar-plus"></i>
                    </div>
                    <div className="timeline-content">
                      <h4>Booking Created</h4>
                      <p>{new Date(booking.createdAt || booking.date).toLocaleDateString()}</p>
                    </div>
                  </div>
                  <div className={`timeline-step ${booking.status === "confirmed" || booking.status === "completed" ? "active" : ""}`}>
                    <div className="timeline-icon">
                      <i className="fas fa-check-circle"></i>
                    </div>
                    <div className="timeline-content">
                      <h4>Confirmed</h4>
                      <p>Awaiting confirmation</p>
                    </div>
                  </div>
                  <div className={`timeline-step ${booking.status === "completed" ? "active" : ""}`}>
                    <div className="timeline-icon">
                      <i className="fas fa-star"></i>
                    </div>
                    <div className="timeline-content">
                      <h4>Service Completed</h4>
                      <p>Thank you for choosing us!</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="booking-actions">
                {booking.status !== "completed" && booking.status !== "cancelled" && (
                  <a
                    href={`https://wa.me/${booking.phone}?text=Hi%20${encodeURIComponent(booking.name)}%2C%20I%20want%20to%20inquire%20about%20my%20booking%20%23${booking.id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="whatsapp-support"
                  >
                    <i className="fab fa-whatsapp"></i>
                    Need Help? Contact Support
                  </a>
                )}
                <button onClick={handleReset} className="new-booking-btn">
                  <i className="fas fa-plus"></i>
                  Track Another Booking
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="track-footer">
          <p>
            <i className="fas fa-shield-alt"></i>
            Your information is secure and private
          </p>
          <p className="help-text">
            Need assistance? Call us at <strong>+91 90292 15892</strong>
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default TrackBooking;