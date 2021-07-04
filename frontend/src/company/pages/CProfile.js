import React, { useEffect, useState } from "react";
import moment from "moment";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';

import "./CProfile.css";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function CProfile() {
  const classes = useStyles();
  const [stData, setstData] = useState({});
  const [state, setState] = useState({
    ComputerEngineering: false,
    CivilEngineering: false,
    ElectricalEngineering: false,
    ElectronicsEngineering: false,
    ElectronicsandCommunicationEngineering: false,
    MechanicalEngineering: false,
    ProductionEngineering: false,
    InformationTechnology: false,
  });

  const studentData = async (event) => {
    const res = await fetch("/api/company/profile/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    return data;
  };
  const test = async () => {
    const data = await studentData();
    setstData(data);
    setState({
      ComputerEngineering: data.branch[0]!=="false" ? true : false,
      CivilEngineering: data.branch[1]!=="false" ? true : false,
      ElectricalEngineering: data.branch[2]!=="false" ? true : false,
      ElectronicsEngineering: data.branch[3]!=="false" ? true : false,
      ElectronicsandCommunicationEngineering: data.branch[4]!=="false" ? true : false,
      MechanicalEngineering: data.branch[5]!=="false" ? true : false,
      ProductionEngineering: data.branch[6]!=="false" ? true : false,
      InformationTechnology: data.branch[7]!=="false" ? true : false,
    })
    // console.log("stData-->", data);
    console.log("state",state)
    // console.log("CP", (data.branch[0])!==false?true:false)
    // console.log("Civil", (data.branch[1])!==false?true:false)
  };

  useEffect(() => {
    test();
  }, []);

  const HandleInputChange = (e) => {
    var { name, value } = e.target;
    setstData({
      ...stData,
      [name]: value,
    });
    console.log(stData);
  };

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const HandleSubmit = (e) => {
    e.preventDefault();
    alert(`Kindly Contact T & P coordinator for Update your data`);
  };

  return (
    <Container component="main" maxWidth="sm">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          <u>
            <b>Your Data</b>
          </u>
        </Typography>
        {console.log(stData)}
        {/* {console.log(stData.branch[0])} */}
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                autoComplete="fname"
                value={stData["orgname"]}
                onChange={HandleInputChange}
                name="orgname"
                variant="outlined"
                required
                fullWidth
                id="orgname"
                label="Organization Name"
                InputLabelProps={{
                  shrink: stData["orgname"] ? true : false,
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                value={stData["website"]}
                onChange={HandleInputChange}
                required
                fullWidth
                id="website"
                label="Website"
                name="website"
                autoComplete="website"
                InputLabelProps={{
                  shrink: stData["website"] ? true : false,
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                value={stData["hrname"]}
                onChange={HandleInputChange}
                required
                fullWidth
                id="hrname"
                label="HR Name"
                name="hrname"
                autoComplete="hrname"
                InputLabelProps={{
                  shrink: stData["hrname"] ? true : false,
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                value={stData["hremail"]}
                onChange={HandleInputChange}
                required
                fullWidth
                id="hremail"
                label="HR Email Id"
                name="hremail"
                autoComplete="hremail"
                InputLabelProps={{
                  shrink: stData["hremail"] ? true : false,
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                value={stData["hrcontact"]}
                onChange={HandleInputChange}
                required
                fullWidth
                id="hrcontact"
                label="HR Contact No"
                name="hrcontact"
                autoComplete="hrcontact"
                InputLabelProps={{
                  shrink: stData["hrcontact"] ? true : false,
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                value={stData["address1"]}
                onChange={HandleInputChange}
                required
                fullWidth
                id="address1"
                label="Address Line 1"
                name="address1"
                autoComplete="address1"
                InputLabelProps={{
                  shrink: stData["address1"] ? true : false,
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                value={stData["address2"]}
                onChange={HandleInputChange}
                required
                fullWidth
                id="address2"
                label="Address Line 2"
                name="address2"
                autoComplete="address2"
                InputLabelProps={{
                  shrink: stData["address2"] ? true : false,
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                value={stData["city"]}
                onChange={HandleInputChange}
                required
                fullWidth
                id="city"
                label="City"
                name="city"
                autoComplete="city"
                InputLabelProps={{
                  shrink: stData["city"] ? true : false,
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                value={stData["state"]}
                onChange={HandleInputChange}
                required
                fullWidth
                id="state"
                label="state"
                name="state"
                autoComplete="state"
                InputLabelProps={{
                  shrink: stData["state"] ? true : false,
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                value={stData["zipcode"]}
                onChange={HandleInputChange}
                required
                fullWidth
                id="zipcode"
                label="Zipcode / Pincode"
                name="zipcode"
                autoComplete="zipcode"
                InputLabelProps={{
                  shrink: stData["zipcode"] ? true : false,
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                value={stData["country"]}
                onChange={HandleInputChange}
                required
                fullWidth
                id="country"
                label="Country"
                name="country"
                autoComplete="country"
                InputLabelProps={{
                  shrink: stData["country"] ? true : false,
                }}
              />
            </Grid>
          <Grid item xs={12} sm={6}>
            <FormControlLabel
              control={
                <Checkbox
                checked={state.ComputerEngineering}
                onChange={handleChange}
                name="ComputerEngineering"
                color="primary"
                />
              }
              label="Computer Engineering"
              />
              <br />
            <FormControlLabel
              control={
                <Checkbox
                checked={state.CivilEngineering}
                onChange={handleChange}
                name="CivilEngineering"
                color="primary"
                />
              }
              label="Civil Engineering"
              />
            <FormControlLabel
              control={
                <Checkbox
                checked={state.ElectricalEngineering}
                onChange={handleChange}
                name="ElectricalEngineering"
                color="primary"
                />
              }
              label="Electrical Engineering"
              />
              <br />
            <FormControlLabel
              control={
                <Checkbox
                checked={state.ElectronicsEngineering}
                onChange={handleChange}
                name="ElectronicsEngineering"
                color="primary"
                />
              }
              label="Electronics Engineering"
              />
            </Grid>
          <Grid item xs={12} sm={6}>
            <FormControlLabel
              control={
                <Checkbox
                checked={state.ElectronicsandCommunicationEngineering}
                onChange={handleChange}
                name="ElectronicsandCommunicationEngineering"
                color="primary"
                />
              }
              label="Electronics and Communication Engineering"
              />
              <br />
            <FormControlLabel
              control={
                <Checkbox
                checked={state.MechanicalEngineering}
                onChange={handleChange}
                name="MechanicalEngineering"
                color="primary"
                />
              }
              label="Mechanical Engineering"
              />
            <FormControlLabel
              control={
                <Checkbox
                checked={state.ProductionEngineering}
                onChange={handleChange}
                name="ProductionEngineering"
                color="primary"
                />
              }
              label="Production Engineering"
              />
              <br />
            <FormControlLabel
              control={
                <Checkbox
                checked={state.InformationTechnology}
                onChange={handleChange}
                name="InformationTechnology"
                color="primary"
                />
              }
              label="Information Technology"
              />
            </Grid>
            <Grid item xs={12} sm={7}>
              <TextField
                variant="outlined"
                value={moment(stData["interviewDate"]).utc().format("MM/DD/YYYY")}
                onChange={HandleInputChange}
                required
                fullWidth
                id="interviewDate"
                label="Tentative Interview Date ( MM/DD/YYYY )"
                name="interviewDate"
                autoComplete="interviewDate"
                InputLabelProps={{
                  shrink: stData["interviewDate"] ? true : false,
                }}
              />
            </Grid>
            <Grid item xs={12} sm={5}>
              <TextField
                variant="outlined"
                value={stData["cgpa"]}
                onChange={HandleInputChange}
                required
                fullWidth
                id="cgpa"
                label="Min CGPA"
                name="cgpa"
                autoComplete="cgpa"
                InputLabelProps={{
                  shrink: stData["cgpa"] ? true : false,
                }}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            onClick={HandleSubmit}
            className={classes.submit}
          >
            Update
          </Button>
        </form>
      </div>
    </Container>
  );
}
