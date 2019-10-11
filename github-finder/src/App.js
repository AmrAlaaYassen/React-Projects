import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GithubState from "./context/github/GithubState";
import AlertState from "./context/alert/AlertState";
import Navbar from "./Components/layouts/Navbar";
import "./App.css";
import Home from "./Components/pages/Home";
import Alert from "./Components/layouts/Alert";
import NotFound from "./Components/pages/NotFound";
import About from "./Components/pages/About";
import User from "./Components/users/User";
const App = () => {
  return (
    <GithubState>
      <AlertState>
        <Router>
          <div className="App">
            <Navbar />
            <div className="container">
              <Alert />
              <Switch>
                <Route exact path="/" component={Home}></Route>
                <Route exact path="/about" component={About}></Route>
                <Route exact path="/user/:login" component={User} />
                <Route path="*" component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </AlertState>
    </GithubState>
  );
};

export default App;
