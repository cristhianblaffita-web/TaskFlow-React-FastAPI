import React from "react"
import "../../styles/AuthButton.css"

const AuthButton = ({children, handleAuth}) => {
  return (
    <button 
      className="auth-button" 
      type="submit" 
      onClick={() => handleAuth}
    >
      {children}
    </button>  
  )
}

export default AuthButton