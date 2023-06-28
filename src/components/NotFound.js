import React from "react";
import BasePage from "./BasePage";
import { Button } from "@mui/material";
import { AlertRenderer } from "./utils";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <BasePage>
      <AlertRenderer
        title={"404: Not Found"}
        message={"The requested resource could not be located"}
        severity={"info"}
        variant={"outlined"}
      />
      <Button size="large" variant="filled" color="primary">
        <Link to={"/members/new"}>Add a new Member</Link>
      </Button>
      <Button size="large" variant="filled" color="primary">
        <Link to={"/books/new"}>Add a new Book</Link>
      </Button>
    </BasePage>
  );
}

export default NotFound;
