import React from "react";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/material";
import ResponsiveDrawer from "../components/ResponsiveDrawer";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <Container sx={{ display: "flex", marginTop: 3 }}>
      <ResponsiveDrawer>
        <Typography variant="h5">
          Welcome to{" "}
          <Link to={"https://github.com/GichanaMayaka/nuruja"}>Nuruja</Link>
        </Typography>
      </ResponsiveDrawer>
    </Container>
  );
}

export default LandingPage;
