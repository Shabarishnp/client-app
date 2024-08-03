// import React from "react";
import { Link, Outlet } from "react-router-dom";
import { Container, Button, Box } from "@mui/material";

const Clients = () => {
  return (
    <Container>
      <Box
        sx={{ display: "flex", justifyContent: "space-around", marginTop: 2 }}
      >
        <Button variant="contained" component={Link} to="view">
          View Clients
        </Button>
        <Button variant="contained" component={Link} to="create">
          Create Client
        </Button>
      </Box>
      <Outlet />
    </Container>
  );
};

export default Clients;
