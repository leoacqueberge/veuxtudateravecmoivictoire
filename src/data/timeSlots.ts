export type TimeSlot = {
  value: string
  label: string
  isAll?: boolean
}

export const timeSlots: TimeSlot[] = [
  { value: '12:00', label: '12h00' },
  { value: '14:00', label: '14h00' },
  { value: '18:00', label: '18h00' },
  { value: '20:00', label: '20h00' },
  { value: 'all-day', label: 'Toute la journée', isAll: true },
]
