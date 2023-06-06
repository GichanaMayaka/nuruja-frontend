import { Container } from "@mui/material";
import React from "react";
import ResponsiveDrawer from "../components/ResponsiveDrawer";
import AddOrEditBookForm from "../components/AddOrEditBookForm";

export const BooksEdit = ({ columns, data, url }) => {
  return (
    <Container sx={{ alignContent: "center", marginTop: 3 }}>
      <ResponsiveDrawer>
        <AddOrEditBookForm />
      </ResponsiveDrawer>
    </Container>
  );
};
