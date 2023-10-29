import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import Login from '@containers/Login/loginIndex';
import Register from '@containers/Register/registerIndex';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from '@containers/App';
import { CxtProvider } from '@utils/context';
import Tweets from '@containers/Tweets';
import Comment from '@containers/Comment';
import CreateTweet from '@containers/CreateTweet';
// import { startVconsole } from './utils';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CxtProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="tweets" element={<Tweets />} />
            <Route path="comment/:id" element={<Comment />} />
            <Route path="search" element={<Comment />} />
            <Route path="message" element={<Comment />} />
            <Route path="tip" element={<Comment />} />
            <Route path="createTweet" element={<CreateTweet />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </CxtProvider>
  </React.StrictMode>,
);

// startVconsole();
