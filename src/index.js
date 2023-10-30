import React from 'react';

import { Auth0Provider } from '@auth0/auth0-react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {AppProvider} from "./context";


ReactDOM.createRoot(document.getElementById("root")).render(
  <Auth0Provider
    domain="dev-hwa2kgpor6u7wq1m.us.auth0.com"
    clientId="stJlruduckYdEqWkFXzpWgzdY3pbbQi9"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <AppProvider>
      <App />
    </AppProvider>
  </Auth0Provider>
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
