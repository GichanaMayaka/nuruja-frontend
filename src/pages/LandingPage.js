import React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import { AppBarAndDrawer } from "../components/AppBarAndDrawer";
import Toolbar from "@mui/material/Toolbar";
import DataDisplay from "../components/DataDisplay";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/material";

const drawerWidth = 240;

export const LandingPage = ({ columns, data }) => {
  return (
    <Container sx={ { display: "flex" } }>
      <CssBaseline/>
      <AppBarAndDrawer/>
      <Box
        component="main"
        sx={ {
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${ drawerWidth }px)` },
        } }
      >
        <Toolbar/>
        <Typography>Welcome to Nuruja (https://github.com/GichanaMayaka/nuruja)</Typography>
      </Box>
    </Container>
  );
};
