import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginPage from "./Components/LoginPage";
import HomePage from "./Components/HomePage";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={LoginPage} />
            <Route exact path="/homePage" component={HomePage} />
            {/* Add more routes here if needed */}
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
