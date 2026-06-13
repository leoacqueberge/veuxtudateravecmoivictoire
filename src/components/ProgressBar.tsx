import { useLocation } from 'react-router-dom'

const steps = [
  { path: '/' },
  { path: '/yes' },
  { path: '/date' },
  { path: '/activities' },
  { path: '/recap' },
]

export function ProgressBar() {
  const { pathname } = useLocation()
  const currentIndex = steps.findIndex((step) => step.path === pathname)

  if (currentIndex === -1) return null

  return (
    <div className="fixed top-0 right-0 left-0 z-50 px-4 pt-[max(0.75rem,env(safe-area-inset-top))] pb-3">
      <div className="mx-auto flex max-w-lg gap-1.5">
        {steps.map((step, index) => (
          <div
            key={step.path}
            className="h-1 flex-1 overflow-hidden rounded-full bg-white/45 shadow-inner"
            aria-hidden
          >
            <div
              className="h-full rounded-full bg-kawaii-rose transition-all duration-500 ease-out"
              style={{ width: index <= currentIndex ? '100%' : '0%' }}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
