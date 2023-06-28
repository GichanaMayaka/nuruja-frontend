import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import * as React from "react";
import { AppBarAndDrawer } from "./AppBarAndDrawer";
import { Container, useMediaQuery } from "@mui/material";

function BasePage({ children }) {
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const drawerWidth = isSmallScreen ? 190 : 240;

  return (
    <Container
      sx={{ display: "block", marginTop: 3 }}
      disableGutters
      maxWidth="xl"
    >
      <AppBarAndDrawer drawerWidth={drawerWidth} />
      <Box
        component="main"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { xs: "5px", sm: `${drawerWidth + 5}px` },
        }}
      >
        <Toolbar disableGutters />
        {children}
      </Box>
    </Container>
  );
}

export default BasePage;
