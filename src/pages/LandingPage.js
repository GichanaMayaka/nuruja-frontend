import React from "react";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/material";
import ResponsiveDrawer from "../components/ResponsiveDrawer";

export const LandingPage = () => {
  return (
    <Container sx={{ display: "flex" }}>
      <ResponsiveDrawer>
        <Typography>
          Welcome to Nuruja (https://github.com/GichanaMayaka/nuruja)
        </Typography>
      </ResponsiveDrawer>
    </Container>
  );
};
