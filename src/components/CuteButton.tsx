import { motion } from 'framer-motion'
import type { ButtonHTMLAttributes, ReactNode } from 'react'

type CuteButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode
  variant?: 'primary' | 'secondary'
  subtitle?: string
}

export function CuteButton({
  children,
  variant = 'primary',
  subtitle,
  className = '',
  ...props
}: CuteButtonProps) {
  const baseStyles =
    'w-full max-w-xs rounded-full px-8 py-4 font-display text-lg font-bold shadow-lg transition-colors disabled:cursor-not-allowed disabled:opacity-50'

  const variants = {
    primary:
      'bg-kawaii-rose text-white shadow-kawaii-rose/30 hover:bg-kawaii-coral active:scale-95',
    secondary:
      'border-2 border-kawaii-rose bg-white/80 text-kawaii-coral hover:bg-kawaii-cream active:scale-95',
  }

  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className="w-full max-w-xs"
    >
      <button
        type="button"
        className={`${baseStyles} ${variants[variant]} ${className}`}
        {...props}
      >
        <span className="block">{children}</span>
        {subtitle && (
          <span className="mt-1 block text-sm font-normal opacity-80">{subtitle}</span>
        )}
      </button>
    </motion.div>
  )
}
