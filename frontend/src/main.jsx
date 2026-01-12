import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './index.css'

function showFatalError(err){
  try{
    const root = document.getElementById('root')
    if (root) {
      root.innerHTML = `\n        <div style="padding:24px;font-family:system-ui,Segoe UI,Roboto,Arial;">\n          <h2 style=\"color:#b22222;\">Application error</h2>\n          <pre style=\"white-space:pre-wrap;\">${String(err)}</pre>\n          <p>Please check the browser console and deployment logs.</p>\n        </div>`
    }
  }catch(e){
    // fallback to console
    console.error('Error rendering fatal UI', e)
  }
  console.error(err)
}

window.addEventListener('error', (e) => {
  showFatalError(e.error || e.message || 'Unknown error')
})
window.addEventListener('unhandledrejection', (e) => {
  showFatalError(e.reason || e)
})

try{
  createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  )
}catch(e){
  showFatalError(e)
}
