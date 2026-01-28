import { useEffect, useState } from "react"
import { AuthContext } from "./authContext"

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  
  useEffect(() => {
    const storedUser = localStorage.getItem("auth_user")
    
    if (storedUser) {
      setUser(JSON.parse(storedUser))
      setIsAuthenticated(true)
    }
  }, [])
  
  const login = (userData) => {
    localStorage.setItem("auth_user", JSON.stringify(userData))
    
    setUser(userData)
    setIsAuthenticated(true)
  }
  
  const logout = () => {
    localStorage.removeItem("auth_user")
    
    setUser(null)
    
    setIsAuthenticated(false)
    
    alert("Sesion "+ user + " closed");
  }
  
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