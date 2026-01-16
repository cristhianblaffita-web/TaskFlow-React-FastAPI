import { useState } from "react"

export const SecurityLevel = (inputValue) => {
  const hasUpper = () => {
    const upper = /[A-Z]/;
    
    return (upper.test(inputValue));
  }
  
  const hasNumber = () => {
    const numbers = /[0-9]/;
    
    return (numbers.test(inputValue));
  }
  
  const hasSymbol = () => {
    const symbols = /[!@#€%^&*()_+$£¥]/;
    
    return (symbols.test(inputValue));
  }
  
  let size = inputValue.length;
  
  let level = "";
  
  if (size <= 8 || ( (size > 8) && ( !(hasUpper()) && !(hasNumber())
  && !(hasSymbol()) ) ) )  {
    level = "Low";
  } else if ( ((size > 8 && size < 12) && (hasUpper() || hasNumber() ||
  hasSymbol() ) ) || ( (size >= 12) && ( (hasUpper() || hasNumber()) && !(hasSymbol()) ) ) ) {
    level = "Medium";
  } else if ( (size >= 12) && (hasUpper() && hasNumber() && hasSymbol())){
    level = "Hard";
  }
  
  return (
    <div className="password-hint">
        {inputValue.length > 0 && (
        <span>
          <p>Security Level: <label
        className={level}>{level}</label></p> 
        </span>)}
   </div>
  )
}
