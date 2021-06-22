import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { InputField, SelectField, DatePickerField } from '../../FormFields';

const techs = [
  {
    value: 'B.Tech',
    label: 'B.Tech'
  },
  {
    value: 'M.Tech',
    label: 'M.Tech'
  },
  {
    value: 'PHD',
    label: 'PHD'
  }
]

const departments = [
  {
    value: "Computer Engineering",
    label: "Computer Engineering"
  },
  {
    value: "Civil Engineering",
    label: "Civil Engineering"
  },
  {
    value: "Electrical Engineering",
    label: "Electrical Engineering"
  },
  {
    value: "Electronics Engineering",
    label: "Electronics Engineering"
  },
  {
    value: "Electronics and Communication Engineering",
    label: "Electronics and Communication Engineering"
  },
  {
    value: "Mechanical Engineering",
    label: "Mechanical Engineering"
  },
  {
    value: "Production Engineering",
    label: "Production Engineering"
  },
  {
    value: "Information Technology",
    label: "Information Technology"
  }
]

export default function PaymentForm(props) {
  const {
    formField: { tech, department, passingyear, cgpa }
  } = props;

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Payment method
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
        <SelectField
            name={tech.name}
            label={tech.label}
            data={techs}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6}>
        <SelectField
            name={department.name}
            label={department.label}
            data={departments}
            fullWidth
          />
          {/* <InputField
            name={department.name}
            label={department.label}
            fullWidth
          /> */}
        </Grid>
        <Grid item xs={12} md={6}>
          {/* <DatePickerField
            name={expiryDate.name}
            label={expiryDate.label}
            format="MM/yy"
            views={['year', 'month']}
            minDate={new Date()}
            maxDate={new Date('2050/12/31')}
            fullWidth
          /> */}
          <InputField name={passingyear.name} label={passingyear.label} fullWidth />
        </Grid>
        <Grid item xs={12} md={6}>
          <InputField name={cgpa.name} label={cgpa.label} fullWidth />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
