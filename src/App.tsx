import { useState } from 'react'

import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'

import Sidebar from './components/Sidebar'
import Header from './components/Header'
import Login from './components/Login'

import Dashboard from './pages/Dashboard'
import Casos from './pages/Casos'
import Evidencias from './pages/Evidencias'
import Analisis from './pages/Analisis'
import Custodia from './pages/Custodia'
import Reportes from './pages/Reportes'

import './styles/global.css'

export default function App() {

  const [isLogged, setIsLogged] = useState(false)

  if (!isLogged) {
    return (
      <Login onLogin={() => setIsLogged(true)} />
    )
  }

  return (
    <BrowserRouter>

      <div className="app-container">

        <Sidebar />

        <div className="main-content">

          <Header />

          <Routes>

            <Route
              path="/"
              element={<Dashboard />}
            />

            <Route
              path="/casos"
              element={<Casos />}
            />

            <Route
              path="/evidencias"
              element={<Evidencias />}
            />

            <Route
              path="/analisis"
              element={<Analisis />}
            />

            <Route
              path="/custodia"
              element={<Custodia />}
            />

            <Route
              path="/reportes"
              element={<Reportes />}
            />

          </Routes>

        </div>

      </div>

    </BrowserRouter>
  )
}