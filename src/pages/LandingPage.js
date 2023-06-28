import React from "react";
import Typography from "@mui/material/Typography";
import BasePage from "../components/BasePage";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <BasePage>
      <Typography variant="h5">
        Welcome to{" "}
        <Link to={"https://github.com/GichanaMayaka/nuruja"} target="#">
          Nuruja
        </Link>
      </Typography>
    </BasePage>
  );
}

export default LandingPage;
