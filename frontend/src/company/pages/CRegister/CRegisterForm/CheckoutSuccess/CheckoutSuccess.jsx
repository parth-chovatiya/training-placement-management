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
        <br />
        Your order number is #2001539. We have emailed your order confirmation,
        and will send you an update when your order has shipped.
        <br />
        <br />
        Kindly Login.
      </Typography>
    </React.Fragment>
  );
}

export default CheckoutSuccess;
