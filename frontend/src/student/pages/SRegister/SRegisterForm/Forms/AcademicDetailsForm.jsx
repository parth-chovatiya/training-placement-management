import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { InputField, SelectField } from "../../FormFields";

const techs = [
  {
    value: "B.Tech",
    label: "B.Tech",
  },
  {
    value: "M.Tech",
    label: "M.Tech",
  },
  {
    value: "PHD",
    label: "PHD",
  },
];

const departments = [
  {
    value: "Computer Engineering",
    label: "Computer Engineering",
  },
  {
    value: "Civil Engineering",
    label: "Civil Engineering",
  },
  {
    value: "Electrical Engineering",
    label: "Electrical Engineering",
  },
  {
    value: "Electronics Engineering",
    label: "Electronics Engineering",
  },
  {
    value: "Electronics and Communication Engineering",
    label: "Electronics and Communication Engineering",
  },
  {
    value: "Mechanical Engineering",
    label: "Mechanical Engineering",
  },
  {
    value: "Production Engineering",
    label: "Production Engineering",
  },
  {
    value: "Information Technology",
    label: "Information Technology",
  },
];

export default function AcademicDetailsForm(props) {
  const {
    formField: { coursetype, department, passingyear, cgpa },
  } = props;

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Academic details
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <SelectField
            name={coursetype.name}
            label={coursetype.label}
            data={techs}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <SelectField
            name={department.name}
            label={department.label}
            data={departments}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <InputField
            name={passingyear.name}
            label={passingyear.label}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <InputField name={cgpa.name} label={cgpa.label} fullWidth />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
