import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import { activities, type Activity } from '../data/activities'

type BookingState = {
  date: Date | null
  everyDay: boolean
  time: string | null
  activity: Activity | null
}

type BookingContextValue = BookingState & {
  setDate: (date: Date | null) => void
  setEveryDay: (everyDay: boolean) => void
  setTime: (time: string | null) => void
  setActivity: (activity: Activity | null) => void
  reset: () => void
}

type StoredBooking = {
  date: string | null
  everyDay: boolean
  time: string | null
  activityId: string | null
}

const STORAGE_KEY = 'date-booking'

const initialState: BookingState = {
  date: null,
  everyDay: false,
  time: null,
  activity: null,
}

const BookingContext = createContext<BookingContextValue | null>(null)

function loadState(): BookingState {
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY)
    if (!raw) return initialState

    const stored = JSON.parse(raw) as StoredBooking
    const activity =
      stored.activityId != null
        ? (activities.find((item) => item.id === stored.activityId) ?? null)
        : null

    return {
      date: stored.date ? new Date(stored.date) : null,
      everyDay: stored.everyDay,
      time: stored.time,
      activity,
    }
  } catch {
    return initialState
  }
}

function saveState(state: BookingState) {
  const stored: StoredBooking = {
    date: state.date?.toISOString() ?? null,
    everyDay: state.everyDay,
    time: state.time,
    activityId: state.activity?.id ?? null,
  }
  sessionStorage.setItem(STORAGE_KEY, JSON.stringify(stored))
}

function clearState() {
  sessionStorage.removeItem(STORAGE_KEY)
}

export function BookingProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState(loadState)

  useEffect(() => {
    saveState(state)
  }, [state])

  const setDate = useCallback((date: Date | null) => {
    setState((prev) => ({ ...prev, date, everyDay: false }))
  }, [])

  const setEveryDay = useCallback((everyDay: boolean) => {
    setState((prev) => ({
      ...prev,
      everyDay,
      date: everyDay ? null : prev.date,
      time: everyDay ? null : prev.time,
    }))
  }, [])

  const setTime = useCallback((time: string | null) => {
    setState((prev) => ({ ...prev, time }))
  }, [])

  const setActivity = useCallback((activity: Activity | null) => {
    setState((prev) => ({ ...prev, activity }))
  }, [])

  const reset = useCallback(() => {
    clearState()
    setState(initialState)
  }, [])

  const value = useMemo(
    () => ({
      ...state,
      setDate,
      setEveryDay,
      setTime,
      setActivity,
      reset,
    }),
    [state, setDate, setEveryDay, setTime, setActivity, reset],
  )

  return (
    <BookingContext.Provider value={value}>{children}</BookingContext.Provider>
  )
}

export function useBooking() {
  const context = useContext(BookingContext)
  if (!context) {
    throw new Error('useBooking must be used within BookingProvider')
  }
  return context
}
