import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const hearts = ['💕', '💖', '💗', '✨', '⭐', '🌸', '💝', '🎀', '💫', '🌷', '🥰', '💘']

type Particle = {
  id: number
  emoji: string
  left: number
  delay: number
  duration: number
}

export function HeartConfetti() {
  const [particles, setParticles] = useState<Particle[]>([])

  useEffect(() => {
    setParticles(
      Array.from({ length: 36 }, (_, i) => ({
        id: i,
        emoji: hearts[i % hearts.length],
        left: Math.random() * 100,
        delay: Math.random() * 0.8,
        duration: 2 + Math.random() * 2,
      })),
    )
  }, [])

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden" aria-hidden>
      {particles.map((particle) => (
        <motion.span
          key={particle.id}
          className="absolute top-0 text-2xl"
          style={{ left: `${particle.left}%` }}
          initial={{ y: -20, opacity: 1, rotate: 0 }}
          animate={{
            y: '110vh',
            opacity: [1, 1, 0],
            rotate: 360,
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            ease: 'easeIn',
          }}
        >
          {particle.emoji}
        </motion.span>
      ))}
    </div>
  )
}
