import React from "react";
import Typography from "@mui/material/Typography";
import { Button, MenuItem, Stack, TextField } from "@mui/material";
import { fetchData, postData } from "./utils";
import { useLocation, useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { bookSchema } from "./validationSchemas";

const BookForm = ({ action, apiEndpoint }) => {
  const [title, setTitle] = React.useState("");
  const [author, setAuthor] = React.useState("");
  const [dateOfPublication, setDateOfPublication] = React.useState("");
  const [isbn, setIsbn] = React.useState(0);
  const [rentFee, setRentFee] = React.useState(1000);
  const [rentStatus, setRentStatus] = React.useState("not-rented");
  const [latePenaltyFee, setLatePenaltyFee] = React.useState(250);
  const [endpoint, setEndpoint] = React.useState(apiEndpoint);
  const [submitStatus, setSubmitStatus] = React.useState(false);
  const [requestFailed, setRequestFailed] = React.useState(false);
  const location = useLocation();

  const navigation = useNavigate();

  let submitMethod;
  let formTitle;

  if (action.toLowerCase().includes("edit")) {
    submitMethod = "PUT";
    formTitle = `Editing ${location.state.title} by ${location.state.author}`;

    React.useEffect(() => {
      fetchData(apiEndpoint)
        .then((response) => {
          setRequestFailed(false);
          setTitle(response.title);
          setAuthor(response.author);
          setIsbn(response.isbn);
          setRentStatus(response.status);
          setDateOfPublication(
            new Date(response.date_of_publication).toISOString().slice(0, 10)
          );
          setRentFee(response.rent_fee);
          setLatePenaltyFee(response.late_penalty_fee);
        })
        .catch((error) => {
          setRequestFailed(true);
        });
    }, []);
  } else {
    submitMethod = "POST";
    formTitle = "Add a Book";
  }

  function handleBookFormSubmit(formValues) {
    const payload = {
      title: title,
      author: author,
      isbn: isbn,
      date_of_publication: new Date(dateOfPublication).toISOString(),
      status: rentStatus,
      rent_fee: rentFee,
      late_penalty_fee: latePenaltyFee,
    };

    postData(endpoint, payload, submitMethod)
      .then((r) => {
        setSubmitStatus(true);
      })
      .catch((error) => {
        if (error.status === 404) {
          navigation("/404");
        }
      });

    navigation("/books");
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(bookSchema) });

  return (
    <Box
      component="form"
      autoComplete="off"
      onSubmit={handleSubmit(handleBookFormSubmit)}
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
          label="Title"
          fullWidth
          value={title}
          {...register("title", {
            onChange: (e) => setTitle(e.target.value),
          })}
          error={!!errors.title}
          helperText={errors.title?.message}
        />
        <TextField
          type="text"
          variant="outlined"
          color="secondary"
          label="Author"
          fullWidth
          value={author}
          {...register("author", {
            onChange: (e) => setAuthor(e.target.value),
          })}
          error={!!errors.author}
          helperText={errors.author?.message}
        />
        <TextField
          type="number"
          variant="outlined"
          color="secondary"
          label="ISBN"
          fullWidth
          sx={{ mb: 4 }}
          value={isbn}
          {...register("isbn", {
            valueAsNumber: true,
            onChange: (e) => setIsbn(e.target.value),
          })}
          error={!!errors.isbn}
          helperText={errors.isbn?.message}
        />
        <TextField
          select
          fullWidth
          variant="outlined"
          color="secondary"
          label="Rent Status"
          defaultValue="not-rented"
          sx={{ mb: 4 }}
          {...register("rentStatus", {
            onChange: (e) => setRentStatus(e.target.value),
            required: "Rent Status is Required",
          })}
          error={!!errors.rentStatus}
          helperText={errors.rentStatus?.message}
        >
          {[
            { value: "not-rented", label: "Not Rented" },
            { value: "rented", label: "Rented" },
          ].map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </Stack>
      <TextField
        type="date"
        variant="outlined"
        color="secondary"
        label="Date of Publication"
        fullWidth
        focused
        sx={{ mb: 4 }}
        value={dateOfPublication}
        {...register("dateOfPublication", {
          valueAsDate: true,
          onChange: (e) => setDateOfPublication(e.target.value),
        })}
        error={!!errors.dateOfPublication}
        helperText={errors.dateOfPublication?.message}
      />
      <Stack spacing={2} direction="row" sx={{ marginBottom: 4 }}>
        <TextField
          type="number"
          variant="outlined"
          color="secondary"
          label="Rent Fee"
          fullWidth
          sx={{ mb: 4 }}
          value={rentFee}
          {...register("rentFee", {
            valueAsNumber: true,
            onChange: (e) => setRentFee(e.target.value),
          })}
          error={!!errors.rentFee}
          helperText={errors.rentFee?.message}
        />
        <TextField
          type="number"
          variant="outlined"
          color="secondary"
          label="Late Penalty Fee"
          fullWidth
          sx={{ mb: 4 }}
          value={latePenaltyFee}
          {...register("latePenaltyFee", {
            valueAsNumber: true,
            onChange: (e) => setLatePenaltyFee(e.target.value),
          })}
          error={!!errors.latePenaltyFee}
          helperText={errors.latePenaltyFee?.message}
        />
      </Stack>
      <Button variant="outlined" color="secondary" type="submit">
        Submit
      </Button>
    </Box>
  );
};

export default BookForm;
