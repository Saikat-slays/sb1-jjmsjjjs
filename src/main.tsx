import React from 'react';
import { createRoot } from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import App from './App.tsx';
import './index.css';

// Ensure the DOM is ready before hydration
const prepare = () => {
  const container = document.getElementById('root');
  if (!container) throw new Error('Root element not found');
  return container;
};

// Create root and render with error boundary
const initialize = async () => {
  try {
    const container = prepare();
    const root = createRoot(container);
    
    root.render(
      <React.StrictMode>
        <HelmetProvider>
          <App />
        </HelmetProvider>
      </React.StrictMode>
    );
  } catch (error) {
    console.error('Failed to initialize app:', error);
  }
};

// Initialize the app
initialize();