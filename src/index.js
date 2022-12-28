import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
//root 節點渲染(render)App component
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //https://zh-hant.reactjs.org/docs/strict-mode.html
  <React.StrictMode> 
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </React.StrictMode>
);

