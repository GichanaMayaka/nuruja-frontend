import * as React from "react";
import { useState } from "react";
import { Button, Stack, TextField } from "@mui/material";
import Typography from "@mui/material/Typography";

export default function AddOrEditBookForm() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [dateOfPublication, setDateOfPublication] = useState("");
  const [isbn, setIsbn] = useState("");
  const [rentFee, setRentFee] = useState(100);

  function handleSubmit(event) {
    event.preventDefault();
    console.log(title, author, dateOfPublication, isbn, rentFee);
  }

  return (
    <>
      <Typography variant="h4" component="h2">
        Edit Book Form
      </Typography>
      <form onSubmit={handleSubmit}>
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
        <Button variant="outlined" color="secondary" type="submit">
          Confirm Edit
        </Button>
      </form>
    </>
  );
}
