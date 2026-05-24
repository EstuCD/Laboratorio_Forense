type Props = {
    onLogin: () => void
  }
  
  export default function Login({ onLogin }: Props) {
    return (
      <div className="login-container">
  
        <div className="login-box">
  
          <div className="login-header">
  
            <h1>
              Laboratorio de Informática Forense
            </h1>
  
            <p>
              Sistema de Gestión de Evidencias Digitales
            </p>
  
          </div>
  
          <input
            type="text"
            placeholder="Usuario"
          />
  
          <input
            type="password"
            placeholder="Contraseña"
          />
  
          <button onClick={onLogin}>
            Ingresar
          </button>
  
          <a
            href="#"
            className="forgot-password"
          >
            Recuperar contraseña
          </a>
  
        </div>
  
      </div>
    )
  }