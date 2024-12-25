import React from 'react'
import ReactDOM from 'react-dom/client'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import App_xx from './App_xx'
import './index.css'

import { AppContextProvider_xx } from './context_xx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppContextProvider_xx>
      <ToastContainer position='top-center' autoClose={2000} />
      <App_xx />
    </AppContextProvider_xx>
  </React.StrictMode>
)
