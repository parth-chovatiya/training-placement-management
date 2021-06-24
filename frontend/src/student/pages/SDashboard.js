import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import CompanyList from "./CompanyList";
import { makeStyles } from "@material-ui/core/styles";
import Alert from "@material-ui/lab/Alert";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Cookies from 'js-cookie'

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));

const SDashboard = () => {
  const classes = useStyles();
  const history = useHistory();
  const [userData, setUserdata] = useState({});
  console.log(Cookies.get('login'))
  const callDashboardPage = async () => {
    try {
      const res = await fetch("/api/student/dashboard", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      const data = await res.json();
      // console.log(data)
      setUserdata(data);
      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (err) {
      console.log(err);
      history.push("/student/login");
    }
  };

  useEffect(() => {
    callDashboardPage();
    // console.log(userData)
  }, []);

  return (
    <Container maxWidth="lg">
      <Box my={2} bgcolor="background.paper">
        <div className={classes.root}>
          <Alert variant="filled" severity="info">
            You are Eligible in these Company.
          </Alert>
        </div>
      </Box>

      <CompanyList data={userData} />
    </Container>
  );
};

export default SDashboard;
