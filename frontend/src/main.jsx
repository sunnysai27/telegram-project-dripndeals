import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { DealsContextProvider } from './context/DealsContext.jsx'

createRoot(document.getElementById('root')).render(
    <BrowserRouter >
        <DealsContextProvider>
            <App />
        </DealsContextProvider>
    </BrowserRouter>
)
