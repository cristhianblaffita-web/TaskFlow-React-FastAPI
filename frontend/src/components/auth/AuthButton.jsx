import React from "react"
import "../../styles/AuthButton.css"

const AuthButton = (
  {
    children, 
    handleAuth,
    onSubmit
  }
  ) => {
  
  return (
    <button 
      className={
        "auth-button " + (
          onSubmit ? "" : "disabled"
        )
        
      } 
      type="submit"
      disable={onSubmit ? "enable" : "disable"}
      onClick={handleAuth}
    >
      {children}
    </button>  
  )
}

export default AuthButton