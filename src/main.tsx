import React from 'react';
import { createRoot } from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import App from './App.tsx';
import './index.css';

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Root element not found');

// Create root with strict mode disabled to prevent double mounting
const root = createRoot(rootElement);

root.render(
  <HelmetProvider>
    <App />
  </HelmetProvider>
);