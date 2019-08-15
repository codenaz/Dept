import React from 'react';
import { Router, Route, Switch, withRouter } from 'react-router-dom';
import history from './history';
import PropTypes from 'prop-types';
import Home from './Pages/Home';

function Scroll(props) {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [props.location]);

  return props.children;
}

Scroll.propTypes = {
  location: PropTypes.object,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};

const ScrollToTop = withRouter(Scroll);

function RouterComponent() {
  return (
    <Router history={history}>
      <ScrollToTop>
        <Switch>
          <Route path='/' component={Home} />
        </Switch>
      </ScrollToTop>
    </Router>
  );
}

export default RouterComponent;
