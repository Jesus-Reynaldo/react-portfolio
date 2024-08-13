import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ThemeProvider } from '@emotion/react'
import theme from './theme'
import { StyledEngineProvider } from '@mui/material/styles'

createRoot(document.getElementById('root')!).render(
  <StyledEngineProvider injectFirst>
    <StrictMode>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </StrictMode>
    </StyledEngineProvider>
)



// _app.js
