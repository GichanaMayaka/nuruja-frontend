import React from "react";
import Typography from "@mui/material/Typography";
import { Button, Stack, TextField } from "@mui/material";
import { fetchData, postData } from "./Utils";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";

function MemberForm({ action, apiEndpoint }) {
  const [username, setUsername] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [endpoint] = React.useState(apiEndpoint);
  const [requestFailed, setRequestFailed] = React.useState(false);
  const navigation = useNavigate();

  let submitMethod;
  let formTitle;

  if (action.toLowerCase().includes("edit")) {
    submitMethod = "PUT";
    formTitle = "Edit a Member";

    React.useEffect(() => {
      fetchData(endpoint)
        .then((r) => {
          setUsername(r.username);
          setEmail(r.email);
          setPhoneNumber(r.phone_number);
          setAddress(r.address);
        })
        .catch((error) => {
          if (error.status === 404) {
            navigation("/404");
          } else {
            setRequestFailed(true);
          }
        });
    }, []);
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

    postData(endpoint, payload, submitMethod)
      .then((r) => {
        console.log(r.details);
      })
      .catch((error) => {
        setRequestFailed(true);
      });

    navigation("/members");
  }

  return (
    <Box component="form" autoComplete="off" onSubmit={handleMemberFormSubmit}>
      <Typography variant="h4" component="h2">
        {formTitle}
      </Typography>
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
    </Box>
  );
}

export default MemberForm;
