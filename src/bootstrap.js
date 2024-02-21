import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

// Mount function to start up the app
const mount = (root) => {
  root.render(
    <App />, 
  );
}; 

// if we are in development and in isolation, call mount immediately
if (process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('#_content-dev-root');
  const root = createRoot(devRoot);
  if (devRoot) {
    mount(root);
  }
} 

// We are running through container and we should export the mount function
export { mount };