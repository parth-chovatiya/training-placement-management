import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

import Home from "./Home/pages/Home";
import Navbar from "./shared/components/Navigation/Navbar";
import SLogin from "./student/pages/SLogin";
import CLogin from "./company/pages/CLogin";
import SDashboard from "./student/pages/SDashboard";
import CDashboard from "./company/pages/CDashboard";
import Login from './shared/pages/Login'
import Logout from './shared/pages/Logout'
import Placements from "./Home/pages/Placements";
import "./App.css";

import SMaterialLayout from "./student/pages/SRegister/Layout/MaterialLayout";
import SSRegisterForm from "./student/pages/SRegister/SRegisterForm";

import CMaterialLayout from "./company/pages/CRegister/Layout/MaterialLayout";
import CSRegisterForm from "./company/pages/CRegister/CRegisterForm";

function App() {
  return (
    <Router>
      <Navbar />
      <main>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/placements" exact>
            <Placements />
          </Route>
          <Route path="/placements/placements_records" exact>
            <Placements />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/logout">
            <Logout />
          </Route>
          <Route path="/student/login">
            <SLogin />
          </Route>
          <Route path="/company/login">
            <CLogin />
          </Route>
          <Route path="/student/register">
            <SMaterialLayout>
              <SSRegisterForm />
            </SMaterialLayout>
          </Route>
          <Route path="/company/register">
            <CMaterialLayout>
              <CSRegisterForm />
            </CMaterialLayout>
          </Route>
          <Route path="/student/dashboard">
            <SDashboard />
          </Route>
          <Route path="/company/dashboard">
            <CDashboard />
          </Route>
          <Redirect to="/" />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
