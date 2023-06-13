import React from "react";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/material";
import ResponsiveDrawer from "../components/ResponsiveDrawer";

function LandingPage() {
  return (
    <Container sx={{ display: "flex", marginTop: 3 }}>
      <ResponsiveDrawer>
        <Typography>Welcome to Nuruja.</Typography>
      </ResponsiveDrawer>
    </Container>
  );
}

export default LandingPage;
