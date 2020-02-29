import React from "react";
// import { motion } from "framer-motion"
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Nav/Header";
import index from "./pages/index";
import features from "./pages/planners/features";
import signup from "./pages/planners/signup";
import "./index.css";

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
