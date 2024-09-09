import React from 'react';
import ReactDOM from 'react-dom/client';
import Mobile from './Mobile'; // Ensure Mobile.js exists in the same directory
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Mobile />
    <App/>
  </React.StrictMode>
);
