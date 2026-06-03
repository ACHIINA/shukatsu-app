import { useState } from 'react'
import Sidebar from './components/Sidebar'
import AutoRegister from './pages/AutoRegister'
import Schedule from './pages/Schedule'
import Research from './pages/Research'
import EsDraft from './pages/EsDraft'
import Email from './pages/Email'

const PAGES = {
  autoRegister: AutoRegister,
  schedule: Schedule,
  research: Research,
  esDraft: EsDraft,
  email: Email,
}

export default function App() {
  const [currentPage, setCurrentPage] = useState('autoRegister')
  const Page = PAGES[currentPage]

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <Sidebar current={currentPage} onNavigate={setCurrentPage} />
      <main style={{ flex: 1, padding: '24px', overflowY: 'auto' }}>
        <Page />
      </main>
    </div>
  )
}
