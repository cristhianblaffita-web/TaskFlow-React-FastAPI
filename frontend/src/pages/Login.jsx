import React from "react"
import AuthLayout from "../components/auth/AuthLayout.jsx"
import InputField from "../components//auth/InputField.jsx"
import PasswordInput from "../components/auth/PasswordInput.jsx"
import AuthButton from "../components/auth/AuthButton.jsx"

const Login = () => {
  return (
    <main>
      <AuthLayout title="Wellcome back">
        <InputField 
          label="Email" 
          type="email" 
          placeholder="Your email..." 
          required={true}
        />
        <PasswordInput />
        <AuthButton>Login</AuthButton>
      </AuthLayout>
    </main>
  )
}

export default Login