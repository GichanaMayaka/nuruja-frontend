import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import { Button, Stack, TextField } from "@mui/material";
import { postData } from "./Utils";
import { useNavigate } from "react-router-dom";

function MemberForm({ action, apiEndpoint }) {
  const [username, setUsername] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [endpoint, setEndpoint] = useState(apiEndpoint);
  const [submitStatus, setSubmitStatus] = useState(false);
  const [responseDetails, setResponseDetails] = useState("");
  const navigate = useNavigate()

  let submitMethod;
  let formTitle;

  if (action.toLowerCase().includes("edit")) {
    submitMethod = "PUT";
    formTitle = "Edit a Member";
  } else {
    submitMethod = "POST";
    formTitle = "Add a Member";
  }

  function handleMemberFormSubmit(event) {
    event.preventDefault();

    const payload = {
      username: username,
      email: email,
      phone_number: phoneNumber,
      address: address,
    };

    postData(endpoint, payload, submitMethod).then((r) => {
      if (r.status === 200 || r.status === 201) {
        setSubmitStatus(true);
        setResponseDetails(r.details);
      }
    });

    navigate(-1)
  }

  return (
    <>
      <Typography variant="h4" component="h2">
        {formTitle}
      </Typography>
      <form onSubmit={handleMemberFormSubmit}>
        <Stack spacing={2} direction="row" sx={{ marginBottom: 4 }}>
          <TextField
            type="text"
            variant="outlined"
            color="secondary"
            label="Username"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            fullWidth
            required
          />
          <TextField
            type="text"
            variant="outlined"
            color="secondary"
            label="Email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            fullWidth
            required
          />
          <TextField
            type="text"
            variant="outlined"
            color="secondary"
            label="Phone Number"
            onChange={(e) => setPhoneNumber(e.target.value)}
            value={phoneNumber}
            fullWidth
            required
            sx={{ mb: 4 }}
          />
          <TextField
            type="text"
            variant="outlined"
            color="secondary"
            label="Address"
            onChange={(e) => setAddress(e.target.value)}
            value={address}
            fullWidth
            required
            sx={{ mb: 4 }}
          />
        </Stack>
        <Button variant="outlined" color="secondary" type="submit">
          Submit
        </Button>
      </form>
    </>
  );
}

export default MemberForm;
