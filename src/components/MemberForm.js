import React from "react";
import Typography from "@mui/material/Typography";
import { Button, Stack, TextField } from "@mui/material";
import { postData } from "./utils";
import { useLocation, useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { membersSchema } from "./validationSchemas";
import FormTextInput from "./form-components/FormTextInput";
import useFetchValues from "./hooks/useFetchValues";

function MemberForm({ action, apiEndpoint }) {
  const [endpoint] = React.useState(apiEndpoint);
  const [submitMethod, data] = useFetchValues({ action, endpoint });

  const navigation = useNavigate();
  const location = useLocation();

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    reset,
  } = useForm({
    resolver: zodResolver(membersSchema),
  });

  React.useEffect(() => {
    reset(data);
  }, [reset, data]);

  function handleMemberFormSubmit(formValues) {
    const payload = {
      username: formValues.username,
      email: formValues.email,
      phone_number: formValues.phoneNumber,
      address: formValues.address,
    };

    postData(endpoint, payload, submitMethod)
      .then((r) => {
        alert(`Member ${action}ed successfully`);
      })
      .catch((error) => {
        if (error.status === 404) {
          navigation("/404");
        }
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
        {action.toLowerCase().includes("edit")
          ? `Editing ${location.state.name}`
          : "Add a Member"}
      </Typography>
      <Stack spacing={2} direction="row" sx={{ marginBottom: 4 }}>
        <FormTextInput
          name={"username"}
          label={"Name"}
          inputType={"text"}
          errors={errors.username}
          control={control}
        />
        <FormTextInput
          name={"email"}
          label={"E-Mail"}
          inputType={"text"}
          errors={errors.email}
          control={control}
        />
        <TextField
          type="number"
          variant="outlined"
          color="secondary"
          label="Phone Number"
          fullWidth
          sx={{ mb: 4 }}
          {...register("phoneNumber", {
            valueAsNumber: true,
          })}
          focused={action.toLowerCase().includes("edit")}
          error={!!errors.phoneNumber}
          helperText={errors.phoneNumber?.message}
        />
        <FormTextInput
          name={"address"}
          label={"Address"}
          inputType={"text"}
          errors={errors.address}
          control={control}
        />
      </Stack>
      <Button variant="outlined" color="secondary" type="submit">
        Submit
      </Button>
    </Box>
  );
}

export default MemberForm;
