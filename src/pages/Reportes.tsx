export default function Reportes() {
    return (
      <div className="page">
  
        <h1>Reportes Forenses</h1>
  
        <input
          type="text"
          placeholder="Buscar reporte..."
        />
  
        <div className="report-layout">
  
          <div className="panel">
  
            <h3>Opciones</h3>
  
            <button>Reporte Técnico</button>
  
            <button>Reporte Judicial</button>
  
            <button>Firma Digital</button>
  
            <button>Exportar PDF</button>
  
          </div>
  
          <div className="panel viewer">
  
            Vista previa del reporte
  
          </div>
  
        </div>
  
      </div>
    )
  }