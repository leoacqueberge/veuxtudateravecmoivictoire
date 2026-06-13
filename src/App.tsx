import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { BookingProvider } from './context/BookingContext'
import { Layout } from './components/Layout'
import { InvitePage } from './pages/InvitePage'
import { YesPage } from './pages/YesPage'
import { DatePickerPage } from './pages/DatePickerPage'
import { ActivitiesPage } from './pages/ActivitiesPage'
import { RecapPage } from './pages/RecapPage'

export default function App() {
  return (
    <BookingProvider>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<InvitePage />} />
            <Route path="/yes" element={<YesPage />} />
            <Route path="/date" element={<DatePickerPage />} />
            <Route path="/activities" element={<ActivitiesPage />} />
            <Route path="/recap" element={<RecapPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </BookingProvider>
  )
}
