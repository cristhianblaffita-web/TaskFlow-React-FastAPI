import { Outlet, Navigate } from "react-router-dom"

export const ProtectedRoute = (
  {
    isAuth, 
    redirectTo="/", 
    children
  }) => {
  
  if(isAuth) {
    return <Navigate to={redirectTo}/>
  }
  
  return children ? children : <Outlet/>
}