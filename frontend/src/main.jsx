import React from "react"
import { BrowserRouter } from "react-router-dom"
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { AuthProvider } from "./features/auth/context/authProvider"

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(<AuthProvider><BrowserRouter><App/></BrowserRouter></AuthProvider>);