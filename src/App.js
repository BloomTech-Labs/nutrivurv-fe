import "bootstrap/dist/css/bootstrap.min.css";
import "bootswatch/dist/flatly/bootstrap.min.css";
import "./App.scss";

import React from "react";
import { Route } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage.js";
import SignUp from "./components/SignUp.js";
import SignIn from "./components/SignIn.js";
import "./App.scss";
import "bootswatch/dist/flatly/bootstrap.min.css";
import "./App.scss";

import Nav from "./components/nav/nav";

function App() {
  return (
    <div className="App container-fluid p-2">
      <Nav></Nav>
      <Route path="/signin" component={SignIn} />
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/signup" component={SignUp} />
    </div>
  );
}

export default App;
