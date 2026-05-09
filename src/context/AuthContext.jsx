import { createContext, useContext, useState } from 'react'

const AuthContext = createContext(null)

const FAKE_USERS = [
  { username: 'admin', password: '1234', name: 'Administrador', role: 'Admin' },
  { username: 'usuari', password: 'abcd', name: 'Usuari Normal', role: 'User' },
]

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)

  function login(username, password) {
    const found = FAKE_USERS.find(
      (u) => u.username === username && u.password === password
    )
    if (found) {
      const { password: _, ...safeUser } = found
      setUser(safeUser)
      return true
    }
    return false
  }

  function logout() {
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  return useContext(AuthContext)
}
