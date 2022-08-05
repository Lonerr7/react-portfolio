import React from 'react';
import ReactDOM from 'react-dom';
import './reset.scss';
import './index.scss';
import { HashRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/redux-store';
import AppContainer from './AppContainer';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <AppContainer />
    </Router>
  </Provider>,
  document.getElementById('root')
);
