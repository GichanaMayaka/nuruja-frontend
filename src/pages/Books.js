import { Container } from "@mui/material";
import React from "react";
import ResponsiveDrawer from "../components/ResponsiveDrawer";


export const Books = ({ columns, data, url }) => {
  return (
    <Container sx={ { alignContent: "center", marginTop: 3 } }>
      <ResponsiveDrawer columns={ columns } data={ data } url={ url }/>
    </Container>
  );
};
