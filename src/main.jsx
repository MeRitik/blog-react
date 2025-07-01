import { createRoot } from 'react-dom/client';
import './index.css'
import App from './App'

import { Toaster } from 'react-hot-toast';
import { StrictMode } from 'react';
import { AppProvider } from './context/AppContext';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppProvider>
      <Toaster />
      <App />
    </AppProvider>
  </StrictMode>,
)
