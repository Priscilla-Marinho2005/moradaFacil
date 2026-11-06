import { useLayoutEffect } from 'react'
import { BrowserRouter, Outlet, Route, Routes, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import PropertyDetailPage from './pages/PropertyDetailPage'
import NotFoundPage from './pages/NotFoundPage'

function ScrollToTop() {
  const location = useLocation()
  useLayoutEffect(() => {
    if (location.hash) return
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [location.pathname, location.hash])
  return null
}

function ScrollHashIntoView() {
  const location = useLocation()
  useLayoutEffect(() => {
    if (!location.hash) return
    const id = decodeURIComponent(location.hash.slice(1))
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [location.pathname, location.hash])
  return null
}

function AppShell() {
  const location = useLocation()
  const isHome = location.pathname === '/'

  return (
    <>
      <Navbar variant={isHome ? 'hero' : 'solid'} />
      <Outlet />
      <ScrollToTop />
      <ScrollHashIntoView />
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppShell />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/imovel/:id" element={<PropertyDetailPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
