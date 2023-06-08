import { Container } from "@mui/material";
import React from "react";
import ResponsiveDrawer from "../components/ResponsiveDrawer";
import DataDisplay from "../components/DataDisplay";

export const Books = ({ columns, data, url, apiEndpoint }) => {
  return (
    <Container>
      <ResponsiveDrawer>
        <DataDisplay columns={columns} data={data} url={url} apiEndpoint={apiEndpoint} />
      </ResponsiveDrawer>
    </Container>
  );
};
