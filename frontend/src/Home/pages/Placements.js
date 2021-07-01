import React from "react";
import { Container } from "@material-ui/core";
import PlacementNav from "../components/PlacementNav";
import TrainingPlaccement from "./TrainingPlacement";
import PlacementRecords from "./PlacementRecords";
import Recruiters from "./Recruiters";
import RequiterSpeak from './RecuiterSpeak'

import classes from "./Placement.module.css";

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
        <div className={`${classes.row}`}>
          <div className={`${classes['col-1']}`}>
            <PlacementNav />
          </div>
          <div className={`${classes['col-2']}`}>
            <Container maxWidth="xl">
              <Switch>
                <Route path="/placements" exact>
                  <TrainingPlaccement />
                </Route>
                <Route path="/placements/placements_records">
                  <PlacementRecords />
                </Route>
                <Route path="/placements/recruiters">
                  <Recruiters />
                </Route>
                <Route path="/placements/recuiter_speak">
                  <RequiterSpeak />
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
