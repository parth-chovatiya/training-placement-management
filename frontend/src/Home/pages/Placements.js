import React from "react";
import { Container } from "@material-ui/core";
import PlacementNav from "../components/PlacementNav";
import TrainingPlaccement from "./TrainingPlacement";
import PlacementRecords from "./PlacementRecords";
import "./Placement.css";

import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

const Placements = () => {
  return (
    <>
      <Route>
        <div className="row">
          <div className="col-1">
            <PlacementNav />
          </div>
          <div className="col-2">
            <Container maxWidth="xl">
              <Switch>
                <Route path="/placements" exact>
                  <TrainingPlaccement />
                </Route>
                <Route path="/placements/placements_records">
                  <PlacementRecords />
                </Route>
              </Switch>
            </Container>
          </div>
        </div>
      </Route>
    </>
  );
};

export default Placements;
