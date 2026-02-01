import React from "react";
import {Routes, Route} from "react-router-dom"
import { useState } from 'react';
import './App.css';
import { Layout } from "@/features/layout"
import { Home } from "@/pages"
import { Login } from "@/pages"
import { Signup } from "@/pages"
import { About } from "@/pages"
import { Dashboard } from "@/pages"
import { useAuth } from "@/hooks/useAuth"
import { ProtectedRoute } from "./routes/ProtectedRoute"
import { PrivateRoute } from "./routes/PrivateRoute"



const App = () => {
  
  const { isAuthenticated } = useAuth()
  
  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>} />
        <Route 
          element={<ProtectedRoute 
              isAuth={isAuthenticated}
              redirectTo="/dashboard"
            />
          }>
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<Signup/>} />
        </Route>
        <Route path="/about" element={<About/>} />
        <Route 
          element={<PrivateRoute 
            isAuth={isAuthenticated}
          />
        }>
          <Route path="/dashboard" element={<Dashboard/>} />
        </Route>
      </Route>
    </Routes>
  )
}

export default App;
