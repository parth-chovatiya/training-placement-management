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
import CRegister from "./company/pages/CRegister";
import SDashboard from "./student/pages/SDashboard";
import CDashboard from "./company/pages/CDashboard";
import './App.css'


import MaterialLayout from './student/pages/SRegister/Layout/MaterialLayout'
import SRegisterForm from './student/pages/SRegister/SRegisterForm'

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
          <Route path="/student/register">
            <MaterialLayout>
              <SRegisterForm />
            </MaterialLayout>
          </Route>
          <Route path="/company/register">
            <CRegister />
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
