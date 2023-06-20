import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import * as React from "react";
import { AppBarAndDrawer } from "./AppBarAndDrawer";
import { Container } from "@mui/material";

const drawerWidth = 190;

function ResponsiveDrawer({ children }) {
  return (
    <>
      <AppBarAndDrawer drawerWidth={drawerWidth} />
      <Box>
        <Toolbar />
        {children}
      </Box>
    </>
  );
}

export default ResponsiveDrawer;
