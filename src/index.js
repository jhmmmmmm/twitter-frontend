import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import Login from './container/Login/loginIndex';
import Register from './container/Register/registerIndex';
// import { startVconsole } from './utils';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Login /> */}
    <Register />
  </React.StrictMode>,
);

// startVconsole();
