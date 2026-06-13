import type { ReactNode } from 'react'
import { ProgressBar } from './ProgressBar'

const decorations = [
  { emoji: '💕', top: '8%', left: '6%', delay: '0s' },
  { emoji: '✨', top: '12%', right: '8%', delay: '0.5s' },
  { emoji: '💖', bottom: '15%', left: '10%', delay: '1s' },
  { emoji: '⭐', bottom: '20%', right: '6%', delay: '1.5s' },
  { emoji: '🌸', top: '45%', left: '4%', delay: '0.8s' },
  { emoji: '💗', top: '35%', right: '5%', delay: '1.2s' },
  { emoji: '🎀', top: '25%', left: '12%', delay: '0.3s' },
  { emoji: '💝', bottom: '35%', right: '12%', delay: '0.7s' },
  { emoji: '🌷', top: '60%', right: '8%', delay: '1.1s' },
  { emoji: '💫', bottom: '8%', left: '20%', delay: '0.9s' },
]

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="relative min-h-dvh overflow-hidden bg-linear-to-br from-kawaii-cream via-kawaii-lavender/40 to-kawaii-pink/30">
      {decorations.map((item) => (
        <span
          key={`${item.emoji}-${item.top ?? item.bottom}`}
          className="pointer-events-none absolute text-xl opacity-60 animate-sparkle select-none sm:text-2xl"
          style={{
            top: item.top,
            bottom: item.bottom,
            left: item.left,
            right: item.right,
            animationDelay: item.delay,
          }}
          aria-hidden
        >
          {item.emoji}
        </span>
      ))}

      <ProgressBar />

      <main className="relative z-10 mx-auto flex min-h-dvh max-w-lg flex-col items-center justify-center px-5 pt-16 pb-10">
        {children}
      </main>
    </div>
  )
}
