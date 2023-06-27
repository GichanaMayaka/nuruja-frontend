import React from "react";
import Typography from "@mui/material/Typography";
import { Button, Stack, TextField } from "@mui/material";
import { postData } from "./utils";
import { useLocation, useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { bookSchema } from "./validationSchemas";
import FormTextInput from "./form-components/FormTextInput";
import FormDateInput from "./form-components/FormDateInput";
import FormDropDownInput from "./form-components/FormDropDownInput";
import { rentStatusOptions } from "./scaffold";
import useFetchValues from "./hooks/useFetchValues";

const BookForm = ({ action, apiEndpoint }) => {
  const [endpoint] = React.useState(apiEndpoint);
  const [submitMethod, data] = useFetchValues({ action, endpoint });

  const location = useLocation();
  const navigation = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    control,
  } = useForm({ resolver: zodResolver(bookSchema), mode: "onChange" });

  React.useEffect(() => {
    reset(data);
  }, [reset, data]);

  function handleBookFormSubmit(formValues) {
    const payload = {
      title: formValues.title,
      author: formValues.author,
      isbn: formValues.isbn,
      date_of_publication: new Date(formValues.dateOfPublication).toISOString(),
      status: formValues.rentStatus,
      rent_fee: formValues.rentFee,
      late_penalty_fee: formValues.latePenaltyFee,
    };

    postData(endpoint, payload, submitMethod)
      .then((response) => {
        alert(`Book ${action}ed successfully`);
      })
      .catch((error) => {
        if (error.status === 404) {
          navigation("/404");
        }
      });

    navigation("/books");
  }

  return (
    <Box
      component="form"
      autoComplete="off"
      onSubmit={handleSubmit(handleBookFormSubmit)}
      noValidate
    >
      <Typography variant="h6" mb={1}>
        {action.toLowerCase().includes("edit")
          ? `Editing ${location.state.title} by ${location.state.author}`
          : "Add a Book"}
      </Typography>
      <Stack spacing={2} direction="row">
        <FormTextInput
          inputType={"text"}
          name={"title"}
          errors={errors.title}
          control={control}
          label={"Title"}
        />
        <FormTextInput
          inputType={"text"}
          name={"author"}
          label={"Author"}
          errors={errors.author}
          control={control}
        />
        <TextField
          type="number"
          variant="outlined"
          color="secondary"
          label="ISBN"
          fullWidth
          sx={{ mb: 4 }}
          {...register("isbn", {
            valueAsNumber: true,
          })}
          focused={action.toLowerCase().includes("edit")}
          error={!!errors.isbn}
          helperText={errors.isbn?.message}
        />
        <FormDropDownInput
          name={"rentStatus"}
          label={"Rent Status"}
          dropDownOptions={rentStatusOptions}
          defaultValue={"not-rented"}
          errors={errors.rentStatus}
          control={control}
        />
      </Stack>
      <FormDateInput
        label={"Date pf Publication"}
        control={control}
        errors={errors.dateOfPublication}
        name={"dateOfPublication"}
        rules={{ valueAsDate: true }}
      />
      <Stack spacing={2} direction="row" sx={{ marginBottom: 4 }}>
        <FormTextInput
          inputType="number"
          name={"rentFee"}
          errors={errors.rentFee}
          label={"Rent Fee"}
          control={control}
          rules={{ valueAsNumber: true }}
        />
        <FormTextInput
          inputType="number"
          name={"latePenaltyFee"}
          label={"Late Penalty Fee"}
          rules={{ valueAsNumber: true }}
          errors={errors.latePenaltyFee}
          control={control}
        />
      </Stack>
      <Button variant="outlined" color="secondary" type="submit">
        Submit
      </Button>
    </Box>
  );
};

export default BookForm;
