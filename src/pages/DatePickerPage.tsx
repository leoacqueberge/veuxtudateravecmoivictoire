import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { timeSlots } from '../data/timeSlots'
import { useBooking } from '../context/BookingContext'
import { CuteButton } from '../components/CuteButton'
import { PageTransition } from '../components/PageTransition'

const EVERY_DAY_LABEL = 'Je peux pas choisir de date je veux te voir tous les jours'

export function DatePickerPage() {
  const navigate = useNavigate()
  const { date, everyDay, time, setDate, setEveryDay, setTime } = useBooking()
  const [error, setError] = useState('')

  const dateValue = date
    ? `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`
    : ''

  const handleDateChange = (value: string) => {
    if (!value) {
      setDate(null)
      return
    }
    const [year, month, day] = value.split('-').map(Number)
    setDate(new Date(year, month - 1, day))
    setError('')
  }

  const handleContinue = () => {
    if (everyDay) {
      setError('')
      navigate('/activities')
      return
    }

    if (!date || !time) {
      setError('Choisis une date et une heure pour continuer 💕')
      return
    }
    setError('')
    navigate('/activities')
  }

  return (
    <PageTransition>
      <span className="text-4xl">📅💕</span>
      <h1 className="font-display text-2xl font-bold text-kawaii-coral sm:text-3xl">
        Quand est-ce qu&apos;on se voit ? 📅
      </h1>

      <div className="flex w-full max-w-sm flex-col gap-5">
        <div className="flex flex-col gap-2 text-left">
          <span className="font-display font-semibold text-kawaii-coral">📅 Date</span>
          <input
            type="date"
            value={dateValue}
            min={new Date().toISOString().split('T')[0]}
            onChange={(e) => handleDateChange(e.target.value)}
            className="rounded-2xl border-2 border-kawaii-pink bg-white/80 px-4 py-3 font-body text-kawaii-coral shadow-sm outline-none focus:border-kawaii-rose focus:ring-2 focus:ring-kawaii-pink/40"
          />
          <motion.button
            type="button"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => {
              setEveryDay(true)
              setError('')
            }}
            className={`rounded-2xl border-2 border-dashed px-4 py-3 text-center text-sm shadow-sm transition-colors sm:text-base ${
              everyDay
                ? 'border-kawaii-rose bg-kawaii-pink/40 font-semibold text-kawaii-coral shadow-md'
                : 'border-kawaii-pink/60 bg-white/80 text-gray-700 hover:bg-kawaii-cream'
            }`}
          >
            {EVERY_DAY_LABEL}
            {everyDay && <span className="ml-1">💕</span>}
          </motion.button>
        </div>

        <div className="flex flex-col gap-2 text-left">
          <span className="font-display font-semibold text-kawaii-coral">🕐 Heure</span>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {timeSlots.map((slot) => {
              const isSelected = time === slot.value

              return (
                <motion.button
                  key={slot.value}
                  type="button"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {
                    setTime(slot.value)
                    setError('')
                  }}
                  className={`rounded-2xl border-2 px-4 py-3 text-center shadow-sm transition-colors ${
                    isSelected
                      ? 'border-kawaii-rose bg-kawaii-pink/40 font-semibold text-kawaii-coral shadow-md'
                      : 'border-kawaii-pink/60 bg-white/80 text-gray-700 hover:bg-kawaii-cream'
                  } ${slot.isAll ? 'col-span-2 border-dashed sm:col-span-3' : ''}`}
                >
                  {slot.label}
                  {isSelected && <span className="ml-1">💕</span>}
                </motion.button>
              )
            })}
          </div>
        </div>
      </div>

      {error && (
        <p className="rounded-full bg-kawaii-pink/30 px-4 py-2 text-sm text-kawaii-coral">
          {error}
        </p>
      )}

      <CuteButton onClick={handleContinue}>Continuer 💖</CuteButton>
    </PageTransition>
  )
}
