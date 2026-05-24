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

  // Estado de sesión
  const [isLogged, setIsLogged] = useState(false)

  // Pantalla Login
  if (!isLogged) {

    return (

      <Login
        onLogin={() => setIsLogged(true)}
      />

    )
  }

  // Sistema principal
  return (

    <BrowserRouter>

      <div className="app-container">

        {/* SIDEBAR */}

        <Sidebar />

        {/* CONTENIDO PRINCIPAL */}

        <div className="main-content">

          {/* HEADER */}

          <Header
            onLogout={() => setIsLogged(false)}
          />

          {/* RUTAS */}

          <Routes>

            {/* DASHBOARD */}

            <Route
              path="/"
              element={<Dashboard />}
            />

            {/* CASOS */}

            <Route
              path="/casos"
              element={<Casos />}
            />

            {/* EVIDENCIAS */}

            <Route
              path="/evidencias"
              element={<Evidencias />}
            />

            {/* ANALISIS */}

            <Route
              path="/analisis"
              element={<Analisis />}
            />

            {/* CUSTODIA */}

            <Route
              path="/custodia"
              element={<Custodia />}
            />

            {/* REPORTES */}

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