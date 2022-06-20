import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignInComponent from "./SignInComponent2";

class RootComponent extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route
            exact
            path={"/signin"}
            render={() => {
              return <SignInComponent />;
            }}
          />
        </Switch>
      </Router>
    );
  }
}

export default RootComponent;
