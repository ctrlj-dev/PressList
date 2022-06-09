import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "../views/login";

export const App = () => {
  return (
    <Router>
      <header>header</header>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
      </Switch>
    </Router>
  );
};
