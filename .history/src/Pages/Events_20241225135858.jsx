import { useContext, useState } from "react";
import { GeneralContext } from "../Context/ChurchContext";
import EventCard from "../Components/EventCard";
import {
  Box,
  Typography,
  Grid,
  TextField,
  MenuItem,
  Button,
  Paper,
} from "@mui/material";

const Event = () => {
  const { events } = useContext(GeneralContext);

  const [registration, setRegistration] = useState({
    name: "",
    email: "",
    eventId: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setRegistration((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert(
      `Thank you, ${registration.name}! You registered for Event ID: ${registration.eventId}.`
    );
    setRegistration({ name: "", email: "", eventId: "" });
  };

  return (
    <>
      <div className="relative w-full h-screen mt-20">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900 to-blue-600 opacity-70 z-10"></div>
        <img
          src="/peopleWithTheirLifted.png"
          alt="people with their hands lifted"
          className="w-full h-full object-cover rounded-3xl shadow-lg"
        />
        <div className="absolute inset-0 z-20 flex items-center justify-center">
          <Typography
            variant="h1"
            className="text-white font-extrabold text-5xl sm:text-6xl text-center leading-tight"
          >
            Events & Programs
          </Typography>
        </div>
      </div>

      <Box className="bg-gradient-to-r from-blue-50 via-blue-100 to-blue-200 p-8 sm:p-12">
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          className="font-bold text-indigo-700 mb-6"
        >
          Events & Programs
        </Typography>

        <Grid container spacing={4} className="mb-10">
          {events.map((event) => (
            <Grid item xs={12} sm={6} md={4} key={event.id}>
              <EventCard event={event} />
            </Grid>
          ))}
        </Grid>

        {/* Registration Form */}
        <Paper
          elevation={6}
          className="p-6 sm:max-w-lg mx-auto bg-white rounded-lg shadow-md"
        >
          <Typography
            variant="h5"
            className="font-semibold mb-4 text-center text-gray-800"
          >
            Register for an Event
          </Typography>
          <form onSubmit={handleFormSubmit}>
            <Box mb={3}>
              <TextField
                label="Full Name"
                variant="outlined"
                name="name"
                value={registration.name}
                onChange={handleInputChange}
                fullWidth
                required
                className="text-gray-700"
              />
            </Box>
            <Box mb={3}>
              <TextField
                label="Email Address"
                variant="outlined"
                name="email"
                type="email"
                value={registration.email}
                onChange={handleInputChange}
                fullWidth
                required
                className="text-gray-700"
              />
            </Box>
            <Box mb={3}>
              <TextField
                select
                label="Select Event"
                variant="outlined"
                name="eventId"
                value={registration.eventId}
                onChange={handleInputChange}
                fullWidth
                required
              >
                <MenuItem value="">-- Choose an Event --</MenuItem>
                {events.map((event) => (
                  <MenuItem key={event.id} value={event.id}>
                    {event.title}
                  </MenuItem>
                ))}
              </TextField>
            </Box>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-lg transition ease-in-out"
            >
              Register
            </Button>
          </form>
        </Paper>
      </Box>
    </>
  );
};

export default Event;
