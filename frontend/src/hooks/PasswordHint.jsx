import { useState } from "react"

export const SecurityLevel = (inputValue) => {
  const haveSpecialChar = () => {
    const especialChars = ["@", "!", "#", "$", "%", "&", "˜", "€", "|",
    "¬","(",")","=","?","¿","+", "*","/", "-","_",":",".",";",",","<",">"]
  }
  
  const haveUpperCase = () => {
    for (let char of inputValue){
      if (char !== undefined){
        if (char === char.toUpperCase()){
          return true
        }
      }
    }
    
    return false
  }
  
  let level = ""
  
  if (inputValue.length > 0 && inputValue.length <= 5 || !haveUpperCase()){
    level = "Low"
  } else if (inputValue.length > 5 && inputValue.length <= 10 && haveUpperCase()) {
    level = "Medium"
  } else if (inputValue.length > 10 && haveUpperCase()){
    level = "Hard"
  }
  
  return <p className={level}>{level}</p>
}
