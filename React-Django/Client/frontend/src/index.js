import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
/*import App from './App'; */ // Commented out to use Login.js instead of App.js by Ramesh
import Landing from './Landing';
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(


<React.StrictMode>
    <Landing />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
