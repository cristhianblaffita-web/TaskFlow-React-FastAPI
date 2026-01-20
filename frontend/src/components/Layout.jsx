import { useAside } from "../hooks/toggleAside";
//import { useCurrentLocation } from "../hooks/CurrentPage.js"
import { Outlet } from "react-router-dom"
import NavBar from "./NavBar.jsx";
import Aside from "./Aside.jsx";

const Layout = () => {
  const nav = useAside();
  //const loc = useCurrentLocation();
  return (
    <>
      <NavBar toggleAside={nav.toggleAside} />
      <Aside isOpen={nav.isOpen} toggleAside={nav.toggleAside}/>

      <main>
       <Outlet/>
      </main>
    </>
  );
}

export default Layout;