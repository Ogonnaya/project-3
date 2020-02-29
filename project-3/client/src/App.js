import React from "react";
<<<<<<< HEAD
import { motion } from "framer-motion"
=======
>>>>>>> fac4637c5a34262ec14607f2e131a2babd3702ab
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
<<<<<<< HEAD
<<<<<<< HEAD
          <Route exact path="/" component={index} />
          <Route exact path="/planners/features" component={features} />
          <Route exact path="/planners/signup" component={signup} />
=======
        <Route exact path="/" component={index} />
        <Route exact path="/planners/features" component={features} />
        <Route exact path="/planners/signup" component={signup} />
>>>>>>> fac4637c5a34262ec14607f2e131a2babd3702ab
=======
          <Route exact path="/" component={index} />
          <Route exact path="/planners/features" component={features} />
          <Route exact path="/planners/signup" component={signup} />
>>>>>>> 0e35e238636da488f6426d34bbc31aacbbbc4abb
        </Switch>
      </div>
    </Router>
  );
}

export default App;
