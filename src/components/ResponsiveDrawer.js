import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import * as React from "react";
import { AppBarAndDrawer } from "./AppBarAndDrawer";
import { Container } from "@mui/material";

const drawerWidth = 240;

function ResponsiveDrawer({ children }) {
  return (
    <Container sx={{ display: "inline-block" }}>
      <AppBarAndDrawer drawerWidth={drawerWidth} />
      <Box>
        <Toolbar />
        {children}
      </Box>
    </Container>
  );
}

export default ResponsiveDrawer;
