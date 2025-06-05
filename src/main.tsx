import React from 'react';
import { createRoot } from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import App from './App.tsx';
import './index.css';

// Wait for fonts to load
const loadFonts = async () => {
  try {
    await document.fonts.ready;
  } catch (error) {
    console.warn('Font loading failed:', error);
  }
};

// Ensure the DOM is ready before hydration
const prepare = async () => {
  const container = document.getElementById('root');
  if (!container) throw new Error('Root element not found');
  await loadFonts();
  return container;
};

// Create root and render with error boundary
const initialize = async () => {
  try {
    const container = await prepare();
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
    // Show error state to user
    const container = document.getElementById('root');
    if (container) {
      container.innerHTML = '<div style="color: white; text-align: center; padding: 2rem;">Something went wrong. Please refresh the page.</div>';
    }
  }
};

// Initialize the app
initialize();