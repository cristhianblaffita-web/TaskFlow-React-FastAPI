import React from "react";
import {Routes, Route} from "react-router-dom"
import { useState } from 'react';
import './App.css';
import { Layout } from "@/features/layout"
import { Home } from "@/pages"
import { Login } from "@/pages"
import { Signup } from "@/pages"
import { About } from "@/pages"


const App = () => {
  const storedAuth = localStorage.getItem("auth");
  const isLoged = storedAuth === "true";
  
  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/about" element={<About/>} />
      </Route>
    </Routes>
  )
}

export default App;
