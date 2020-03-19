import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import TableEnterprise from "./components/TableEnterprise";
import Home from "./components/Home";
import AddEnterprise from "./components/AddEnterprise";
import DeleteEnterprise from "./components/DeleteEnterprise";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <Switch>
              <Route exact path="/" component={TableEnterprise} />
              <Route path="/home" component={Home} />
              <Route path="/addEnterprise" component={AddEnterprise} />
              <Route path="/deleteEnterprise" component={DeleteEnterprise} />
              <Route path="/editEnterprise/:id" component={AddEnterprise} />
            </Switch>
          </header>
        </div>
      </Router>
    );
  }
}

export default App;
