import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import { ThemeProvider } from './context/ThemeContext'
import { BookingProvider } from './context/BookingContext'
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home'
import ServicesPage from './pages/ServicesPage'
import OffersPage from './pages/OffersPage'
import GalleryPage from './pages/GalleryPage'
import BookingPage from './pages/BookingPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import NotFound from './pages/NotFound'
import ScrollToTop from './components/common/ScrollToTop'

function App() {
  return (
    <ThemeProvider>
      <BookingProvider>
        <Router>
          <ScrollToTop />
          <Toaster 
            position="top-center"
            toastOptions={{
              duration: 4000,
              style: {
                background: '#E6B17E',
                color: '#fff',
                borderRadius: '1rem',
              },
            }}
          />
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route index element={<Home />} />
              <Route path="services" element={<ServicesPage />} />
              <Route path="offers" element={<OffersPage />} />
              <Route path="gallery" element={<GalleryPage />} />
              <Route path="booking" element={<BookingPage />} />
              <Route path="about" element={<AboutPage />} />
              <Route path="contact" element={<ContactPage />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </Router>
      </BookingProvider>
    </ThemeProvider>
  )
}

export default App