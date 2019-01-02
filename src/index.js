import "@babel/polyfill";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./Store/index";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { polyfillLoader } from 'polyfill-io-feature-detection';
// This function load polyfills only if needed. By default it uses polyfill.io
polyfillLoader({
  "features": "Promise,fetch"
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
