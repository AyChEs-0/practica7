import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import styles from './Profile.module.css'

export default function Profile() {
  const { user, logout } = useAuth()

  return (
    <div className={styles.page}>
      <nav className={styles.nav}>
        <span className={styles.brand}>App Pràctica 7</span>
        <div className={styles.navLinks}>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/profile" className={styles.active}>Perfil</Link>
          <button className={styles.logoutBtn} onClick={logout}>Tancar sessió</button>
        </div>
      </nav>

      <main className={styles.main}>
        <div className={styles.card}>
          <div className={styles.avatar}>
            {user.name.charAt(0).toUpperCase()}
          </div>
          <h1 className={styles.name}>{user.name}</h1>
          <span className={styles.badge}>{user.role}</span>

          <table className={styles.table}>
            <tbody>
              <tr>
                <th>Nom d'usuari</th>
                <td>{user.username}</td>
              </tr>
              <tr>
                <th>Nom complet</th>
                <td>{user.name}</td>
              </tr>
              <tr>
                <th>Rol</th>
                <td>{user.role}</td>
              </tr>
              <tr>
                <th>Estat</th>
                <td><span className={styles.active2}>Actiu</span></td>
              </tr>
            </tbody>
          </table>

          <Link to="/dashboard" className={styles.backLink}>
            ← Tornar al dashboard
          </Link>
        </div>
      </main>
    </div>
  )
}
