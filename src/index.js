import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import Navigation from './components/Navigation/Navigation'
import { BrowserRouter as Router } from "react-router-dom"
import Footer from './components/Footer/Footer'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Navigation />
      <App />
      <Footer />
    </Router>
  </React.StrictMode>
);


