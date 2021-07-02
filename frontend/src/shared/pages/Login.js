import React from "react";
import { Link } from "react-router-dom";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";

export default function Login() {
  return (
    // <Container maxWidth="sm">
    <div style={{display: 'Flex', flexDirection: 'column', justifyContent: 'center', alignItem: 'Center', width: '100%', height: '50vh'}}>
      <Box style={{textAlign:"center"}}>
        <Button variant="contained" style={{padding: "10px 25px"}} color="primary">
          <Link
            to="/student/login"
            style={{ color: "#FFF", textDecoration: "none" }}
          >
            Login as Student
          </Link>
        </Button>
        <br />
        <br />
        <Button variant="contained" style={{padding: "10px 25px"}} color="primary">
          <Link
            to="/company/login"
            style={{ color: "#FFF", textDecoration: "none" }}
          >
            Login as Company
          </Link>
        </Button>
      </Box>
      </div>
    //  </Container>
  );
}
