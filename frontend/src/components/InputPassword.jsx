import React, { useState, useEffect } from "react"
import "../styles/InputPassword.css"


const InputPassword = ({label="Password", placeholder="Your password...",
check="status",
passwordHint}) => {
  const [inputValue, setInputValue] = useState("")
  
  const [showPassword, setShowPassword] = useState(false)
  
  const [passLevel, setPassLevel] = useState("")
  
  const checkSecurityLevel = () => {
    setPassLevel(prev => passwordHint(inputValue))
  }
  
  const handleInputVal = (event) => {
    setInputValue(prev => event.target.value)
  }
  
  useEffect(() => {
    if (check === "security"){
      checkSecurityLevel()
    }
  }, [inputValue]);
  
  const togglePassword = () => {
    setShowPassword(prev => !prev)
  }
  
  return (
    <fieldset className="field">
      <label className="label" for={label}>{label}</label>
      <input className="input-password form-input" type={showPassword ? "text" : "password"} value={inputValue}
      onChange={handleInputVal} name={label} placeholder={placeholder} required/>
      <button className={"toggle-password-btn " + (showPassword ? "show-password" : "")} type="button"
      onClick={togglePassword}></button>
      <div className="password-hint">
        {inputValue.length > 0 && (<p>Security Level: {passLevel} </p>)}
      </div>
    </fieldset>
  )
}

export default InputPassword