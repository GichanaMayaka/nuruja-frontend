import React from "react";
import Typography from "@mui/material/Typography";
import { Button, Stack, TextField } from "@mui/material";
import { fetchData, postData } from "./Utils";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";

const BookForm = ({ action, apiEndpoint }) => {
  const [title, setTitle] = React.useState("");
  const [author, setAuthor] = React.useState("");
  const [dateOfPublication, setDateOfPublication] = React.useState("");
  const [isbn, setIsbn] = React.useState("");
  const [rentFee, setRentFee] = React.useState(1000);
  const [rentStatus, setRentStatus] = React.useState("not-rented");
  const [latePenaltyFee, setLatePenaltyFee] = React.useState(250);
  const [endpoint, setEndpoint] = React.useState(apiEndpoint);
  const [submitStatus, setSubmitStatus] = React.useState(false);
  const [requestFailed, setRequestFailed] = React.useState(false);
  const navigate = useNavigate();

  let submitMethod;
  let formTitle;

  if (action.toLowerCase().includes("edit")) {
    submitMethod = "PUT";
    formTitle = "Edit a Book";

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

  function handleBookFormSubmit(event) {
    event.preventDefault();

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
        setRequestFailed(true);
      });

    navigate("/books");
  }

  return (
    <Box
      component="form"
      noValidate
      autoComplete="off"
      onSubmit={handleBookFormSubmit}
    >
      <Typography variant="h3" component="h2">
        {formTitle}
      </Typography>
      <Stack spacing={2} direction="row" sx={{ marginBottom: 4 }}>
        <TextField
          type="text"
          variant="outlined"
          color="secondary"
          label="Title"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          fullWidth
          required
        />
        <TextField
          type="text"
          variant="outlined"
          color="secondary"
          label="Author"
          onChange={(e) => setAuthor(e.target.value)}
          value={author}
          fullWidth
          required
        />
        <TextField
          type="text"
          variant="outlined"
          color="secondary"
          label="ISBN"
          onChange={(e) => setIsbn(e.target.value)}
          value={isbn}
          fullWidth
          required
          sx={{ mb: 4 }}
        />
        <TextField
          type="bool"
          variant="outlined"
          color="secondary"
          label="Rent Status"
          onChange={(e) => setRentStatus(e.target.value)}
          value={rentStatus}
          fullWidth
          required
          disabled
          sx={{ mb: 4 }}
        />
      </Stack>
      <TextField
        type="date"
        variant="outlined"
        color="secondary"
        label="Date of Publication"
        onChange={(e) => setDateOfPublication(e.target.value)}
        value={dateOfPublication}
        fullWidth
        required
        sx={{ mb: 4 }}
      />
      <Stack spacing={2} direction="row" sx={{ marginBottom: 4 }}>
        <TextField
          type="number"
          variant="outlined"
          color="secondary"
          label="Rent Fee"
          onChange={(e) => setRentFee(e.target.value)}
          value={rentFee}
          required
          fullWidth
          sx={{ mb: 4 }}
        />
        <TextField
          type="number"
          variant="outlined"
          color="secondary"
          label="Late Penalty Fee"
          onChange={(e) => setLatePenaltyFee(e.target.value)}
          value={latePenaltyFee}
          required
          fullWidth
          sx={{ mb: 4 }}
        />
      </Stack>
      <Button variant="outlined" color="secondary" type="submit">
        Submit
      </Button>
    </Box>
  );
};

export default BookForm;
