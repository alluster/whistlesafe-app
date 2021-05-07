import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from "@auth0/auth0-react";
import './i18n';

ReactDOM.render(
  <React.StrictMode>
	   <Auth0Provider
			domain="whistlesafe.eu.auth0.com"
			clientId="enrqMGYp6QZAYaaFy0xTll4HveWI0VG8"			
			redirectUri="http://localhost:3000/profile"
			useRefreshTokens={true}
			cacheLocation="localstorage"
		>
    <App />
	</Auth0Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
