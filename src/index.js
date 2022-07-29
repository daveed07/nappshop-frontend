import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { store } from "@redux/store";
import App from "@routes/App.jsx";
import GlobalStyle from '@styles/globalStyles';

ReactDOM.render(
  <Provider store={store}>
    <GlobalStyle />
    <App />
  </Provider>
, document.getElementById('app'));