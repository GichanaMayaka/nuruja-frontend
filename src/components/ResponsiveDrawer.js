import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import * as React from "react";
import { AppBarAndDrawer } from "./AppBarAndDrawer";
import DataDisplay from "./DataDisplay";

const drawerWidth = 240;

function ResponsiveDrawer({ columns, data }) {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBarAndDrawer />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <DataDisplay columns={columns} data={data} />
      </Box>
    </Box>
  );
}

export default ResponsiveDrawer;
