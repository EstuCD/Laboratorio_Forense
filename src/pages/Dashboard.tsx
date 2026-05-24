export default function Dashboard() {

    const casos = [
      {
        id: 'CASE-001',
        investigador: 'Juan Pérez',
        estado: 'Activo',
        prioridad: 'Alta'
      },
  
      {
        id: 'CASE-002',
        investigador: 'Ana Torres',
        estado: 'En análisis',
        prioridad: 'Media'
      },
  
      {
        id: 'CASE-003',
        investigador: 'Carlos Ruiz',
        estado: 'Cerrado',
        prioridad: 'Baja'
      }
    ]
  
    return (
  
      <div className="dashboard-page">
  
        <div className="dashboard-header">
  
          <div>
  
            <h1>
              Dashboard Forense
            </h1>
  
            <p>
              Monitoreo general del laboratorio digital
            </p>
  
          </div>
  
        </div>
  
        {/* TARJETAS */}
  
        <div className="stats-grid">
  
          <div className="stat-card">
  
            <h3>Casos Activos</h3>
  
            <h2>12</h2>
  
            <span>
              +2 esta semana
            </span>
  
          </div>
  
          <div className="stat-card">
  
            <h3>Evidencias Procesadas</h3>
  
            <h2>85</h2>
  
            <span>
              Integridad verificada
            </span>
  
          </div>
  
          <div className="stat-card">
  
            <h3>Alertas Críticas</h3>
  
            <h2>3</h2>
  
            <span>
              Requieren atención
            </span>
  
          </div>
  
          <div className="stat-card">
  
            <h3>Reportes Generados</h3>
  
            <h2>24</h2>
  
            <span>
              Último mes
            </span>
  
          </div>
  
        </div>
  
        {/* CONTENIDO CENTRAL */}
  
        <div className="dashboard-main">
  
          {/* GRAFICA */}
  
          <div className="dashboard-panel">
  
            <div className="panel-header">
  
              <h3>
                Estado de Investigaciones
              </h3>
  
            </div>
  
            <div className="chart-container">
  
              <div className="chart-bar">
  
                <span>Activos</span>
  
                <div className="bar">
  
                  <div
                    className="fill active"
                    style={{ width: '80%' }}
                  ></div>
  
                </div>
  
              </div>
  
              <div className="chart-bar">
  
                <span>En análisis</span>
  
                <div className="bar">
  
                  <div
                    className="fill analysis"
                    style={{ width: '60%' }}
                  ></div>
  
                </div>
  
              </div>
  
              <div className="chart-bar">
  
                <span>Cerrados</span>
  
                <div className="bar">
  
                  <div
                    className="fill closed"
                    style={{ width: '40%' }}
                  ></div>
  
                </div>
  
              </div>
  
            </div>
  
          </div>
  
          {/* ALERTAS */}
  
          <div className="dashboard-panel">
  
            <div className="panel-header">
  
              <h3>
                Alertas del Sistema
              </h3>
  
            </div>
  
            <div className="alerts-list">
  
              <div className="alert-item critical">
                Hash inconsistente detectado
              </div>
  
              <div className="alert-item warning">
                Evidencia pendiente de análisis
              </div>
  
              <div className="alert-item success">
                Integridad validada correctamente
              </div>
  
            </div>
  
          </div>
  
        </div>
  
        {/* TABLA */}
  
        <div className="dashboard-panel">
  
          <div className="panel-header">
  
            <h3>
              Últimos Casos Registrados
            </h3>
  
          </div>
  
          <table>
  
            <thead>
  
              <tr>
  
                <th>ID</th>
  
                <th>Investigador</th>
  
                <th>Estado</th>
  
                <th>Prioridad</th>
  
              </tr>
  
            </thead>
  
            <tbody>
  
              {
                casos.map((caso) => (
  
                  <tr key={caso.id}>
  
                    <td>{caso.id}</td>
  
                    <td>{caso.investigador}</td>
  
                    <td>{caso.estado}</td>
  
                    <td>{caso.prioridad}</td>
  
                  </tr>
  
                ))
              }
  
            </tbody>
  
          </table>
  
        </div>
  
      </div>
    )
  }