
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import NewClass from './NewClass';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App/> */}
    <NewClass name={" guru barathi "}/>
  </React.StrictMode>
);



