import { Container } from "@mui/material";
import React from "react";
import ResponsiveDrawer from "../components/ResponsiveDrawer";
import DataDisplay from "../components/DataDisplay";


export const Books = ({ columns, data, url }) => {
  return (
    <Container sx={ { alignContent: "center", marginTop: 3 } }>
      <ResponsiveDrawer>
        <DataDisplay columns={ columns } data={ data } url={ url }/>
      </ResponsiveDrawer>
    </Container>
  );
};
