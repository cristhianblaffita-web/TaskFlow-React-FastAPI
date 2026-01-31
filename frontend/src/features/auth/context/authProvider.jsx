import { useEffect, useState } from "react"
import { AuthContext } from "./authContext"

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  
  useEffect(() => {
    const storedUser = localStorage.getItem("auth_user")
    
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
  }, [])
  
  const login = (userData) => {
    localStorage.setItem("auth_user", JSON.stringify(userData))
    
    setUser(userData)
  }
  
  const logout = () => {
    localStorage.removeItem("auth_user")
    
    setUser(null)
    
    alert("Sesion "+ user + " closed");
  }
  
  const isAuthenticated = Boolean(user)
  
  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        login,
        logout
      }}
    >
      {children}

    </AuthContext.Provider>  
  )
}