import React, { useState } from "react"
import "../../styles/InputField.css"
import FormError from "./FormError.jsx"

const InputField = ({label, type="text", placeholder, required=false,
rightButton}) => {
  
  const [inputVal, setInputVal] = useState("");
  
  const handleInputVal = (e) => {
    setInputVal(prev => e.target.value);
  }
  
  const requiredInput = (
    <input 
      className="input-field" 
      value={inputVal}
      onChange={handleInputVal}
      type={type}
      placeholder={placeholder} 
      required
    />
  );
  
  const notRequiredInput = (
    <input 
      className="input-field" 
      value={inputVal}
      onChange={handleInputVal}
      type={type}
      placeholder={placeholder}
    />
  );
  
  return (
    <fieldset className="input-fieldset">
      <label className="field-label">{label}</label>
      {required ? requiredInput : notRequiredInput}
      {rightButton ? rightButton : false}
      <FormError></FormError>
    </fieldset>
  )
}

export default InputField