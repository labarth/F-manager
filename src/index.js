import React from 'react';
import ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader/root';
import { Provider } from 'react-redux';
import { store } from './store';
import { App } from './App';

const AppWithRedux = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

const AppComponent = hot(AppWithRedux);
const rootEl = document.getElementById('root');

ReactDOM.render(<AppComponent />, rootEl);