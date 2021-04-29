import React from 'react'
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";

import Home from '../pages/Home';

class Router extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default Router
