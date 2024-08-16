import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import store from './store';
import { Provider } from 'react-redux'
import App from './App.jsx'
import './index.scss'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter basename='/test-task_react-js-vite/'>
        <App />
      </BrowserRouter>
    </Provider>
  </StrictMode>,
)
