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


export default function AddressForm(props) {
  const {
    formField: {
      fullName,
      studentId,
      enrolementNo,
      aadhaarNo,
      email,
      contact,
      dob,
      gender,
      religion,
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
          <InputField name={fullName.name} label={fullName.label} fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputField name={studentId.name} label={studentId.label} fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputField name={enrolementNo.name} label={enrolementNo.label} fullWidth />
        </Grid>
        <Grid item xs={12}>
          <InputField name={aadhaarNo.name} label={aadhaarNo.label} fullWidth />
        </Grid>
        <Grid item xs={12}>
          <InputField name={email.name} label={email.label} fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputField name={contact.name} label={contact.label} fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          {/* <InputField name={dob.name} label={dob.label} fullWidth /> */}
          <DatePickerField
            name={dob.name}
            label={dob.label}
            format="dd/MM/yy"
            // views={['year', 'month']}
            // minDate={new Date()}
            maxDate={new Date()}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <SelectField
            name={gender.name}
            label={gender.label}
            data={genders}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputField name={religion.name} label={religion.label} fullWidth />
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
