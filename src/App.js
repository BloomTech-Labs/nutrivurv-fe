import "bootstrap/dist/css/bootstrap.min.css";
import "bootswatch/dist/flatly/bootstrap.min.css";
import "./App.scss";

import React from "react";
import { Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./State/configureStore";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Switch>
          <Route exact path="/dashboard" component={DashboardContainer} />
          <Route path="/" component={HomeContainer} />
        </Switch>
      </div>
    </Provider>
  );
}

export default App;
