import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import StudentList from "./StudentList";
import { makeStyles } from "@material-ui/core/styles";
import Alert from "@material-ui/lab/Alert";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));

const CDashboard = () => {
  const classes = useStyles();
  const history = useHistory();
  const [userData, setUserdata] = useState({});

  const callDashboardPage = async () => {
    try {
      const res = await fetch("/api/company/dashboard", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      const data = await res.json();
      console.log(data);
      setUserdata(data);
      if (!res.status === 200 || res.status === 401) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (err) {
      console.log(err);
      history.push("/");
    }
  };

  useEffect(() => {
    callDashboardPage();
    console.log(userData);
  }, [callDashboardPage, userData]);

  return (
    <Container maxWidth="lg">
      <Box my={2} bgcolor="background.paper">
        <div className={classes.root}>
          <Alert variant="filled" severity="info">
            These Students are eligible in your company for taking interview.
          </Alert>
        </div>
      </Box>

      <StudentList data={userData} />
    </Container>
  );
};

export default CDashboard;
