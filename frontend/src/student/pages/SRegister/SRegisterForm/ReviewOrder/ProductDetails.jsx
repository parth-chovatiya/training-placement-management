import React from "react";
import moment from "moment";
import { Typography, List, ListItem, ListItemText } from "@material-ui/core";
import useStyles from "./styles";

function ProductDetails(props) {
  const { formValues } = props;
  const classes = useStyles();

  return (
    <List disablePadding>
      <ListItem className={classes.listItem}>
        <ListItemText primary={"Full Name"} />
        <Typography variant="body2">{formValues.fullName}</Typography>
      </ListItem>
      <ListItem className={classes.listItem}>
        <ListItemText primary={"Student Id No."} />
        <Typography variant="body2">{formValues.studentId}</Typography>
      </ListItem>
      <ListItem className={classes.listItem}>
        <ListItemText primary={"Enrolement No."} />
        <Typography variant="body2">{formValues.enrolementNo}</Typography>
      </ListItem>
      <ListItem className={classes.listItem}>
        <ListItemText primary={"Aadhaar No."} />
        <Typography variant="body2">{formValues.aadhaarNo}</Typography>
      </ListItem>
      <ListItem className={classes.listItem}>
        <ListItemText primary={"Email Id"} />
        <Typography variant="body2">{formValues.email}</Typography>
      </ListItem>
      <ListItem className={classes.listItem}>
        <ListItemText primary={"Contact No."} />
        <Typography variant="body2">{formValues.contact}</Typography>
      </ListItem>
      <ListItem className={classes.listItem}>
        <ListItemText primary={"Date of Birth"} />
        <Typography variant="body2">
          {moment(formValues.dob).utc().format("MM/DD/YYYY")}
        </Typography>
      </ListItem>
      <ListItem className={classes.listItem}>
        <ListItemText primary={"Gender"} />
        <Typography variant="body2">{formValues.gender}</Typography>
      </ListItem>
      <ListItem className={classes.listItem}>
        <ListItemText primary={"Religion"} />
        <Typography variant="body2">{formValues.religion}</Typography>
      </ListItem>
      <ListItem className={classes.listItem}>
        <ListItemText primary={"Address"} />
        <Typography variant="body2">
          {formValues.address1} {formValues.address2}
        </Typography>
      </ListItem>
      <ListItem className={classes.listItem}>
        <ListItemText primary={"City"} />
        <Typography variant="body2">{formValues.city}</Typography>
      </ListItem>
      <ListItem className={classes.listItem}>
        <ListItemText primary={"State"} />
        <Typography variant="body2">{formValues.state}</Typography>
      </ListItem>
      <ListItem className={classes.listItem}>
        <ListItemText primary={"Zip / Postal Code"} />
        <Typography variant="body2">{formValues.zipcode}</Typography>
      </ListItem>
      <ListItem className={classes.listItem}>
        <ListItemText primary={"Country"} />
        <Typography variant="body2">{formValues.country}</Typography>
      </ListItem>
      <ListItem className={classes.listItem}>
        <ListItemText primary={"Cource Type"} />
        <Typography variant="body2">{formValues.coursetype}</Typography>
      </ListItem>
      <ListItem className={classes.listItem}>
        <ListItemText primary={"Department"} />
        <Typography variant="body2">{formValues.department}</Typography>
      </ListItem>
      <ListItem className={classes.listItem}>
        <ListItemText primary={"Passing Year"} />
        <Typography variant="body2">{formValues.passingyear}</Typography>
      </ListItem>
      <ListItem className={classes.listItem}>
        <ListItemText primary={"CGPA"} />
        <Typography variant="body2">{formValues.cgpa}</Typography>
      </ListItem>
    </List>
  );
}

export default ProductDetails;
