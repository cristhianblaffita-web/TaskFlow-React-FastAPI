import React, { useState, useEffect } from "react"
import "./Signup.css"
import { Link } from "react-router-dom"
import { AuthLayout } from "@/features/auth"
import { InputField } from "@/features/auth"
import { PasswordInput } from "@/features/auth"
import { AuthButton } from "@/features/auth"
import { FormError } from "@/features/auth"
import { useEmailValidation } from "@/validators/useEmailValidation"


const Signup = () => {
  const [isSubmited, setIsSubmited] = useState(false)
  
  const [emailVal, setEmailVal] = useState("")
  const [passwordVal, setPasswordVal] = useState("")
  const [confirmPasswordVal, setConfirmPasswordVal] = useState("")
  
  const [termsVal, setTermsVal] = useState(false);
  
  const handleEmailVal = (value) => {
    setEmailVal(prev => value);
  }
  
  const handlePasswordVal = (value) => {
    setPasswordVal(prev => value);
  }
  
  const handleConfirmPasswordVal = (value) => {
    setConfirmPasswordVal(prev => value);
  }
  
  const handleTermsVal = (e) => {
    setTermsVal(prev => e.target.checked);
  }
  
  let level;
  
  const handleSecurityLevel = () => {
    const haveUpperCase = () => {
      return /[A-Z]/.test(passwordVal);
    }
    
    const haveNumber = () => {
      return /[0-9]/.test(passwordVal);
    }
    
    const haveSymbol = () => {
      return /[@#$%&*]/.test(passwordVal);
    }
    
    let size = passwordVal.length;
    
    if ( (size < 8) || (size > 8 && !haveUpperCase() && !haveSymbol() && !haveNumber() )){
      level = "Low";
      return false;
    } else if (size >= 12 && haveNumber() && haveUpperCase() && haveSymbol()){
      level = "Hard";
      return true;
    } else if (size >= 8 && ( (haveUpperCase() || haveNumber()) && !(haveSymbol()) )
    || ( haveSymbol && (haveUpperCase() || haveNumber())) ){
      level = "Medium";
      return true;
    } 
  }
  
  let validEmail = useEmailValidation(emailVal);
  
  let validPassword = handleSecurityLevel();
  
  let validConfirmPassword = ((passwordVal === confirmPasswordVal) &&
  passwordVal.length > 0);
  
  let canSignup = validEmail && validPassword && level !== "Low" && validConfirmPassword &&
  termsVal;
  
  const signupAuth = (e) => {
    e.preventDefault()
    if (signupAuth) {
      setIsSubmited(prev => true);
    }
  }
  
  useEffect(() => {
    setIsSubmited(prev => false);
  }, [emailVal, passwordVal, confirmPasswordVal, termsVal])
  
  const securityHint = <div className="security-level">Level: <p
  className={level}>{level}</p></div>;
  
  return (
    <main className="signup">
      <AuthLayout title="Create account">
        <InputField 
          label="Email"
          type="email"
          placeholder="Your email..."
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
          fieldHint={securityHint}
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
            value={termsVal}
            onChange={handleTermsVal}
            disabled={
              canSignup && isSubmited ? true : false
            }
          />
          <label 
            className={"terms-label " + (
                termsVal ? "terms-checked" : ""
              )
            }
            for="terms"
            >Do you accept Terms and Conditions?</label>
        </fieldset>
        
        <AuthButton
          onSubmit={canSignup}
          handleAuth={signupAuth}
          isLoading={isSubmited}
        >
          {canSignup && isSubmited ? "Creating account..." : "Signup"}
        </AuthButton>
        
        <label className="label-link">
          Do you have an account? 
          <Link to="/login" className="link">Log in</Link></label>
      </AuthLayout>
    </main>
  )
}

export default Signup