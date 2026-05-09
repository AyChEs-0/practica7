import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import styles from './Dashboard.module.css'

export default function Dashboard() {
  const { user, logout } = useAuth()

  return (
    <div className={styles.page}>
      <nav className={styles.nav}>
        <span className={styles.brand}>App Pràctica 7</span>
        <div className={styles.navLinks}>
          <Link to="/dashboard" className={styles.active}>Dashboard</Link>
          <Link to="/profile">Perfil</Link>
          <button className={styles.logoutBtn} onClick={logout}>Tancar sessió</button>
        </div>
      </nav>

      <main className={styles.main}>
        <h1>Benvingut, {user.name}!</h1>
        <p className={styles.sub}>Has iniciat sessió correctament.</p>

        <div className={styles.grid}>
          <div className={styles.card}>
            <span className={styles.icon}>👤</span>
            <h3>Usuari</h3>
            <p>{user.username}</p>
          </div>
          <div className={styles.card}>
            <span className={styles.icon}>🏷️</span>
            <h3>Rol</h3>
            <p>{user.role}</p>
          </div>
          <div className={styles.card}>
            <span className={styles.icon}>📅</span>
            <h3>Sessió</h3>
            <p>Activa</p>
          </div>
        </div>

        <Link to="/profile" className={styles.profileLink}>
          Veure el meu perfil →
        </Link>
      </main>
    </div>
  )
}
