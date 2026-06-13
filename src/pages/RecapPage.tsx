import { useNavigate } from 'react-router-dom'
import { useBooking } from '../context/BookingContext'
import { getActivityRecapMessage } from '../data/activityMessages'
import { CuteButton } from '../components/CuteButton'
import { CuteImage } from '../components/CuteImage'
import { PageTransition } from '../components/PageTransition'
import { RecapStickers } from '../components/RecapStickers'

function formatDate(date: Date) {
  return date.toLocaleDateString('fr-FR', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

function formatTime(time: string) {
  if (time === 'all-day') return 'Toute la journée'
  const [hours, minutes] = time.split(':')
  return `${hours}h${minutes}`
}

export function RecapPage() {
  const navigate = useNavigate()
  const { date, everyDay, time, activity, reset } = useBooking()

  const handleRestart = () => {
    reset()
    navigate('/')
  }

  if ((!date && !everyDay) || (!everyDay && !time) || !activity) {
    return (
      <PageTransition>
        <p className="text-kawaii-coral">Oups, il manque des infos ! 💕</p>
        <CuteButton onClick={() => navigate('/date')}>Retour au date picker 📅</CuteButton>
      </PageTransition>
    )
  }

  return (
    <PageTransition>
      <span className="text-4xl">💑✨💕</span>

      <RecapStickers>
        <CuteImage
          src="/images/photo-couple.png"
          alt="Photo de nous deux"
          className="aspect-[4/5] w-full max-w-xs"
          placeholderEmoji="💑"
          placeholderText="photo-couple.png"
        />
      </RecapStickers>

      <div className="w-full max-w-sm rounded-3xl border-2 border-kawaii-pink bg-white/80 p-6 shadow-lg">
        <h1 className="font-display text-2xl font-bold text-kawaii-coral">Notre date 💕</h1>

        <div className="mt-5 flex flex-col gap-3 text-left">
          <p className="text-lg text-gray-700">
            <span className="mr-2">📅</span>
            {everyDay ? (
              'Je peux pas choisir de date je veux te voir tous les jours'
            ) : (
              <span className="capitalize">{formatDate(date!)}</span>
            )}
          </p>
          {time && (
            <p className="text-lg text-gray-700">
              <span className="mr-2">🕐</span>
              {formatTime(time)}
            </p>
          )}
          <p className="text-lg text-gray-700">
            <span className="mr-2">{activity.emoji}</span>
            {activity.label}
          </p>
        </div>
      </div>

      <p className="font-display text-xl font-semibold text-kawaii-rose">
        {getActivityRecapMessage(activity.id)}
      </p>

      <CuteButton variant="secondary" onClick={handleRestart}>
        Recommencer ✨
      </CuteButton>
    </PageTransition>
  )
}
