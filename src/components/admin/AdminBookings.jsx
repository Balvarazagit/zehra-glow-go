import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import toast from "react-hot-toast";
import './AdminBookings.css'

const API_URL = `{import.meta.env.VITE_API_URL}/api/bookings`;

const AdminBookings = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const fetchBookings = async () => {
    try {
      const response = await fetch(API_URL);
      if (!response.ok) throw new Error("Failed to fetch");
      const data = await response.json();
      setBookings(data);
    } catch (error) {
      console.error(error);
      toast.error("Failed to load bookings");
    } finally {
      setLoading(false);
    }
  };

  const deleteBooking = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this booking?"
    );
    if (!confirmDelete) return;

    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) throw new Error();

      toast.success("Booking deleted successfully");
      fetchBookings();
    } catch (error) {
      toast.error("Delete failed");
    }
  };

  const updateBookingStatus = async (id, status) => {
    try {
      const response = await fetch(`${API_URL}/${id}/status`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status }),
      });

      if (!response.ok) throw new Error();

      toast.success(`Booking marked as ${status}`);
      fetchBookings();
    } catch (error) {
      toast.error("Failed to update status");
    }
  };

  const viewBookingDetails = (booking) => {
    setSelectedBooking(booking);
    setShowModal(true);
  };

    const filteredBookings = bookings.filter((booking) => {
        const search = searchTerm.toLowerCase();

        const matchesSearch = Object.values(booking).some((value) =>
            String(value).toLowerCase().includes(search)
        );

        const matchesStatus =
            statusFilter === "all" || booking.status === statusFilter;

        return matchesSearch && matchesStatus;
    });

  const getStatusBadge = (status) => {
    const statusColors = {
      pending: "status-pending",
      confirmed: "status-confirmed",
      completed: "status-completed",
      cancelled: "status-cancelled",
    };
    return statusColors[status] || "status-pending";
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="admin-container"
    >
      <div className="admin-header">
        <motion.h1
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          className="admin-title"
        >
          <i className="fas fa-calendar-alt"></i> Bookings Dashboard
        </motion.h1>
        <motion.p
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.1 }}
          className="admin-subtitle"
        >
          Manage and track all customer appointments
        </motion.p>
      </div>

      {/* Stats Cards */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="stats-grid"
      >
        <div className="stat-card">
          <i className="fas fa-calendar-check"></i>
          <div className="stat-info">
            <h3>Total Bookings</h3>
            <p>{bookings.length}</p>
          </div>
        </div>
        <div className="stat-card">
          <i className="fas fa-clock"></i>
          <div className="stat-info">
            <h3>Pending</h3>
            <p>{bookings.filter(b => b.status === "pending").length}</p>
          </div>
        </div>
        <div className="stat-card">
          <i className="fas fa-check-circle"></i>
          <div className="stat-info">
            <h3>Confirmed</h3>
            <p>{bookings.filter(b => b.status === "confirmed").length}</p>
          </div>
        </div>
        <div className="stat-card">
          <i className="fas fa-chart-line"></i>
          <div className="stat-info">
            <h3>Completed</h3>
            <p>{bookings.filter(b => b.status === "completed").length}</p>
          </div>
        </div>
      </motion.div>

      {/* Filters */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="filters-section"
      >
        <div className="search-box">
          <i className="fas fa-search"></i>
          <input
            type="text"
            placeholder="Search anything (name, phone, service, address, status...)"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="status-filter">
          <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)}>
            <option value="all">All Status</option>
            <option value="pending">Pending</option>
            <option value="confirmed">Confirmed</option>
            <option value="completed">Completed</option>
            <option value="cancelled">Cancelled</option>
          </select>
        </div>
        <button className="refresh-btn" onClick={fetchBookings}>
          <i className="fas fa-sync-alt"></i> Refresh
        </button>
      </motion.div>

      {loading ? (
        <div className="loading-spinner">
          <i className="fas fa-spinner fa-spin"></i>
          <p>Loading bookings...</p>
        </div>
      ) : (
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="table-wrapper"
        >
          <table className="booking-table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Booking No.</th>
                    <th>Customer Name</th>
                    <th>Phone</th>
                    <th>Service</th>
                    <th>Address</th>
                    <th>Date</th>
                    <th>Time</th>
                    <th>Status</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
              <AnimatePresence>
                {filteredBookings.map((booking, index) => (
                  <motion.tr
                    key={booking.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <td>#{booking.id}</td>
                    <td>
                        <span className="booking-number">
                            {booking.bookingNumber}
                        </span>
                    </td>
                    <td>
                      <div className="customer-info">
                        <i className="fas fa-user-circle"></i>
                        <span>{booking.name}</span>
                      </div>
                    </td>
                    <td>{booking.phone}</td>
                    <td>{booking.service}</td>
                    <td className="address-cell">{booking.address.substring(0, 30)}...</td>
                    <td>{new Date(booking.date).toLocaleDateString()}</td>
                    <td>{booking.time}</td>
                    <td>
                      <select
                        className={`status-badge ${getStatusBadge(booking.status)}`}
                        value={booking.status || "pending"}
                        onChange={(e) => updateBookingStatus(booking.id, e.target.value)}
                      >
                        <option value="pending">Pending</option>
                        <option value="confirmed">Confirmed</option>
                        <option value="completed">Completed</option>
                        <option value="cancelled">Cancelled</option>
                      </select>
                    </td>
                    <td>
                      <div className="action-buttons">
                        <button
                          className="view-btn"
                          onClick={() => viewBookingDetails(booking)}
                          title="View Details"
                        >
                          <i className="fas fa-eye"></i>
                        </button>
                        <button
                          className="delete-btn"
                          onClick={() => deleteBooking(booking.id)}
                          title="Delete Booking"
                        >
                          <i className="fas fa-trash"></i>
                        </button>
                      </div>
                    </td>
                  </motion.tr>
                ))}
              </AnimatePresence>

              {filteredBookings.length === 0 && (
                <tr>
                  <td colSpan="9" className="no-data">
                    <i className="fas fa-calendar-times"></i>
                    <p>No bookings found</p>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </motion.div>
      )}

      {/* Booking Details Modal */}
      <AnimatePresence>
        {showModal && selectedBooking && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="modal-overlay"
            onClick={() => setShowModal(false)}
          >
            <motion.div
              initial={{ scale: 0.8, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 50 }}
              className="modal-content"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="modal-header">
                <h2>Booking Details</h2>
                <button className="close-btn" onClick={() => setShowModal(false)}>
                  <i className="fas fa-times"></i>
                </button>
              </div>
              <div className="modal-body">
                <div className="detail-row">
                    <strong>Database ID:</strong>
                    <span>#{selectedBooking.id}</span>
                </div>
                <div className="detail-row">
                    <strong>Booking Number:</strong>
                    <span>{selectedBooking.bookingNumber}</span>
                </div>
                <div className="detail-row">
                  <strong>Customer Name:</strong>
                  <span>{selectedBooking.name}</span>
                </div>
                <div className="detail-row">
                  <strong>Phone Number:</strong>
                  <span>{selectedBooking.phone}</span>
                </div>
                <div className="detail-row">
                  <strong>Service:</strong>
                  <span>{selectedBooking.service}</span>
                </div>
                <div className="detail-row">
                  <strong>Address:</strong>
                  <span>{selectedBooking.address}</span>
                </div>
                <div className="detail-row">
                  <strong>Date & Time:</strong>
                  <span>{new Date(selectedBooking.date).toLocaleDateString()} at {selectedBooking.time}</span>
                </div>
                <div className="detail-row">
                  <strong>Special Notes:</strong>
                  <span>{selectedBooking.notes || "No special requests"}</span>
                </div>
                <div className="detail-row">
                  <strong>Status:</strong>
                  <select
                    className={`status-badge ${getStatusBadge(selectedBooking.status)}`}
                    value={selectedBooking.status || "pending"}
                    onChange={(e) => {
                      updateBookingStatus(selectedBooking.id, e.target.value);
                      setShowModal(false);
                    }}
                  >
                    <option value="pending">Pending</option>
                    <option value="confirmed">Confirmed</option>
                    <option value="completed">Completed</option>
                    <option value="cancelled">Cancelled</option>
                  </select>
                </div>
              </div>
              <div className="modal-footer">
                <a
                  href={`https://wa.me/${selectedBooking.phone}?text=Hi%20${selectedBooking.name}%2C%20your%20booking%20at%20Zehra%20Glow%20%26%20Go%20has%20been%20confirmed.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="whatsapp-contact"
                >
                  <i className="fab fa-whatsapp"></i> Contact on WhatsApp
                </a>
                <button className="delete-btn" onClick={() => {
                  deleteBooking(selectedBooking.id);
                  setShowModal(false);
                }}>
                  Delete Booking
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default AdminBookings;