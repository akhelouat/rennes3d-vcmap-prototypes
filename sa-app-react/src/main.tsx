import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

window.CESIUM_BASE_URL = '/node_modules/@vcmap/cesium/Source/';

ReactDOM.createRoot(document.getElementById('root')!).render(
  // <React.StrictMode>
  <App />
  // </React.StrictMode>
)
