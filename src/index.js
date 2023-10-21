import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Login from '@containers/Login/loginIndex';
import Register from '@containers/Register/registerIndex';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from '@containers/App';
import { CxtProvider } from '@utils/context';
// import { startVconsole } from './utils';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CxtProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </CxtProvider>
  </React.StrictMode>,
);

// startVconsole();
