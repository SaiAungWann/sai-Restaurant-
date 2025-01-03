import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import  Route  from './routers/router'
import { ThemeContextProvider } from './contexts/ThemeContext'
createRoot(document.getElementById('root')).render(
 <ThemeContextProvider> 
    <StrictMode>
      <Route />
    </StrictMode>
// </ThemeContextProvider>,
)
