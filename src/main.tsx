import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './styles/globals.css'

/**
 * Main entry point for the Multimedium.dev portfolio website
 * Renders the root App component with React 18's createRoot API
 * Includes global styles import for Tailwind CSS and custom styling
 */
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)