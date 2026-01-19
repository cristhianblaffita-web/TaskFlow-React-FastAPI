import React, { useState } from "react"
import "../../styles/PasswordInput.css"
import InputField from "./InputField.jsx"

const PasswordInput = (
  {
    label="Password",
    placeholder="Your password...",
    value,
    handleValue,
    isValid,
    onSubmit,
    errorMessage
  }
  ) => {
  
  const [togglePassword, setTogglePassword] = useState(true);
  
  const handleTogglePassword = () => {
    setTogglePassword(prev => !prev);
  }
  
  const toggleButton = (
    <button 
      type="button"
      className={
        "toggle-password-btn " + (
          togglePassword ? "" : "hidden"
        )
      }
      onClick={handleTogglePassword}>
    </button>
  );
  
  return (
    <InputField 
      label={label} 
      type={togglePassword ? "password" : "text"} 
      value={value}
      handleValue={handleValue}
      placeholder={placeholder}
      required={true} 
      isValid={isValid}
      rightButton={toggleButton}
      onSubmit={onSubmit}
      errorMessage={errorMessage}
    />
  )
}

export default PasswordInput