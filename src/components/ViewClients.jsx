import {
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Grid,
  Button,
  MenuItem,
  TextField,
  Select,
  InputAdornment,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const ViewClients = ({ clients }) => {
  const navigate = useNavigate();

  return (
    <div style={{ padding: 20 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Clients
      </Typography>
      <Grid container spacing={2} alignItems="center">
        <Grid item>
          <Button
            variant="contained"
            color="success"
            onClick={() => navigate("/clients/create")}
          >
            Add Client
          </Button>
        </Grid>
        <Grid item>
          <Select
            displayEmpty
            inputProps={{ "aria-label": "Filter by status" }}
            size="small"
            style={{ minWidth: 120 }}
          >
            <MenuItem value="">
              <em>All Statuses</em>
            </MenuItem>
            <MenuItem value="Active">Active</MenuItem>
            <MenuItem value="Inactive">Inactive</MenuItem>
            <MenuItem value="Pending">Pending</MenuItem>
          </Select>
        </Grid>
        <Grid item xs />
        <Grid item>
          <TextField
            size="small"
            label="Search"
            InputProps={{
              endAdornment: <InputAdornment position="end"></InputAdornment>,
            }}
          />
        </Grid>
      </Grid>
      <TableContainer component={Paper} style={{ marginTop: 20 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell style={{ color: "#1976d2" }}>Name</TableCell>
              <TableCell style={{ color: "#1976d2" }}>External ID</TableCell>
              <TableCell style={{ color: "#1976d2" }}>Gender</TableCell>
              <TableCell style={{ color: "rgba(0, 0, 0, 0.87)" }}>
                Mobile No.
              </TableCell>
              <TableCell style={{ color: "rgba(0, 0, 0, 0.87)" }}>
                Credit Score
              </TableCell>
              <TableCell style={{ color: "#1976d2" }}>Status</TableCell>
              <TableCell style={{ color: "#1976d2" }}>Branch</TableCell>
              <TableCell style={{ color: "#1976d2" }}>Staff</TableCell>
              <TableCell style={{ color: "rgba(0, 0, 0, 0.87)" }}>
                Action
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {clients.map((client, index) => (
              <TableRow key={index}>
                <TableCell style={{ color: "#1976d2" }}>
                  {client.firstName} {client.lastName}
                </TableCell>
                <TableCell style={{ color: "#1976d2" }}>
                  {client.externalId}
                </TableCell>
                <TableCell style={{ color: "#1976d2" }}>
                  {client.gender}
                </TableCell>
                <TableCell style={{ color: "rgba(0, 0, 0, 0.87)" }}>
                  {client.mobile}
                </TableCell>
                <TableCell style={{ color: "#1976d2" }}>
                  {client.status}
                </TableCell>
                <TableCell style={{ color: "rgba(0, 0, 0, 0.87)" }}>
                  {client.creditScore}
                </TableCell>
                <TableCell style={{ color: "#1976d2" }}>
                  {client.branch}
                </TableCell>
                <TableCell style={{ color: "#1976d2" }}>
                  {client.staff}
                </TableCell>
                <TableCell style={{ color: "rgba(0, 0, 0, 0.87)" }}>
                  Actions Here
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Grid container justifyContent="flex-start" style={{ marginTop: 20 }}>
        <Typography variant="body2">Page 1 of 1</Typography>
      </Grid>
    </div>
  );
};

export default ViewClients;
