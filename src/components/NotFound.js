import React from "react";
import ResponsiveDrawer from "./ResponsiveDrawer";
import { Container } from "@mui/material";
import { AlertRenderer } from "./Utils";

function NotFound() {
  return (
    <Container sx={{ display: "flex", marginTop: 3 }}>
      <ResponsiveDrawer>
        <AlertRenderer
          title={"Not Found"}
          message={"The requested resource could not be located"}
          severity={"info"}
          variant={"filled"}
        />
      </ResponsiveDrawer>
    </Container>
  );
}

export default NotFound;
