import React from 'react';
import ReactDOM from 'react-dom';
import Login from './Login';
import App from './Registration';


ReactDOM.render(
  <React.StrictMode>
    <App />
    <Login/>
  </React.StrictMode>,
  document.getElementById('root')
);
