import { StrictMode, React } from 'react'
import { createRoot, ReactDOM } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom';
import  StoreContextProvider  from './context/StoreContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <BrowserRouter>
    <StoreContextProvider>
      <App/>
    </StoreContextProvider> 
  </BrowserRouter>
  </StrictMode>
);
