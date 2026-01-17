import React from "react"
import "../../styles/AuthLayout.css"

const AuthLayout = ({children, title}) => {
  return (
   <form method="POST" className="auth-layout">
     <div className="layout-heading">
       <h2>{title}</h2>
     </div>
     {children}
   </form> 
  )
}

export default AuthLayout