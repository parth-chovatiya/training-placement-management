import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { InputField, CheckboxField, SelectField, DatePickerField } from '../../FormFields';


const genders = [
  {
    value: 'Male',
    label: 'Male'
  },
  {
    value: 'Female',
    label: 'Female'
  }
];
// AddressForm
// PaymentForm

export default function AboutYourSelfForm(props) {
  const {
    formField: {
      orgname,
      website,
      hrname,
      hremail,
      hrcontact,
      address1,
      address2,
      city,
      state,
      zipcode,
      country,
    }
  } = props;
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        About your self
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <InputField name={orgname.name} label={orgname.label} fullWidth />
        </Grid>
        <Grid item xs={12}>
          <InputField name={website.name} label={website.label} fullWidth />
        </Grid>
        <Grid item xs={12}>
          <InputField name={hrname.name} label={hrname.label} fullWidth />
        </Grid>
        <Grid item xs={12}>
          <InputField name={hremail.name} label={hremail.label} fullWidth />
        </Grid>
        <Grid item xs={12}>
          <InputField name={hrcontact.name} label={hrcontact.label} fullWidth />
        </Grid>
        <Grid item xs={12}>
          <InputField name={address1.name} label={address1.label} fullWidth />
        </Grid>
        <Grid item xs={12}>
          <InputField name={address2.name} label={address2.label} fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputField name={city.name} label={city.label} fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputField name={state.name} label={state.label} fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputField name={zipcode.name} label={zipcode.label} fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputField name={country.name} label={country.label} fullWidth />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
