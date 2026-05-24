import { Link } from 'react-router-dom'

export default function Sidebar() {
  return (
    <aside className="sidebar">

      <h2>Laboratorio Forense</h2>

      <nav>

        <Link to="/">Dashboard</Link>

        <Link to="/casos">Casos</Link>

        <Link to="/evidencias">Evidencias</Link>

        <Link to="/analisis">Análisis</Link>

        <Link to="/custodia">Custodia</Link>

        <Link to="/reportes">Reportes</Link>

      </nav>

    </aside>
  )
}