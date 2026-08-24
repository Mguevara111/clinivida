import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { CliniContextProvider } from './context/contextprovider.tsx'
import { Buffer } from 'buffer';
(window as any).Buffer = Buffer;
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CliniContextProvider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </CliniContextProvider>
  </StrictMode>,
)
