import React from "react"
import "../styles/Login.css"

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
        <fieldset className="field">
          <label className="label" for="password">Password</label>
          <input className="form-input" name="password" type="password"
          placeholder="Your password..." required/>
        </fieldset>
        <div className="button-field">
          <button className="login-btn primary" type="submit">Login</button>
        </div>
      </form> 
    </main>
  )
}

export default Login