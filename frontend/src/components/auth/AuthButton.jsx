import React from "react"
import "../../styles/AuthButton.css"

const AuthButton = (
  {
    children, 
    handleAuth,
    onSubmit,
    isLoading
  }
  ) => {
  
  return (
    <button 
      className={
        "auth-button " + (
          onSubmit ? (
            isLoading ? "loading" : ""
          ) : "disabled"
        )
        
      } 
      type="submit"
      
      onClick={handleAuth}
    >
      {isLoading && onSubmit ? (
        <div className="load-spinner"></div>
      ) : false
      }
      {children}
    </button>  
  )
}

export default AuthButton