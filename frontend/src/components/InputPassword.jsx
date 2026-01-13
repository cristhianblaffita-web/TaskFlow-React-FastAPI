import React, { useState, useEffect } from "react"
import "../styles/InputPassword.css"

const InputPassword = ({label="Password", placeholder="Your password..."}) => {
  const [inputValue, setInputValue] = useState("")
  
  const [showPassword, setShowPassword] = useState(false)
  
  const togglePassword = () => {
    setShowPassword(prev => !prev)
  }
  
  return (
    <fieldset className="field">
      <label className="label" for={label}>{label}</label>
      <input className="input-password form-input" type={showPassword ? "text" : "password"} value={inputValue}
      onChange={(event) => setInputValue(prev => event.target.value)} name={label} placeholder={placeholder} required/>
      <button className={"toggle-password-btn " + (showPassword ? "show-password" : "")} type="button"
      onClick={togglePassword}></button>
    </fieldset>
  )
}

export default InputPassword