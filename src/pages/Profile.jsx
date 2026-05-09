import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import styles from './Profile.module.css'

export default function Profile() {
  const { user, logout } = useAuth()

  return (
    <div className={styles.page}>
      <nav className={styles.nav}>
        <span className={styles.brand}>Pràctica 7</span>
        <div className={styles.navLinks}>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/profile" className={styles.navActive}>Perfil</Link>
          <button className={styles.logoutBtn} onClick={logout}>Tancar sessió</button>
        </div>
      </nav>

      <main className={styles.main}>
        <div className={styles.header}>
          <div className={styles.avatar}>
            {user.name.charAt(0).toUpperCase()}
          </div>
          <div className={styles.headerText}>
            <h1 className={styles.name}>{user.name}</h1>
            <span className={styles.roleBadge}>{user.role}</span>
          </div>
        </div>

        <p className={styles.sectionLabel}>Dades del compte</p>
        <div className={styles.fieldList}>
          <div className={styles.fieldRow}>
            <span className={styles.fieldKey}>Nom d'usuari</span>
            <span className={styles.fieldValue}>{user.username}</span>
          </div>
          <div className={styles.fieldRow}>
            <span className={styles.fieldKey}>Nom complet</span>
            <span className={styles.fieldValue}>{user.name}</span>
          </div>
          <div className={styles.fieldRow}>
            <span className={styles.fieldKey}>Rol</span>
            <span className={styles.fieldValue}>{user.role}</span>
          </div>
          <div className={styles.fieldRow}>
            <span className={styles.fieldKey}>Estat</span>
            <span className={styles.fieldValue}>
              <span className={styles.statusDot}>Actiu</span>
            </span>
          </div>
        </div>

        <Link to="/dashboard" className={styles.back}>← Tornar al dashboard</Link>
      </main>
    </div>
  )
}
