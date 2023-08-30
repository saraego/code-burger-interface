import React from 'react';
import ReactDOM from 'react-dom/client';
import { ToastContainer } from "react-toastify"

import Routess from './routes/routes';
// import Register from './containers/register';
// import Login from './containers/login';
import GlobalStyles from './styles/globalStyles';
import AppProvider from './hooks';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppProvider>
      <Routess />
    </AppProvider>

    <ToastContainer position="top-right" autoClose={5000} theme='dark' />
    <GlobalStyles />
  </React.StrictMode>
);


