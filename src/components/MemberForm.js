import React from "react";
import Typography from "@mui/material/Typography";
import { Button, Stack, TextField } from "@mui/material";
import { fetchData, postData } from "./utils";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { membersSchema } from "./validationSchemas";

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

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(membersSchema),
  });

  function handleMemberFormSubmit(formValues) {
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
    <Box
      component="form"
      autoComplete="off"
      onSubmit={handleSubmit(handleMemberFormSubmit)}
      noValidate
    >
      <Typography variant="h6" mb={1}>
        {formTitle}
      </Typography>
      <Stack spacing={2} direction="row" sx={{ marginBottom: 4 }}>
        <TextField
          type="text"
          variant="outlined"
          color="secondary"
          label="Name"
          value={username}
          fullWidth
          {...register("username", {
            onChange: (e) => setUsername(e.target.value),
          })}
          error={!!errors.username}
          helperText={errors.username?.message}
        />
        <TextField
          type="text"
          variant="outlined"
          color="secondary"
          label="Email"
          value={email}
          fullWidth
          {...register("email", {
            onChange: (e) => setEmail(e.target.value),
          })}
          error={!!errors.email}
          helperText={errors.email?.message}
        />
        <TextField
          type="number"
          variant="outlined"
          color="secondary"
          label="Phone Number"
          value={phoneNumber}
          fullWidth
          sx={{ mb: 4 }}
          {...register("phoneNumber", {
            valueAsNumber: true,
            onChange: (e) => setPhoneNumber(e.target.value),
          })}
          error={!!errors.phoneNumber}
          helperText={errors.phoneNumber?.message}
        />
        <TextField
          type="text"
          variant="outlined"
          color="secondary"
          label="Address"
          value={address}
          fullWidth
          sx={{ mb: 4 }}
          {...register("address", {
            onChange: (e) => setAddress(e.target.value),
          })}
          error={!!errors.address}
          helperText={errors.address?.message}
        />
      </Stack>
      <Button variant="outlined" color="secondary" type="submit">
        Submit
      </Button>
    </Box>
  );
}

export default MemberForm;
