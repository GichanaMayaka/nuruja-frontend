import * as React from "react";
import BookForm from "../components/BookForm";
import { Container } from "@mui/material";
import ResponsiveDrawer from "../components/ResponsiveDrawer";

export default function AddBook({ api }) {
  const action = "add";
  const path = `${api}books/new`;

  return (
    <Container sx={{ alignContent: "center", marginTop: 3 }}>
      <ResponsiveDrawer>
        <BookForm action={action} apiEndpoint={path} />
      </ResponsiveDrawer>
    </Container>
  );
}
