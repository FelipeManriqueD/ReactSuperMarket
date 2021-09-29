import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Header from "../Header/Header";
import { Login } from "../LoginPage";
import { PrivateRoute } from "../../utils/PrivateRoute";
import { Home } from "../HomePage";
import { Register } from "../RegisterPage";

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <div className="content content__header">
          <Header />
        </div>
        <div className="content content__main">
          <Router>
            <Switch>
              <PrivateRoute exact path="/home" component={Home} />
              <Route path="/login" component={Login} />
              <Route path="/register" component={Register} />
              <Redirect from="*" to="/login" />
            </Switch>
          </Router>
        </div>
        <div className="content content__footer"></div>
      </div>
    );
  }
}

export { App };
