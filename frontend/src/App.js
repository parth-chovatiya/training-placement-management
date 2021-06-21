import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

import Home from './Home/pages/Home'
import Navbar from './shared/components/Navigation/Navbar'
import SLogin from "./student/pages/SLogin";
import CLogin from "./company/pages/CLogin";
import './App.css'

function App() {
  return (
    <Router>
      <Navbar />
      <main>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/student/login">
            <SLogin />
          </Route>
          <Route path="/company/login">
            <CLogin />
          </Route>
          <Route path="/student/dashboard">
            {/* <Sdashboard /> */}
          </Route>
          <Route path="/company/dashboard">
            {/* <Cdashboard /> */}
          </Route>
          <Redirect to="/" />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
