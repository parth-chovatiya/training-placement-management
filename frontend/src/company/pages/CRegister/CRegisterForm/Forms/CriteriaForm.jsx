import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { InputField, CheckboxField, DatePickerField } from "../../FormFields";

export default function AcademicDetailsForm(props) {
  const {
    formField: {
      interviewDate,
      computerEngineering,
      civilEngineering,
      electricalEngineering,
      electronicsEngineering,
      eandcEngineering,
      mechanicalEngineering,
      productionEngineering,
      informationTechnology,
      cgpa,
    },
  } = props;

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Academic details
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <DatePickerField
            name={interviewDate.name}
            label={interviewDate.label}
            format="dd/MM/yy"
            // views={['year', 'month']}
            minDate={new Date()}
            maxDate={new Date("2050/12/31")}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <CheckboxField
            name={computerEngineering.name}
            label={computerEngineering.label}
          />
        </Grid>
        <Grid item xs={12}>
          <CheckboxField
            name={civilEngineering.name}
            label={civilEngineering.label}
          />
        </Grid>
        <Grid item xs={12}>
          <CheckboxField
            name={electricalEngineering.name}
            label={electricalEngineering.label}
          />
        </Grid>
        <Grid item xs={12}>
          <CheckboxField
            name={electronicsEngineering.name}
            label={electronicsEngineering.label}
          />
        </Grid>
        <Grid item xs={12}>
          <CheckboxField
            name={eandcEngineering.name}
            label={eandcEngineering.label}
          />
        </Grid>
        <Grid item xs={12}>
          <CheckboxField
            name={mechanicalEngineering.name}
            label={mechanicalEngineering.label}
          />
        </Grid>
        <Grid item xs={12}>
          <CheckboxField
            name={productionEngineering.name}
            label={productionEngineering.label}
          />
        </Grid>
        <Grid item xs={12}>
          <CheckboxField
            name={informationTechnology.name}
            label={informationTechnology.label}
          />
        </Grid>
        <Grid item xs={12}>
          <InputField name={cgpa.name} label={cgpa.label} fullWidth />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
