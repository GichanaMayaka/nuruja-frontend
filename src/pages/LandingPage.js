import React from "react";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/material";
import ResponsiveDrawer from "../components/ResponsiveDrawer";
import Landing from "../components/Landing";

export const LandingPage = () => {
  return (
    <Container sx={{ display: "flex" }}>
      <ResponsiveDrawer>
        {/*<Landing />*/}
        <Typography>
          Welcome to Nuruja.
        </Typography>
      </ResponsiveDrawer>
    </Container>
  );
};
