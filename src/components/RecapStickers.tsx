import type { ReactNode } from 'react'

const stickers = [
  { text: 'OFFICIEL 💕', className: '-top-3 -left-2 -rotate-12' },
  { text: 'VALIDÉ PAR VICTOIRE', className: '-top-4 -right-2 rotate-6' },
  { text: 'DATE APPROUVÉE ✨', className: '-bottom-3 -left-1 rotate-6' },
  { text: '100% KAWAII', className: '-bottom-4 -right-1 -rotate-12' },
]

export function RecapStickers({ children }: { children: ReactNode }) {
  return (
    <div className="relative w-full max-w-xs">
      {stickers.map((sticker) => (
        <span
          key={sticker.text}
          className={`absolute z-10 rounded-full border-2 border-kawaii-rose bg-white/95 px-3 py-1 font-display text-[10px] font-bold tracking-wide text-kawaii-coral shadow-md sm:text-xs ${sticker.className}`}
        >
          {sticker.text}
        </span>
      ))}
      {children}
    </div>
  )
}
