import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import type { Page } from './types'
import HomePage from './pages/HomePage'
import TransferPage from './pages/TransferPage'

function getCurrentPage(): Page {
  const base = import.meta.env.BASE_URL.endsWith('/')
    ? import.meta.env.BASE_URL.slice(0, -1)
    : import.meta.env.BASE_URL
  const pathname = window.location.pathname
  const normalizedPath = pathname.startsWith(base) ? pathname.slice(base.length) || '/' : pathname

  return normalizedPath === '/transfer' ? 'transfer' : 'home'
}

function App() {
  const [currentPage, setCurrentPage] = useState<Page>(() => getCurrentPage())

  useEffect(() => {
    const syncPage = () => {
      setCurrentPage(getCurrentPage())
    }

    window.addEventListener('popstate', syncPage)

    return () => {
      window.removeEventListener('popstate', syncPage)
    }
  }, [])

  return (
    <div className="app-shell">
      <Header currentPage={currentPage} />
      {currentPage === 'transfer' ? <TransferPage /> : <HomePage />}
      <Footer />
    </div>
  )
}

export default App
