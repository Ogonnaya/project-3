import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Nav/Header";
import index from "./pages/index";
import features from "./pages/planners/features";
import signup from "./pages/planners/signup";
import profile from "./pages/planners/profile";
import history from "./utils/history";


function App() {
  return (
    <Router history={history}>
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={index} />
          <Route exact path="/planners/features" component={features} />
          <Route exact path="/planners/signup" component={signup} />
          <Route exact path="/planners/profile" component={profile} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
