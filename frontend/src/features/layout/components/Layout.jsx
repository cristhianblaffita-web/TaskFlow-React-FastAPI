import { useAside } from "../hooks/toggleAside";
import { useUserAside } from "../hooks/toggleUserAside.js"
import { Outlet } from "react-router-dom"
import NavBar from "./NavBar.jsx";
import Aside from "./Aside.jsx";
import UserAside from "./UserAside.jsx"
import { useAuth } from "@/hooks/useAuth"


const Layout = () => {
  const nav = useAside();
  const user = useUserAside();
  const { isAuthenticated } = useAuth();
  return (
    <>
      <NavBar 
        toggleAside={nav.toggleAside}
        toggleUserAside={user.toggleAside} 
        auth={isAuthenticated} 
      />
      
      <Aside 
        isOpen={nav.isOpen} 
        toggleAside={nav.toggleAside}
        auth={isAuthenticated}
      />
      
      <UserAside 
        isOpen={user.isOpen} 
        toggleAside={user.toggleAside}
      />
      
      <main>
       <Outlet/>
      </main>
    </>
  );
}

export default Layout;