import React from "react";
import { useFormikContext } from "formik";
import { Typography, Grid } from "@material-ui/core";
import ProductDetails from "./ProductDetails";
import ShippingDetails from "./ShippingDetails";

export default function ReviewOrder() {
  const { values: formValues } = useFormikContext();
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Your Data
      </Typography>
      <ProductDetails formValues={formValues} />
      <Grid container spacing={1}>
        <ShippingDetails formValues={formValues} />
      </Grid>
    </React.Fragment>
  );
}
