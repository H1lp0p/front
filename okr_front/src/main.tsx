import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Body from './components/body/Body'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Body/>
  </StrictMode>,
)
