import { Container } from "@mui/material";
import React from "react";
import ResponsiveDrawer from "../components/ResponsiveDrawer";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import { AppBarAndDrawer } from "../components/AppBarAndDrawer";
import Toolbar from "@mui/material/Toolbar";
import DataDisplay from "../components/DataDisplay";
import EditBookForm from "../components/EditBookForm";

const drawerWidth = 240;

export const BooksEdit = ({ columns, data, url }) => {
  return (
    <Container sx={ { alignContent: "center", marginTop: 3 } }>
      <Box sx={ { display: "flex" } }>
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
          <EditBookForm/>
        </Box>
      </Box>
    </Container>
  );
};
