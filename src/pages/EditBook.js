import { Container } from "@mui/material";
import React from "react";
import ResponsiveDrawer from "../components/ResponsiveDrawer";
import BookForm from "../components/BookForm";
import { useParams } from "react-router-dom";

function EditBook({ api }) {
  const action = "edit";
  const { id } = useParams();
  const path = `${api}books/${id}`;

  return (
    <Container sx={{ alignContent: "center", marginTop: 3 }}>
      <ResponsiveDrawer>
        <BookForm action={action} apiEndpoint={path} />
      </ResponsiveDrawer>
    </Container>
  );
}

export default EditBook;
