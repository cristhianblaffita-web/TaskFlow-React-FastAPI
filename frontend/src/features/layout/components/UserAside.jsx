import React from "react"
import "../styles/UserAside.css"
import { useAuth } from "@/hooks/useAuth"
import { Link } from "react-router-dom"

const UserAside = ({isOpen, toggleAside, auth}) => {
  const { logout } = useAuth();
  
  return (
    <>
    <div className={isOpen ? "user-aside-backdrop" : ""} onClick={toggleAside}></div>
    <aside className={"user-aside " + (isOpen ? "user-aside-visible" : "")}>
      <Link className="user-aside-btn item" to="/dashboard">Dashboard</Link>
      <button className="user-aside-btn item" type="button" onClick={logout}>Logout</button>
    </aside>
    </>
  )
}

export default UserAside
