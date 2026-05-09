import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import styles from './Dashboard.module.css'

export default function Dashboard() {
  const { user, logout } = useAuth()

  return (
    <div className={styles.page}>
      <nav className={styles.nav}>
        <span className={styles.brand}>Pràctica 7</span>
        <div className={styles.navLinks}>
          <Link to="/dashboard" className={styles.navActive}>Dashboard</Link>
          <Link to="/profile">Perfil</Link>
          <button className={styles.logoutBtn} onClick={logout}>Tancar sessió</button>
        </div>
      </nav>

      <main className={styles.main}>
        <div className={styles.welcome}>
          <h1 className={styles.greeting}>Benvingut, {user.name}</h1>
          <p className={styles.greetingSub}>
            Has iniciat sessió correctament. Pots explorar el teu perfil o tancar la sessió.
          </p>
        </div>

        <section className={styles.infoSection}>
          <p className={styles.sectionLabel}>Informació de sessió</p>
          <div className={styles.infoList}>
            <div className={styles.infoRow}>
              <span className={styles.infoKey}>Nom d'usuari</span>
              <span className={styles.infoValue}>{user.username}</span>
            </div>
            <div className={styles.infoRow}>
              <span className={styles.infoKey}>Nom complet</span>
              <span className={styles.infoValue}>{user.name}</span>
            </div>
            <div className={styles.infoRow}>
              <span className={styles.infoKey}>Rol</span>
              <span className={styles.infoValue}>
                <span className={styles.badge}>{user.role}</span>
              </span>
            </div>
            <div className={styles.infoRow}>
              <span className={styles.infoKey}>Estat</span>
              <span className={styles.infoValue}>
                <span className={styles.statusDot}>Actiu</span>
              </span>
            </div>
          </div>
        </section>

        <Link to="/profile" className={styles.cta}>
          Veure el perfil complet →
        </Link>
      </main>
    </div>
  )
}
