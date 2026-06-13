import { useNavigate, useSearchParams } from 'react-router-dom'
import { CuteButton } from '../components/CuteButton'
import { HeartConfetti } from '../components/HeartConfetti'
import { PageTransition } from '../components/PageTransition'

export function YesPage() {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const isAlsoYes = searchParams.get('also') === '1'

  return (
    <>
      <HeartConfetti />
      <PageTransition>
        <span className="text-6xl">🥹💕✨</span>

        {isAlsoYes && (
          <p className="rounded-2xl border-2 border-dashed border-kawaii-rose bg-white/80 px-4 py-3 font-display text-lg font-semibold text-kawaii-coral">
            J&apos;avais compris dès le premier oui lol 😂
          </p>
        )}

        <h1 className="font-display text-2xl leading-tight font-bold text-kawaii-coral sm:text-3xl">
          OMG tu as dit oui !! 🎉
        </h1>

        <CuteButton onClick={() => navigate('/date')}>Choisis une date ✨</CuteButton>
      </PageTransition>
    </>
  )
}
