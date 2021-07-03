import React from "react";
import { Typography } from "@material-ui/core";

function CheckoutSuccess(props) {
  return (
    <React.Fragment>
      <Typography variant="h5" gutterBottom>
        Your data is saved.
      </Typography>
      <Typography variant="subtitle1">
        Your Student ID : {props.id} <br />
        Your Password : {props.password} <br />
        
        Kindly Login.
      </Typography>
    </React.Fragment>
  );
}

export default CheckoutSuccess;
