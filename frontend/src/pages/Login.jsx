import React from "react"
import "../styles/Login.css"
import InputPassword from "../components/InputPassword.jsx"
import { Link } from "react-router-dom"
import { SecurityLevel } from "../hooks/PasswordHint.jsx"

const Login = () => {
  return (
    <main className="main-login">
      <form className="login-form">
        <div className="form-header">
          <h2>Log in</h2>
        </div>
        <fieldset className="field">
          <label className="label" for="email">Email</label>
          <input className="form-input" name="email" type="email" placeholder="Your eamil..." required />
        </fieldset>
        <InputPassword check="security" passwordHint={SecurityLevel}/>
        <div className="button-field">
          <button className="login-btn primary" type="submit">Login</button>
        </div>
        <div className="other-options">
          <p>Don't have an account? <Link className="form-link" to="/signup">Join us</Link></p>
          <p>Forgot your password? <Link className="form-link">Recover.</Link></p>
        </div>
      </form> 
    </main>
  )
}

export default Login