import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import  Route  from './routers/router'
import { ThemeContextProvider } from './contexts/ThemeContext'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

createRoot(document.getElementById('root')).render(
 <ThemeContextProvider> 
      <Route />
</ThemeContextProvider>,
)
