export default function Analisis() {
    return (
      <div className="page">
  
        <h1>Análisis Forense</h1>
  
        <div className="analysis-layout">
  
          <div className="panel">
  
            <h3>Integridad</h3>
  
            <p>Estado: Verificado</p>
  
            <p>Ruta:</p>
  
            <small>
              /evidencias/caso001/disco.dd
            </small>
  
          </div>
  
          <div className="panel viewer">
  
            Vista previa digital
  
          </div>
  
          <div className="panel">
  
            <h3>Acciones</h3>
  
            <button>Analizar</button>
  
            <button>Verificar Hash</button>
  
            <button>Recuperar</button>
  
            <button>Exportar</button>
  
          </div>
  
        </div>
  
      </div>
    )
  }