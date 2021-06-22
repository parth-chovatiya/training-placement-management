import React from 'react';
import { Typography, List, ListItem, ListItemText } from '@material-ui/core';
import useStyles from './styles';


function ProductDetails(props) {
  const { formValues } = props;
  console.log(formValues)
  const classes = useStyles();

  return (
    <List disablePadding>
      <ListItem className={classes.listItem}>
        <ListItemText primary={"Organization Name"} />
        <Typography variant="body2">{formValues.orgname}</Typography>
      </ListItem>
      <ListItem className={classes.listItem}>
        <ListItemText primary={"Website"} />
        <Typography variant="body2">{formValues.website}</Typography>
      </ListItem>
      <ListItem className={classes.listItem}>
        <ListItemText primary={"HR Name"} />
        <Typography variant="body2">{formValues.hrname}</Typography>
      </ListItem>
      <ListItem className={classes.listItem}>
        <ListItemText primary={"HR Email"} />
        <Typography variant="body2">{formValues.hremail}</Typography>
      </ListItem>
      <ListItem className={classes.listItem}>
        <ListItemText primary={"HR Contact No."} />
        <Typography variant="body2">{formValues.hrcontact}</Typography>
      </ListItem>
      <ListItem className={classes.listItem}>
        <ListItemText primary={"Address"} />
        <Typography variant="body2">{formValues.address1} {formValues.address2}</Typography>
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
    </List>
  );
}

export default ProductDetails;
