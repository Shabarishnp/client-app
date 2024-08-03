import { useState } from "react";
// import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Clients from "./components/Clients";
import ViewClients from "./components/ViewClients";
import CreateClient from "./components/CreateClient";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";

function App() {
  const [clients, setClients] = useState([]);

  const addClient = (clientData) => {
    setClients([...clients, clientData]);
  };
  // const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
              React Project
            </Typography>
            <Button color="inherit" component={Link} to="/clients">
              Clients
            </Button>
          </Toolbar>
        </AppBar>
        <Routes>
          <Route path="/clients" element={<Clients />}>
            <Route path="view" element={<ViewClients clients={clients} />} />
            <Route
              path="create"
              element={<CreateClient addClient={addClient} />}
            />
          </Route>
          {/* <Route path="/" element={<h1>Welcome to the Home Page</h1>} />
          <Route
            path="/clients"
            element={<Clients clients={clients} addClient={addClient} />}
          />
          <Route
            path="/view-clients"
            element={<ViewClients clients={clients} />}
          />
          <Route
            path="/create"
            element={<CreateClient addClient={addClient} />}
          /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
