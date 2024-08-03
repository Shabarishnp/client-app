import { useState } from "react";
import {
  Button,
  TextField,
  MenuItem,
  Select,
  FormControl,
  Grid,
  Typography,
  Paper,
  Box,
  InputAdornment,
} from "@mui/material";

const CreateClient = ({ addClient }) => {
  const [formData, setFormData] = useState({
    branch: "",
    externalId: "",
    title: "",
    firstName: "",
    lastName: "",
    gender: "",
    maritalStatus: "",
    mobile: "",
    country: "",
    dob: "",
    staff: "",
    email: "",
    profession: "",
    type: "",
    photo: null,
    address: "",
    notes: "",
    submittedOn: "",
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData({
      ...formData,
      [name]: type === "file" ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addClient(formData);
    // Optionally reset form or navigate elsewhere
  };
  const countries = [
    "Afghanistan",
    "Albania",
    "Algeria",
    "Andorra",
    "Angola",
    "Antigua and Barbuda",
    "Argentina",
    "Armenia",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bhutan",
    "Bolivia",
    "Bosnia and Herzegovina",
    "Botswana",
    "Brazil",
    "Brunei",
    "Bulgaria",
    "Burkina Faso",
    "Burundi",
    "Cabo Verde",
    "Cambodia",
    "Cameroon",
    "Canada",
    "Central African Republic",
    "Chad",
    "Chile",
    "China",
    "Colombia",
    "Comoros",
    "Congo, Democratic Republic of the",
    "Congo, Republic of the",
    "Costa Rica",
    "Croatia",
    "Cuba",
    "Cyprus",
    "Czech Republic",
    "Denmark",
    "Djibouti",
    "Dominica",
    "Dominican Republic",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "Equatorial Guinea",
    "Eritrea",
    "Estonia",
    "Eswatini",
    "Ethiopia",
    "Fiji",
    "Finland",
    "France",
    "Gabon",
    "Gambia",
    "Georgia",
    "Germany",
    "Ghana",
    "Greece",
    "Grenada",
    "Guatemala",
    "Guinea",
    "Guinea-Bissau",
    "Guyana",
    "Haiti",
    "Honduras",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iran",
    "Iraq",
    "Ireland",
    "Israel",
    "Italy",
    "Jamaica",
    "Japan",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kiribati",
    "Korea, North",
    "Korea, South",
    "Kosovo",
    "Kuwait",
    "Kyrgyzstan",
    "Laos",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
    "Libya",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "Marshall Islands",
    "Mauritania",
    "Mauritius",
    "Mexico",
    "Micronesia",
    "Moldova",
    "Monaco",
    "Mongolia",
    "Montenegro",
    "Morocco",
    "Mozambique",
    "Myanmar",
    "Namibia",
    "Nauru",
    "Nepal",
    "Netherlands",
    "New Zealand",
    "Nicaragua",
    "Niger",
    "Nigeria",
    "North Macedonia",
    "Norway",
    "Oman",
    "Pakistan",
    "Palau",
    "Panama",
    "Papua New Guinea",
    "Paraguay",
    "Peru",
    "Philippines",
    "Poland",
    "Portugal",
    "Qatar",
    "Romania",
    "Russia",
    "Rwanda",
    "Saint Kitts and Nevis",
    "Saint Lucia",
    "Saint Vincent and the Grenadines",
    "Samoa",
    "San Marino",
    "Sao Tome and Principe",
    "Saudi Arabia",
    "Senegal",
    "Serbia",
    "Seychelles",
    "Sierra Leone",
    "Singapore",
    "Slovakia",
    "Slovenia",
    "Solomon Islands",
    "Somalia",
    "South Africa",
    "South Sudan",
    "Spain",
    "Sri Lanka",
    "Sudan",
    "Suriname",
    "Sweden",
    "Switzerland",
    "Syria",
    "Taiwan",
    "Tajikistan",
    "Tanzania",
    "Thailand",
    "Timor-Leste",
    "Togo",
    "Tonga",
    "Trinidad and Tobago",
    "Tunisia",
    "Turkey",
    "Turkmenistan",
    "Tuvalu",
    "Uganda",
    "Ukraine",
    "United Arab Emirates",
    "United Kingdom",
    "United States",
    "Uruguay",
    "Uzbekistan",
    "Vanuatu",
    "Vatican City",
    "Venezuela",
    "Vietnam",
    "Yemen",
    "Zambia",
    "Zimbabwe",
  ].sort();
  return (
    <div style={{ padding: 5 }}>
      <Box mb={2} display="flex">
        <Typography variant="h5" style={{ flexGrow: 0.01 }}>
          Add Client
        </Typography>
        <Button
          size="small"
          variant="contained"
          style={{ backgroundColor: "white", color: "#000" }}
        >
          Back
        </Button>
      </Box>

      <Paper style={{ padding: 20 }}>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography
                variant="h7"
                component="div"
                fontWeight="bolder"
                gutterBottom
              >
                Branch
              </Typography>
              <FormControl fullWidth variant="outlined">
                <Select
                  sx={{ height: "2.2rem" }}
                  name="branch"
                  value={formData.branch}
                  onChange={handleChange}
                >
                  <MenuItem value="">
                    <em style={{ color: "#aaa" }}>select</em>
                  </MenuItem>
                  <MenuItem value="default">Default</MenuItem>
                  <MenuItem value="sbi">SBI</MenuItem>
                  <MenuItem value="hdfc">HDFC</MenuItem>
                  <MenuItem value="boi">Bank of Israel</MenuItem>
                  <MenuItem value="streaky">Streaky</MenuItem>
                  <MenuItem value="idb">Israel Discount Bank</MenuItem>
                  <MenuItem value="iob">IOB</MenuItem>
                  <MenuItem value="sbi">SBI</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12}>
              <Typography
                variant="h7"
                component="div"
                fontWeight="bold"
                gutterBottom
              >
                External ID
              </Typography>
              <TextField
                fullWidth
                variant="outlined"
                name="externalId"
                value={formData.externalId}
                onChange={handleChange}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    height: 36, // Adjust the height as needed
                  },
                }}
              />
            </Grid>

            <Grid item xs={12}>
              <Typography
                variant="h7"
                component="div"
                fontWeight="bolder"
                gutterBottom
              >
                Title
              </Typography>
              <FormControl fullWidth variant="outlined">
                <Select
                  sx={{ height: "2.2rem" }}
                  value={formData.title}
                  onChange={handleChange}
                  displayEmpty
                  inputProps={{ "aria-label": "select" }}
                  renderValue={(selected) => {
                    if (selected === "") {
                      return <em style={{ color: "#aaa" }}>select</em>;
                    }
                    return selected;
                  }}
                >
                  <MenuItem value="">
                    <em style={{ color: "#aaa" }}>select</em>
                  </MenuItem>
                  <MenuItem value="mr">Mr.</MenuItem>
                  <MenuItem value="mrs">Mrs.</MenuItem>
                  <MenuItem value="ms">Ms.</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12}>
              <Typography
                variant="h7"
                component="div"
                fontWeight="bold"
                gutterBottom
              >
                First Name
              </Typography>
              <TextField
                fullWidth
                variant="outlined"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    height: 36, // Adjust the height as needed
                  },
                }}
              />
            </Grid>

            <Grid item xs={12}>
              <Typography
                variant="h7"
                component="div"
                fontWeight="bold"
                gutterBottom
              >
                Last Name
              </Typography>
              <TextField
                size="small"
                fullWidth
                variant="outlined"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    height: 36, // Adjust the height as needed
                  },
                }}
              />
            </Grid>

            <Grid item xs={12}>
              <Typography
                variant="h7"
                component="div"
                fontWeight="bold"
                gutterBottom
              >
                Gender
              </Typography>
              <FormControl fullWidth variant="outlined">
                <Select
                  sx={{ height: "2.2rem" }}
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                >
                  <MenuItem value="male">Male</MenuItem>
                  <MenuItem value="female">Female</MenuItem>
                  <MenuItem value="other">Other</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12}>
              <Typography
                variant="h7"
                component="div"
                fontWeight="bold"
                gutterBottom
              >
                Marital Status
              </Typography>
              <FormControl fullWidth variant="outlined">
                <Select
                  sx={{ height: "2.2rem" }}
                  size="small"
                  name="maritalStatus"
                  value={formData.maritalStatus}
                  onChange={handleChange}
                >
                  <MenuItem value="" style={{ height: "30px" }}></MenuItem>
                  <MenuItem value="single">Single</MenuItem>
                  <MenuItem value="married">Married</MenuItem>
                  <MenuItem value="divorced">Divorced</MenuItem>
                  <MenuItem value="divorced">Widowed</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12}>
              <Typography
                variant="h7"
                component="div"
                fontWeight="bold"
                gutterBottom
              >
                Mobile
              </Typography>
              <TextField
                sx={{
                  "& .MuiOutlinedInput-root": {
                    height: 36, // Adjust the height as needed
                  },
                }}
                type="number"
                fullWidth
                variant="outlined"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
              />
            </Grid>

            <Grid item xs={12}>
              <Typography
                variant="h7"
                component="div"
                fontWeight="bold"
                gutterBottom
              >
                Country
              </Typography>
              <FormControl fullWidth variant="outlined">
                <Select
                  sx={{ height: "2.2rem" }}
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  // Adjust the width as needed
                >
                  <MenuItem value="" style={{ height: "30px" }}></MenuItem>
                  {countries.map((country) => (
                    <MenuItem key={country} value={country}>
                      {country}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12}>
              <Typography
                variant="h7"
                component="div"
                fontWeight="bold"
                gutterBottom
              >
                Date of Birth
              </Typography>
              <TextField
                sx={{
                  "& .MuiOutlinedInput-root": {
                    height: 36, // Adjust the height as needed
                  },
                  "& input[type='date']::-webkit-calendar-picker-indicator": {
                    display: "none", // Hide the default calendar icon
                  },
                  "& input[type='date']::-webkit-datetime-edit": {
                    color: "transparent", // Hide the date format text
                  },
                }}
                fullWidth
                variant="outlined"
                name="dob"
                type="date"
                value={formData.dob}
                onChange={handleChange}
                InputLabelProps={{ shrink: true }}
                onClick={(event) => {
                  // Ensure the date picker is displayed
                  event.target.showPicker();
                }}
              />
            </Grid>

            <Grid item xs={12}>
              <Typography
                variant="h7"
                component="div"
                fontWeight="bold"
                gutterBottom
              >
                Staff
              </Typography>
              <TextField
                sx={{
                  "& .MuiOutlinedInput-root": {
                    height: 36, // Adjust the height as needed
                  },
                }}
                fullWidth
                variant="outlined"
                name="staff"
                value={formData.staff}
                onChange={handleChange}
              />
            </Grid>

            <Grid item xs={12}>
              <Typography
                variant="h7"
                component="div"
                fontWeight="bold"
                gutterBottom
              >
                Email
              </Typography>
              <TextField
                sx={{
                  "& .MuiOutlinedInput-root": {
                    height: 36, // Adjust the height as needed
                  },
                }}
                fullWidth
                variant="outlined"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </Grid>

            <Grid item xs={12}>
              <Typography
                variant="h7"
                component="div"
                fontWeight="bold"
                gutterBottom
              >
                Profession
              </Typography>
              <TextField
                sx={{
                  "& .MuiOutlinedInput-root": {
                    height: 35, // Adjust the height as needed
                  },
                }}
                fullWidth
                variant="outlined"
                name="profession"
                value={formData.profession}
                onChange={handleChange}
              />
            </Grid>

            <Grid item xs={12}>
              <Typography
                variant="h7"
                component="div"
                fontWeight="bold"
                gutterBottom
              >
                Type
              </Typography>
              <FormControl fullWidth variant="outlined">
                <Select
                  sx={{ height: "2.2rem" }}
                  name="type"
                  value={formData.type}
                  onChange={handleChange}
                >
                  <MenuItem value="type1">Type 1</MenuItem>
                  <MenuItem value="type2">Type 2</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12}>
              <Typography
                variant="h7"
                component="div"
                fontWeight="bolder"
                gutterBottom
              >
                Photo
              </Typography>
              <FormControl variant="outlined" fullWidth>
                <TextField
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      height: 36, // Adjust the height as needed
                    },
                  }}
                  variant="outlined"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <input
                          type="file"
                          name="photo"
                          onChange={handleChange}
                        />
                      </InputAdornment>
                    ),
                    readOnly: true,
                  }}
                />
              </FormControl>
            </Grid>

            <Grid item xs={12}>
              <Typography
                variant="h7"
                component="div"
                fontWeight="bold"
                gutterBottom
              >
                Address
              </Typography>
              <TextField
                size="small"
                fullWidth
                variant="outlined"
                name="address"
                multiline
                rows={1.8}
                value={formData.address}
                onChange={handleChange}
              />
            </Grid>

            <Grid item xs={12}>
              <Typography
                variant="h7"
                component="div"
                fontWeight="bold"
                gutterBottom
              >
                Notes
              </Typography>
              <TextField
                size="small"
                fullWidth
                variant="outlined"
                name="notes"
                multiline
                rows={1.8}
                value={formData.notes}
                onChange={handleChange}
              />
            </Grid>

            <Grid item xs={12}>
              <Typography
                variant="h7"
                component="div"
                fontWeight="bold"
                gutterBottom
              >
                Submitted On
              </Typography>
              <FormControl variant="outlined" fullWidth>
                <TextField
                  size="small"
                  variant="outlined"
                  name="submittedOn"
                  type="date"
                  value={
                    formData.submittedOn ||
                    new Date().toISOString().split("T")[0]
                  }
                  onChange={handleChange}
                  InputLabelProps={{ shrink: true }}
                  InputProps={{
                    sx: {
                      '& input[type="date"]::-webkit-calendar-picker-indicator':
                        {
                          display: "none", // Hide default calendar icon
                        },
                    },
                    onClick: (event) => {
                      event.target.showPicker(); // Show the date picker when clicked
                    },
                  }}
                />
              </FormControl>

              {/* <TextField
                size="small"
                fullWidth
                variant="outlined"
                name="submittedOn"
                type="date"
                value={formData.submittedOn}
                onChange={handleChange}
                InputLabelProps={{ shrink: true }}
              /> */}
            </Grid>

            <Grid item xs={12} display="flex" justifyContent="end">
              <Button variant="contained" color="primary" type="submit">
                Save
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </div>
  );
};

export default CreateClient;
