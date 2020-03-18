import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import TableEnterprise from "./components/TableEnterprise";
import Home from "./components/Home";
import AddEnterprise from "./components/AddEnterprise";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Router>
            <Switch>
              <Route exact path="/" component={TableEnterprise} />
              <Route path="/home" component={Home} />
              <Route path="/addEnterprise" component={AddEnterprise} />
            </Switch>
          </Router>
        </header>
      </div>
    );
  }
}

export default App;
