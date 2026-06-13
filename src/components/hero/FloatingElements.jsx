import React from 'react'

const FloatingElements = () => {
  const petals = Array.from({ length: 12 }, (_, i) => ({
    left: Math.random() * 100,
    delay: Math.random() * 10,
    duration: 10 + Math.random() * 10,
    size: 14 + Math.random() * 18,
    rotation: Math.random() * 360,
  }))

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">

      {/* Floating Flowers */}
      {petals.map((petal, idx) => (
        <div
          key={idx}
          className="absolute animate-float opacity-30"
          style={{
            left: `${petal.left}%`,
            top: '-10%',
            animationDelay: `${petal.delay}s`,
            animationDuration: `${petal.duration}s`,
            fontSize: `${petal.size}px`,
            transform: `rotate(${petal.rotation}deg)`,
          }}
        >
          ✨
        </div>
      ))}

      {/* Blur Shapes */}
      <div className="absolute top-20 left-10 w-40 h-40 bg-roseGold/10 rounded-full blur-3xl animate-pulse"></div>

      <div className="absolute bottom-20 right-10 w-56 h-56 bg-peach/20 rounded-full blur-3xl animate-pulse"></div>

      <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-white/20 rounded-full blur-2xl"></div>
    </div>
  )
}

export default FloatingElements