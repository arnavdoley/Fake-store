import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {UserAuthContextProvider} from "./contex/UserAuthContex";
import { Provider } from "react-redux";
import store from "./store/Store";
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router} from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <React.StrictMode>
    <UserAuthContextProvider>
    <Provider store={store}>
   <Router> 
     <App />
   </Router>
   </Provider>
  </UserAuthContextProvider>
  
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
