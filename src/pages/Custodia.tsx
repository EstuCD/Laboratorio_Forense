export default function Custodia() {
    return (
      <div className="page">
  
        <h1>Cadena de Custodia</h1>
  
        <div className="actions-bar">
  
          <button>Registrar Movimiento</button>
  
          <button>Generar Acta</button>
  
          <button>Exportar PDF</button>
  
        </div>
  
        <table>
  
          <thead>
  
            <tr>
  
              <th>Fecha</th>
              <th>Responsable</th>
              <th>Prioridad</th>
              <th>Observaciones</th>
              <th>Acciones</th>
  
            </tr>
  
          </thead>
  
          <tbody>
  
            <tr>
  
              <td>2025-01-10</td>
              <td>Administrador</td>
              <td>Alta</td>
              <td>Recepción correcta</td>
  
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