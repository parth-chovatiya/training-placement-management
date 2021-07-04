import React from "react";
import moment from "moment";
import { Typography, Grid, ListItem, ListItemText } from "@material-ui/core";
import useStyles from "./styles";

function PaymentDetails(props) {
  const { formValues } = props;
  const classes = useStyles();
  return (
    <Grid item xs={12}>
      <Typography variant="h6" gutterBottom className={classes.title}>
        Criteria to select students
      </Typography>
      <ListItem className={classes.listItem}>
        <ListItemText primary={"Tentetive Interview Date"} />
        <Typography variant="body2">
          {moment(formValues.interviewDate).utc().format("MM/DD/YYYY")}
        </Typography>
      </ListItem>
      <ListItem className={classes.listItem}>
        <ListItemText primary={"MIN CGPA"} />
        <Typography variant="body2">{formValues.cgpa}</Typography>
      </ListItem>
      {formValues.computerEngineering ? (
        <Typography className={classes.listItem}>
          Computer Engineering
        </Typography>
      ) : null}
      {formValues.civilEngineering ? (
        <Typography className={classes.listItem}>Civil Engineering</Typography>
      ) : null}
      {formValues.electricalEngineering ? (
        <Typography className={classes.listItem}>
          Electrical Engineering
        </Typography>
      ) : null}
      {formValues.electronicsEngineering ? (
        <Typography className={classes.listItem}>
          Electronics Engineering
        </Typography>
      ) : null}
      {formValues.eandcEngineering ? (
        <Typography className={classes.listItem}>
          Electronics and Communication Engineering
        </Typography>
      ) : null}
      {formValues.mechanicalEngineering ? (
        <Typography className={classes.listItem}>
          Mechanical Engineering
        </Typography>
      ) : null}
      {formValues.productionEngineering ? (
        <Typography className={classes.listItem}>
          Production Engineering
        </Typography>
      ) : null}
      {formValues.informationTechnology ? (
        <Typography className={classes.listItem}>
          Information Technology
        </Typography>
      ) : null}
    </Grid>
  );
}

export default PaymentDetails;
