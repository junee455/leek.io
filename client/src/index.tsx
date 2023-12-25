import { createRoot } from 'react-dom/client'
import { App } from 'App'
import './index.scss'

const root = createRoot(document.getElementById('appRoot') as HTMLElement)
root.render(<App />)
