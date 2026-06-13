import { motion } from 'framer-motion'
import { useState } from 'react'

type CuteImageProps = {
  src: string
  alt: string
  className?: string
  placeholderEmoji?: string
  placeholderText?: string
  wiggle?: boolean
}

export function CuteImage({
  src,
  alt,
  className = '',
  placeholderEmoji = '📷',
  placeholderText = 'Ta photo ici',
  wiggle = true,
}: CuteImageProps) {
  const [hasError, setHasError] = useState(false)

  const frameClassName = `mx-auto overflow-hidden rounded-3xl border-4 border-kawaii-pink shadow-lg ${className}`

  if (hasError) {
    return (
      <div
        className={`flex flex-col items-center justify-center bg-white/70 p-8 ${frameClassName}`}
      >
        <span className="text-5xl">{placeholderEmoji}</span>
        <p className="mt-3 font-display text-sm text-kawaii-coral">{placeholderText}</p>
        <p className="mt-1 text-xs text-gray-500">
          Ajoute l&apos;image dans public/images/ 💕
        </p>
      </div>
    )
  }

  const image = (
    <img
      src={src}
      alt={alt}
      className="h-full w-full object-cover"
      onError={() => setHasError(true)}
    />
  )

  if (!wiggle) {
    return <div className={frameClassName}>{image}</div>
  }

  return (
    <motion.div
      whileHover={{
        rotate: [0, -2, 2, -2, 0],
        scale: 1.02,
      }}
      transition={{ duration: 0.5 }}
      className={frameClassName}
    >
      {image}
    </motion.div>
  )
}
