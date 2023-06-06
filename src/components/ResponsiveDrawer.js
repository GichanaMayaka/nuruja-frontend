import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import * as React from "react";
import { AppBarAndDrawer } from "./AppBarAndDrawer";

const drawerWidth = 240;

function ResponsiveDrawer({ children }) {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBarAndDrawer drawerWidth={drawerWidth} />
      <Box
        sx={{
          flexGrow: 1,
          p: 1,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
}

export default ResponsiveDrawer;
