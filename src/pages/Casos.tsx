export default function Casos() {
    return (
      <div className="page">
  
        <div className="page-header">
  
          <h1>Gestión de Casos</h1>
  
          <button>
            Nuevo Caso
          </button>
  
        </div>
  
        <table>
  
          <thead>
  
            <tr>
  
              <th>ID</th>
              <th>Investigador</th>
              <th>Fecha</th>
              <th>Prioridad</th>
              <th>Estado</th>
              <th>Acciones</th>
  
            </tr>
  
          </thead>
  
          <tbody>
  
            <tr>
  
              <td>CASE-001</td>
              <td>Juan Pérez</td>
              <td>2025-01-10</td>
              <td>Alta</td>
              <td>Activo</td>
  
              <td>
  
                <button>Ver</button>
  
                <button>Editar</button>
  
              </td>
  
            </tr>
  
          </tbody>
  
        </table>
  
      </div>
    )
  }