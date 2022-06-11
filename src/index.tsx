import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import TodoContextProvider from './contexts/todocontext';
import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <TodoContextProvider>
      <App />
    </TodoContextProvider>
  </React.StrictMode>
);
