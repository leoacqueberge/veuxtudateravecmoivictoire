import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { activities } from '../data/activities'
import { useBooking } from '../context/BookingContext'
import { CuteButton } from '../components/CuteButton'
import { PageTransition } from '../components/PageTransition'

export function ActivitiesPage() {
  const navigate = useNavigate()
  const { activity, setActivity } = useBooking()
  const [error, setError] = useState('')

  const handleValidate = () => {
    if (!activity) {
      setError('Choisis une activité (ou tout faire, on est pas pressés) 💕')
      return
    }
    setError('')
    navigate('/recap')
  }

  return (
    <PageTransition>
      <span className="text-4xl">✨🎀✨</span>
      <h1 className="font-display text-2xl font-bold text-kawaii-coral sm:text-3xl">
        On fait quoi ensemble ? ✨
      </h1>

      <div className="grid w-full max-w-md gap-3">
        {activities.map((item) => {
          const isSelected = activity?.id === item.id

          return (
            <motion.button
              key={item.id}
              type="button"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => {
                setActivity(item)
                setError('')
              }}
              className={`rounded-2xl border-2 px-4 py-3 text-left shadow-sm transition-colors ${
                isSelected
                  ? 'border-kawaii-rose bg-kawaii-pink/40 shadow-md'
                  : 'border-kawaii-pink/60 bg-white/80 hover:bg-kawaii-cream'
              } ${item.isAll ? 'border-dashed' : ''}`}
            >
              <span className="mr-2 text-xl">{item.emoji}</span>
              <span
                className={`font-body text-sm sm:text-base ${
                  isSelected ? 'font-semibold text-kawaii-coral' : 'text-gray-700'
                }`}
              >
                {item.label}
              </span>
              {isSelected && <span className="ml-2">💕</span>}
            </motion.button>
          )
        })}
      </div>

      {activity?.isAll && (
        <p className="rounded-2xl border-2 border-dashed border-kawaii-rose bg-white/80 px-4 py-3 font-display text-lg font-semibold text-kawaii-coral">
          Bravo c&apos;était ça la bonne réponse ✨
        </p>
      )}

      {error && (
        <p className="rounded-full bg-kawaii-pink/30 px-4 py-2 text-sm text-kawaii-coral">
          {error}
        </p>
      )}

      <CuteButton onClick={handleValidate}>Valider 💕</CuteButton>
    </PageTransition>
  )
}
