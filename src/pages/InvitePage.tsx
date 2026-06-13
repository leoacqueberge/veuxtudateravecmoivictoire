import { useNavigate } from 'react-router-dom'
import { CuteButton } from '../components/CuteButton'
import { CuteImage } from '../components/CuteImage'
import { PageTransition } from '../components/PageTransition'
import { playCuteFeedback } from '../utils/playCuteFeedback'

export function InvitePage() {
  const navigate = useNavigate()

  const handleFirstYes = () => {
    playCuteFeedback()
    navigate('/yes')
  }

  const handleSecondYes = () => {
    playCuteFeedback()
    navigate('/yes?also=1')
  }

  return (
    <PageTransition>
      <span className="text-4xl">💕✨💕</span>
      <h1 className="font-display text-2xl leading-tight font-bold text-kawaii-coral sm:text-3xl">
        Accepterais-tu de faire un date avec ce mec trop kawaiiiiii
      </h1>

      <CuteImage
        src="/images/photo-invite.png"
        alt="Photo mignonne"
        className="aspect-square w-full max-w-xs"
        placeholderEmoji="💕"
        placeholderText="photo-invite.jpg"
      />

      <div className="flex w-full max-w-sm flex-col items-center gap-4">
        <CuteButton onClick={handleFirstYes}>Oui 💕</CuteButton>
        <CuteButton variant="secondary" onClick={handleSecondYes}>
          Oui aussi 💖
        </CuteButton>
      </div>
    </PageTransition>
  )
}
