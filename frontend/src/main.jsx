import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import PageContextProvider from "./contexts/PageContext.jsx"
import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PageContextProvider>
       <App />
    </PageContextProvider>
   
  </React.StrictMode>,
)
