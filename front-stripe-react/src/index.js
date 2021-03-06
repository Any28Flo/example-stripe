import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';

import { BrowserRouter as Router} from 'react-router-dom';

export const stripePromise = loadStripe(
  "pk_test_51IhDBSCsyiOaFA5zh4PO9uPtC6fJWpV3PSHvobl7rIE6F9n7ULFb4guzDhgCh6A3l9iWxpVwFzAGzRRRDp4heCFL00IFiEcV7i"
)

ReactDOM.render(
  <React.StrictMode>
    <Elements stripe={stripePromise}>
    <Router>
      <App />
      </Router>
    </Elements>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
