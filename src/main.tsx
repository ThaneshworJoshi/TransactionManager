import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from "react-redux";
import { ToastContainer } from 'react-toastify'
import App from './App.tsx'
import './index.css'
import 'react-toastify/dist/ReactToastify.css'
import { store } from "./redux/store.ts";



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
    <ToastContainer position="bottom-right" />
  </React.StrictMode>,
)
