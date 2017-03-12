import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute } from 'react-router';
import App from './App';
import VisibleRouteList from './VisibleRouteList'
import Hello from '../components/Hello'

const Root = ({ store, history }) => (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={VisibleRouteList} />
        <Route path="routes" component={VisibleRouteList} />
        <Route path="hello" component={Hello} />
      </Route>
    </Router>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
}

export default Root;
