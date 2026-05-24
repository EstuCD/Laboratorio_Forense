type Props = {
    onLogout: () => void
  }
  
  export default function Header({ onLogout }: Props) {
  
    return (
  
      <header className="header">
  
        <input
          type="text"
          placeholder="Buscar..."
        />
  
        <div className="header-right">
  
          <span className="user-name">
            Administrador
          </span>
  
          <button
            className="logout-btn"
            onClick={onLogout}
          >
            Cerrar Sesión
          </button>
  
        </div>
  
      </header>
    )
  }