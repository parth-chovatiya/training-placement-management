import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

export default function PaymentForm() {
  const [department, setDepartment] = React.useState('');
  const [tech, setTech] = React.useState('');

  const handleTechChange = (event) => {
    setTech(event.target.value);
  };

  const handleDepartmentChange = (event) => {
    setDepartment(event.target.value);
  };

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Academic details
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          {/* <TextField 
            required 
            id="cardName" 
            label="Branch" 
            fullWidth 
            autoComplete="cc-name" 
          /> */}
          <FormControl 
            required
            fullWidth
          >
            <InputLabel id="demo-simple-select-label">Tech</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={tech}
              onChange={handleTechChange}
              >
              <MenuItem value={"btech"}>B.Tech</MenuItem>
              <MenuItem value={"mtech"}>M.Tech</MenuItem>
              <MenuItem value={"phd"}>PHD</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          {/* <TextField
            required
            id="cardNumber"
            label="Branch"
            fullWidth
            autoComplete="cc-number"
          /> */}
          <FormControl 
            required
            fullWidth
          >
            <InputLabel id="demo-simple-select-label">Department</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={department}
              onChange={handleDepartmentChange}
              >
              <MenuItem value={"Computer Engineering"}>Computer Engineering</MenuItem>
              <MenuItem value={"Civil Engineering"}>Civil Engineering</MenuItem>
              <MenuItem value={"Electrical Engineering"}>Electrical Engineering</MenuItem>
              <MenuItem value={"Electronics Engineering"}>Electronics Engineering</MenuItem>
              <MenuItem value={"Electronics and Communication Engineering"}>Electronics and Communication Engineering</MenuItem>
              <MenuItem value={"Mechanical Engineering"}>Mechanical Engineering</MenuItem>
              <MenuItem value={"Production Engineering"}>Production Engineering</MenuItem>
              <MenuItem value={"Information Technology"}>Information Technology</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField required id="expDate" label="Passing Year" fullWidth autoComplete="cc-exp" />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cvv"
            label="CGPA"
            // helperText="Last three digits on signature strip"
            fullWidth
            autoComplete="cc-csc"
          />
        </Grid>
        {/* <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveCard" value="yes" />}
            label="Remember credit card details for next time"
          />
        </Grid> */}
      </Grid>
    </React.Fragment>
  );
}