import React, { useState, useEffect } from "react"
import "../styles/Login.css"
import AuthLayout from "../components/auth/AuthLayout.jsx"
import InputField from "../components//auth/InputField.jsx"
import PasswordInput from "../components/auth/PasswordInput.jsx"
import AuthButton from "../components/auth/AuthButton.jsx"
import FormError from "../components/auth/FormError.jsx"
import { Link } from "react-router-dom"

const Login = () => {
  const [submited, setSubmited] = useState(false);
  
  const [mailVal, setMailVal] = useState("");
  const [passwordVal, setPasswordVal] = useState("");
  
  const [authError, setAuthError] = useState("");
  
  const handleMailVal = (value) => {
    setMailVal(prev => value.trim());
  }
  
  const handlePasswordVal = (value) => {
    setPasswordVal(prev => value.trim());
  }
  
  let validMail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(mailVal);
  
  let validPassword = passwordVal.length > 0;
  
  let loginAuth = validMail && validPassword;
  
  const authSubmit = () => {
    setSubmited(prev => true);
  }
  
  
  return (
    <main>
      <AuthLayout title="Wellcome back">
        <InputField 
          label="Email" 
          type="email" 
          value={mailVal}
          placeholder="Your email..." 
          required={true}
          isValid={validMail}
          handleValue={handleMailVal}
          showError={submited}
          errorMessage={"Write a valid email"}
        />
        
        <PasswordInput
          value={passwordVal}
          handleValue={handlePasswordVal}
          isValid={validPassword}
          showError={submited}
          errorMessage={"Password field empty"}
        />
        
        <AuthButton 
          onSubmit={loginAuth}
          handleAuth={authSubmit}
        >
          Login
        </AuthButton>

        
        <label className="label-link">Don't have an account <Link to="/signup"
        className="link">Join us</Link></label>
      </AuthLayout>
    </main>
  )
}

export default Login