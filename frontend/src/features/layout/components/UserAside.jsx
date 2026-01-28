import React from "react"
import "../styles/UserAside.css"
import { useAuth } from "@/hooks/useAuth"

const UserAside = ({isOpen, toggleAside, auth}) => {
  const { logout } = useAuth();
  
  return (
    <>
    <div className={isOpen ? "user-aside-backdrop" : ""} onClick={toggleAside}></div>
    <aside className={"user-aside " + (isOpen ? "user-aside-visible" : "")}>
      <button className="user-aside-btn">Taskflow</button>
      <button className="user-aside-btn" type="button" onClick={logout}>Logout</button>
    </aside>
    </>
  )
}

export default UserAside
