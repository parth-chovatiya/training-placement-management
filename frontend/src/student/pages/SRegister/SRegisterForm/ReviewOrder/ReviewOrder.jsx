import React from "react";
import { useFormikContext } from "formik";
import { Typography } from "@material-ui/core";
import ProductDetails from "./ProductDetails";

export default function ReviewOrder() {
  const { values: formValues } = useFormikContext();
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Your Data
      </Typography>
      <ProductDetails formValues={formValues} />
    </React.Fragment>
  );
}
