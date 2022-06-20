import React from 'react';
import ReactDOM from 'react-dom';
import App from "@routes/App.jsx";
import GlobalStyle from '@styles/globalStyles';

ReactDOM.render(
  <>
    <GlobalStyle />
    <App />
  </>
, document.getElementById('app'));