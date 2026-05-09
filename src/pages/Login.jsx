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
      setError('Usuari o contrasenya incorrectes. Torna-ho a intentar.')
    }
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.brand}>
        <p className={styles.brandTitle}>Autenticació amb React Context</p>
        <p className={styles.brandSub}>
          Pràctica 7 — Rutes protegides i gestió d'estat global d'usuari.
        </p>
      </div>

      <div className={styles.formSide}>
        <p className={styles.eyebrow}>Pràctica 7</p>
        <h1 className={styles.title}>Iniciar sessió</h1>

        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.field}>
            <label className={styles.label} htmlFor="username">Usuari</label>
            <input
              id="username"
              className={styles.input}
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="admin o usuari"
              autoFocus
              autoComplete="username"
            />
          </div>

          <div className={styles.field}>
            <label className={styles.label} htmlFor="password">Contrasenya</label>
            <input
              id="password"
              className={styles.input}
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••"
              autoComplete="current-password"
            />
          </div>

          {error && <p className={styles.error} role="alert">{error}</p>}

          <button className={styles.btn} type="submit">Entrar</button>
        </form>

        <p className={styles.hint}>
          Credencials de prova: <code>admin / 1234</code> o <code>usuari / abcd</code>
        </p>
      </div>
    </div>
  )
}
