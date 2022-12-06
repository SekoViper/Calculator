import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';
import Calculator from './Components/Calculator';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className="main-container">
      <Calculator />
    </div>
  </React.StrictMode>,
);
