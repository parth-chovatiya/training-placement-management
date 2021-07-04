import React, { useEffect, useState } from "react";
import moment from "moment";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

import "./SProfile.css";

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

export default function SProfile() {
  const classes = useStyles();
  const [stData, setstData] = useState({});

  const studentData = async (event) => {
    const res = await fetch("/api/student/profile/", {
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
    console.log("stData-->", data);
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
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                autoComplete="fname"
                value={stData["fullName"]}
                onChange={HandleInputChange}
                name="fullName"
                variant="outlined"
                required
                fullWidth
                id="fullName"
                label="Full Name"
                InputLabelProps={{
                  shrink: stData["fullName"] ? true : false,
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                value={stData["email"]}
                onChange={HandleInputChange}
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                InputLabelProps={{
                  shrink: stData["email"] ? true : false,
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                value={stData["studentId"]}
                onChange={HandleInputChange}
                required
                fullWidth
                id="studentId"
                label="Student Id"
                name="studentId"
                autoComplete="studentId"
                InputLabelProps={{
                  shrink: stData["studentId"] ? true : false,
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                value={stData["enrolementNo"]}
                onChange={HandleInputChange}
                required
                fullWidth
                id="enrolementNo"
                label="Enrolement No"
                name="enrolementNo"
                autoComplete="enrolementNo"
                InputLabelProps={{
                  shrink: stData["enrolementNo"] ? true : false,
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                value={stData["aadhaarNo"]}
                onChange={HandleInputChange}
                required
                fullWidth
                id="aadhaarNo"
                label="Aadhaar No"
                name="aadhaarNo"
                autoComplete="aadhaarNo"
                InputLabelProps={{
                  shrink: stData["aadhaarNo"] ? true : false,
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                value={stData["contact"]}
                onChange={HandleInputChange}
                required
                fullWidth
                id="contact"
                label="Contact No"
                name="contact"
                autoComplete="contact"
                InputLabelProps={{
                  shrink: stData["contact"] ? true : false,
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                value={moment(stData["dob"]).utc().format("MM/DD/YYYY")}
                onChange={HandleInputChange}
                required
                fullWidth
                id="dob"
                label="Date of Birth ( MM/DD/YYYY )"
                name="dob"
                autoComplete="dob"
                InputLabelProps={{
                  shrink: stData["dob"] ? true : false,
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                value={stData["gender"]}
                onChange={HandleInputChange}
                required
                fullWidth
                id="gender"
                label="Gender"
                name="gender"
                autoComplete="gender"
                InputLabelProps={{
                  shrink: stData["gender"] ? true : false,
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                value={stData["religion"]}
                onChange={HandleInputChange}
                required
                fullWidth
                id="religion"
                label="Religion"
                name="religion"
                autoComplete="religion"
                InputLabelProps={{
                  shrink: stData["religion"] ? true : false,
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
                label="Address"
                name="address1"
                autoComplete="address1"
                InputLabelProps={{
                  shrink: stData["address1"] ? true : false,
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
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                value={stData["coursetype"]}
                onChange={HandleInputChange}
                required
                fullWidth
                id="coursetype"
                label="Course Type"
                name="coursetype"
                autoComplete="coursetype"
                InputLabelProps={{
                  shrink: stData["coursetype"] ? true : false,
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                value={stData["department"]}
                onChange={HandleInputChange}
                required
                fullWidth
                id="department"
                sm={6}
                label="Department"
                name="department"
                autoComplete="department"
                InputLabelProps={{
                  shrink: stData["department"] ? true : false,
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                value={stData["passingyear"]}
                onChange={HandleInputChange}
                required
                fullWidth
                id="passingyear"
                label="Passing Year"
                name="passingyear"
                autoComplete="passingyear"
                InputLabelProps={{
                  shrink: stData["passingyear"] ? true : false,
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                value={stData["cgpa"]}
                onChange={HandleInputChange}
                required
                fullWidth
                id="cgpa"
                label="CGPA"
                name="cgpa"
                autoComplete="cgpa"
                InputLabelProps={{
                  shrink: stData["cgpa"] ? true : false,
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                value={stData["placed"]}
                onChange={HandleInputChange}
                required
                fullWidth
                id="placed"
                label="Placed"
                name="placed"
                autoComplete="placed"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                value={stData["company"]}
                onChange={HandleInputChange}
                required
                fullWidth
                id="company"
                label="Company"
                name="company"
                autoComplete="company"
                InputLabelProps={{
                  shrink: stData["company"] ? true : false,
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
