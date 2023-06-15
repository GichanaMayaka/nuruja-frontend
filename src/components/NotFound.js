import React from "react";
import ResponsiveDrawer from "./ResponsiveDrawer";
import { Button, Container } from "@mui/material";
import { AlertRenderer } from "./utils";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <Container sx={{ display: "flex", marginTop: 3 }}>
      <ResponsiveDrawer>
        <AlertRenderer
          title={"404: Not Found"}
          message={"The requested resource could not be located"}
          severity={"info"}
          variant={"outlined"}
        />
        <Button size="large" variant="text" color="primary">
          <Link to={"/members/new"}>Add a new Member</Link>
        </Button>
        <Button size="large" variant="text" color="primary">
          <Link to={"/books/new"}>Add a new Book</Link>
        </Button>
      </ResponsiveDrawer>
    </Container>
  );
}

export default NotFound;
