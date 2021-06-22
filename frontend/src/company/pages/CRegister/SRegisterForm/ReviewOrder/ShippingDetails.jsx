import React from 'react';
import { Typography, Grid, ListItem, ListItemText  } from '@material-ui/core';
import useStyles from './styles';

function PaymentDetails(props) {
  const { formValues } = props;
  const classes = useStyles();
  return (
    <Grid item xs={12}>
      <Typography variant="h6" gutterBottom className={classes.title}>
        Shipping
      </Typography>
      <Typography gutterBottom>{formValues.computerEngineering?"Computer Engineering" : null}</Typography>
      <Typography gutterBottom>{formValues.civilEngineering?"Civil Engineering" : null}</Typography>
      <Typography gutterBottom>{formValues.electricalEngineering?"Electrical Engineering" : null}</Typography>
      <Typography gutterBottom>{formValues.electronicsEngineering?"Electronics Engineering" : null}</Typography>
      <Typography gutterBottom>{formValues.eandcEngineering?"Electronics and Communication Engineering" : null}</Typography>
      <Typography gutterBottom>{formValues.mechanicalEngineering?"Mechanical Engineering" : null}</Typography>
      <Typography gutterBottom>{formValues.productionEngineering?"Production Engineering" : null}</Typography>
      <Typography gutterBottom>{formValues.informationTechnology?"Information Technology" : null}</Typography>
      <ListItem className={classes.listItem}>
        <ListItemText primary={"CGPA"} />
        <Typography variant="body2">{formValues.cgpa}</Typography>
      </ListItem>
    </Grid>
  );
}

export default PaymentDetails;
