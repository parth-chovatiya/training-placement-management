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
import SRegister from "./student/pages/SRegister";
import CRegister from "./company/pages/CRegister";
import SDashboard from "./student/pages/SDashboard";
import CDashboard from "./company/pages/CDashboard";
import './App.css'

import Checkout from "./student/pages/Checkout";

import MaterialLayout from './student/pages/components/Layout/MaterialLayout'
import CheckoutPage from './student/pages/components/CheckoutPage'

function App() {
  return (
    <Router>
      <Navbar />
      <main>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/temp" exact>
          <MaterialLayout>
            <CheckoutPage />
          </MaterialLayout>
          </Route>
          <Route path="/student/login">
            <SLogin />
          </Route>
          <Route path="/company/login">
            <CLogin />
          </Route>
          <Route path="/student/register">
            {/* <SRegister /> */}
            <Checkout />
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
