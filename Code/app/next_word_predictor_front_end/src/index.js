import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { StyledEngineProvider } from '@mui/material/styles';
import configureStore, { history } from './config/configure_store';
import Root from './config/Root';

const root = ReactDOM.createRoot(document.getElementById('root'));

export const store = configureStore();

ReactDOM.render(
  <StyledEngineProvider injectFirst>
    <React.StrictMode>
      <Root store={store} history={history} />
    </React.StrictMode>
  </StyledEngineProvider>
  , document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
