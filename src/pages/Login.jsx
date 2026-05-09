import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import styles from './Login.module.css'

export default function Login() {
  const { login, user } = useAuth()
  const navigate = useNavigate()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  if (user) {
    navigate('/dashboard', { replace: true })
    return null
  }

  function handleSubmit(e) {
    e.preventDefault()
    const ok = login(username, password)
    if (ok) {
      navigate('/dashboard', { replace: true })
    } else {
      setError('Usuari o contrasenya incorrectes')
    }
  }

  return (
    <div className={styles.wrapper}>
      <form className={styles.card} onSubmit={handleSubmit}>
        <h1 className={styles.title}>Iniciar sessió</h1>

        <label className={styles.label}>
          Usuari
          <input
            className={styles.input}
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="admin / usuari"
            autoFocus
          />
        </label>

        <label className={styles.label}>
          Contrasenya
          <input
            className={styles.input}
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••"
          />
        </label>

        {error && <p className={styles.error}>{error}</p>}

        <button className={styles.btn} type="submit">
          Entrar
        </button>

        <p className={styles.hint}>
          Credencials: <code>admin / 1234</code> o <code>usuari / abcd</code>
        </p>
      </form>
    </div>
  )
}
