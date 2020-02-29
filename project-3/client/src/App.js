import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Nav/Header";
import index from "./pages/index";
import features from "./pages/planners/features";
import signup from "./pages/planners/signup";


function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
        <Route exact path="/" component={index} />
        <Route exact path="/planners/features" component={features} />
        <Route exact path="/planners/signup" component={signup} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
