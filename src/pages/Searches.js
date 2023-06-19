import { Container, Typography } from "@mui/material";
import React from "react";
import DataDisplayGrid from "../components/DataDisplayGrid";
import ResponsiveDrawer from "../components/ResponsiveDrawer";
import { useLocation } from "react-router-dom";
import { coreBookDataGridColumns } from "../components/scaffold";

function Searches() {
  const location = useLocation();
  const searchResults = location.state.books;
  const searchParam = location.state.searchParam;

  console.log(searchParam);

  return (
    <Container sx={{ display: "flex", marginTop: 3 }}>
      <ResponsiveDrawer>
        <Typography variant="h6" mb={1}>
          Showing Results for ..."{searchParam}"
        </Typography>
        <DataDisplayGrid
          data={searchResults}
          columns={coreBookDataGridColumns}
          loadingStatus={false}
        />
      </ResponsiveDrawer>
    </Container>
  );
}

export default Searches;
