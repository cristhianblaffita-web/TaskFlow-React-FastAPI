import React from "react"
import "../../styles/FormError.css"

const FormError = ({children}) => {
  return (
    <label className="form-error">{children}</label>
  )
}

export default FormError