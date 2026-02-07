import React, { useState, useEffect } from "react"
import "./Login.css"
import { Link } from "react-router-dom"
import { AuthLayout } from "@/features/auth"
import { InputField } from "@/features/auth"
import { PasswordInput } from "@/features/auth"
import { AuthButton } from "@/features/auth"
import { FormError } from "@/features/auth"
import { useEmailValidation } from "@/validators/useEmailValidation"
import { useAuth } from "@/hooks/useAuth"

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
  
  let validMail = useEmailValidation(mailVal)
  
  let validPassword = passwordVal.length > 0;
  
  let loginAuth = validMail && validPassword;
  
  const { login, user } = useAuth();
  
  const authSubmit = (e) => {
    e.preventDefault();
    setSubmited(prev => true);
    
    if (loginAuth) {
      login(mailVal);
    }
  }
  
  useEffect(() => {
    setSubmited(prev => false)
  }, [mailVal, passwordVal])
  
  return (
    <main className="login">
      <AuthLayout 
        title="Wellcome back" 
        handleAuth={authSubmit}
      >
        
        <InputField 
          label="Email" 
          type="email" 
          value={mailVal}
          placeholder="Your email..." 
          required={true}
          isValid={validMail}
          handleValue={handleMailVal}
          onSubmit={submited}
          errorMessage={"Write a valid email"}
        />
        
        <PasswordInput
          value={passwordVal}
          handleValue={handlePasswordVal}
          isValid={validPassword}
          onSubmit={submited}
          errorMessage={"Password field empty"}
        />
        
        <AuthButton 
          onSubmit={loginAuth}
          handleAuth={authSubmit}
          isLoading={submited}
        >
          {loginAuth && submited ? "Logging in.." : "Login"}
        </AuthButton>

        
        <label className="label-link">Don't have an account <Link to="/signup"
        className="link">Join us</Link></label>
      </AuthLayout>
    </main>
  )
}

export default Login