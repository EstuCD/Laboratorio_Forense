export default function Evidencias() {
    return (
      <div className="page">
  
        <h1>Registro de Evidencias</h1>
  
        <form className="form-grid">
  
          <input
            type="text"
            placeholder="ID Evidencia"
          />
  
          <select>
  
            <option>PC</option>
            <option>Laptop</option>
            <option>Móvil</option>
            <option>Documentos</option>
            <option>Correo</option>
            <option>Red Social</option>
            <option>Otros</option>
  
          </select>
  
          <input
            type="text"
            placeholder="Responsable"
          />
  
          <select>
  
            <option>Pendiente</option>
            <option>En análisis</option>
            <option>Finalizado</option>
  
          </select>
  
          <input type="date" />
  
          <textarea
            placeholder="Descripción"
          ></textarea>
  
          <div className="upload-box">
  
            <label>
              Adjuntar Evidencia
            </label>
  
            <input type="file" />
  
          </div>
  
          <div className="hash-box">
  
            <strong>SHA256:</strong>
  
            <p>
              A94A8FE5CCB19BA61C4C0873D391E987982FBBD3
            </p>
  
          </div>
  
          <button>
            Registrar Evidencia
          </button>
  
        </form>
  
      </div>
    )
  }