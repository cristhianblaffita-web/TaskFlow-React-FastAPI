import React from "react";
import {Routes, Route} from "react-router-dom"
import { useState } from 'react';
import './App.css';
import Layout from "./components/Layout.jsx"
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx"
import Signup from "./pages/Signup.jsx"
import About from "./pages/About.jsx"


const App = () => {
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
