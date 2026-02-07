import React, { useState, useEffect } from "react"
import "../styles/InputField.css"
import FormError from "./FormError.jsx"

const InputField = (
  {
    label, 
    type="text", 
    value,
    placeholder, 
    required=false,
    rightButton,
    handleValue,
    isValid,
    onSubmit,
    errorMessage,
    fieldHint
  }
) => {
  
  const requiredInput = (
    <input 
      className={
        "input-field " + (
          ((isValid && onSubmit ? "disabled-field" : "") || (isValid ? "valid-field" : (
            onSubmit ? "not-valid-field" : ""
          )))
        )}
      value={value}
      onChange={(e) => handleValue(e.target.value)}
      type={type}
      placeholder={placeholder}
      disabled={isValid && onSubmit ? true : false}
      required
    />
  );
  
  const notRequiredInput = (
    <input 
      className={"input-field " + (isValid ? "valid-field" : "")} 
      value={value}
      onChange={(e) => handleMailVal(e.target.value)}
      type={type}
      placeholder={placeholder}
    />
  );
  
  return (
    <fieldset className={"input-fieldset " + (
      isValid && onSubmit ? "disabled-fieldset" : ""
    )}>
      <label className="field-label">{label}</label>
      {required ? requiredInput : notRequiredInput}
      {rightButton ? rightButton : false}
      {onSubmit && !isValid ? (
        <FormError>{errorMessage}</FormError>
      ) : false}
      {fieldHint && !onSubmit && value.length > 0 ? (fieldHint) : false}
    </fieldset>
  )
}

export default InputField