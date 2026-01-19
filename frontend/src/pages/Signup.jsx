import React, { useState } from "react"
import "../styles/Signup.css"
import AuthLayout from "../components/auth/AuthLayout.jsx"
import InputField from "../components/auth/InputField.jsx"
import PasswordInput from "../components/auth/PasswordInput.jsx"
import AuthButton from "../components/auth/AuthButton.jsx"
import FormError from "../components/auth/FormError.jsx"


const Signup = () => {
  const [isSubmited, setIsSubmited] = useState(false)
  
  const [emailVal, setEmailVal] = useState("")
  const [passwordVal, setPasswordVal] = useState("")
  const [confirmPasswordVal, setConfirmPasswordVal] = useState("")
  
  const [securityLevel, setSecurityLevel] = useState("")
  
  const handleEmailVal = (value) => {
    setEmailVal(prev => value);
  }
  
  const handlePasswordVal = (value) => {
    setPasswordVal(prev => value);
  }
  
  const handleConfirmPasswordVal = (value) => {
    setConfirmPasswordVal(prev => value);
  }
  
  let validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(emailVal);
  
  
  let validPassword = false;
  
  let validConfirmPassword = ((passwordVal === confirmPasswordVal) &&
  passwordVal.length > 0);
  
  let signupAuth = validEmail && validPassword && validConfirmPassword;
  
  const onSubmit = () => {
    if (signupAuth) {
      setIsSubmited(prev => true);
    }
  }
  
  return (
    <main>
      <AuthLayout title="Create account">
        <InputField 
          label="Email"
          type="email"
          placeholder="Your eamil..."
          isValid={validEmail}
          value={emailVal}
          handleValue={handleEmailVal}
          required={true}
          onSubmit={isSubmited}
          errorMessage="Write a valid email"
        />
        
        <PasswordInput 
          isValid={validPassword}
          value={passwordVal}
          handleValue={handlePasswordVal}
          errorMessage="Password is a required field"
          onSubmit={isSubmited}
        />
        
        <PasswordInput 
          label="Confirm password"
          placeholder="Repeat your password..."
          isValid={validConfirmPassword}
          value={confirmPasswordVal}
          handleValue={handleConfirmPasswordVal}
          errorMessage="Confirm password is a required field"
          onSubmit={isSubmited}
        />
        
        <fieldset className="terms-field">
          <input
            className="terms-checkbox"
            name="terms"
            type="checkbox"
          />
          <label 
            className="terms-label"
            for="terms"
            >Do you accept Terms and Conditions?</label>
        </fieldset>
        
        <AuthButton>Signup</AuthButton>
      </AuthLayout>
    </main>
  )
}

export default Signup