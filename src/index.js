import React from 'react';
import ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader/root';
import { Provider } from 'react-redux';
import { App } from 'containers/App/App';
import { GlobalStyle } from 'components/GlobalStyles';
import { store } from './store';

const AppWithRedux = () => (
  <Provider store={store}>
    <GlobalStyle />
    <App />
  </Provider>
);

const AppComponent = hot(AppWithRedux);
const rootEl = document.getElementById('root');

ReactDOM.render(<AppComponent />, rootEl);
