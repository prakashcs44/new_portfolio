import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import PageContextProvider from "./contexts/PageContext.jsx"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PageContextProvider>
       <App />
    </PageContextProvider>
   
  </React.StrictMode>,
)
