import React from 'react';

import ReactDOM from 'react-dom';

import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';

import store from './redux/store';

import App from './components/App';

// Register service worker
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('serviceWorker.js');
}

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);
