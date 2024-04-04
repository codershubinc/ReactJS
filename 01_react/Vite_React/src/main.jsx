import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import Api_Handling from './Api_Handling.jsx';

ReactDOM.createRoot (document.getElementById ('root')).render (
  <React.StrictMode>
    <App />
    <Api_Handling/>
  </React.StrictMode>
);
