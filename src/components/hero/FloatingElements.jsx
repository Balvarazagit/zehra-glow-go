import React from 'react'

const FloatingElements = () => {
  const petals = Array.from({ length: 15 }, (_, i) => ({
    left: Math.random() * 100,
    delay: Math.random() * 10,
    duration: 10 + Math.random() * 10,
    size: 15 + Math.random() * 25,
    rotation: Math.random() * 360,
  }))

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {petals.map((petal, idx) => (
        <div
          key={idx}
          className="absolute text-roseGold/30 animate-float"
          style={{
            left: `${petal.left}%`,
            top: '-5%',
            animationDelay: `${petal.delay}s`,
            animationDuration: `${petal.duration}s`,
            fontSize: petal.size,
            transform: `rotate(${petal.rotation}deg)`,
          }}
        >
          🌸
        </div>
      ))}
      <div className="absolute top-20 left-10 w-32 h-32 bg-roseGold/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-peach/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
    </div>
  )
}

export default FloatingElements