import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Categoires from "./pages/Categories";
import Feed from './pages/Feed'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <div>home</div>
          <Link to="/categories">go</Link>
        </Route>
        <Route path="/categories" exact>
          <Categoires />
        </Route>
        <Route path="/categories/:type">
          <Feed />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
