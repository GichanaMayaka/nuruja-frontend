import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import { Button, Stack, TextField } from "@mui/material";
import { postData } from "./utils";

const BookForm = ({ action, apiEndpoint }) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [dateOfPublication, setDateOfPublication] = useState("");
  const [isbn, setIsbn] = useState("");
  const [rentFee, setRentFee] = useState(1000);
  const [rentStatus, setRentStatus] = useState("not-rented");
  const [latePenaltyFee, setLatePenaltyFee] = useState(250);
  const [endpoint, setEndpoint] = useState(apiEndpoint);
  let submitMethod;
  let formTitle;

  if (action.toLowerCase().includes("edit")) {
    submitMethod = "PUT";
    formTitle = "Edit a Book";
  } else {
    submitMethod = "POST";
    formTitle = "Add a Book";
  }

  function handleAddBookSubmit(event) {
    event.preventDefault();

    const payload = {
      title: title,
      author: author,
      isbn: isbn,
      date_of_publication: `${dateOfPublication}T00:00:00`,
      status: rentStatus,
      rent_fee: rentFee,
      late_penalty_fee: latePenaltyFee,
    };

    postData(endpoint, payload, submitMethod).then((r) => {
      console.log(r.details);
    });
  }

  return (
    <>
      <Typography variant="h4" component="h2">
        {formTitle}
      </Typography>
      <form onSubmit={handleAddBookSubmit}>
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
      </form>
    </>
  );
};

export default BookForm;
