import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App_xx from './App_xx.jsx';
import './index.scss';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App_xx />
  </StrictMode>
);
