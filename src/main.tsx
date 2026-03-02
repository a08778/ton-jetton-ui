import './polyfills/buffer'; // MUST come first

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { TonConnectUIProvider } from '@tonconnect/ui-react'
import App from './App'
import './index.css'

const rootElement = document.getElementById('root')

if (!rootElement) {
  throw new Error('Root element not found')
}

createRoot(rootElement).render(
  <TonConnectUIProvider manifestUrl="https://a08778.github.io/ton-jetton-ui/tonconnect-manifest.json">
    <StrictMode>
      <App />
    </StrictMode>
  </TonConnectUIProvider>
)
