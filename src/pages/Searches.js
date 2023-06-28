import { Typography } from "@mui/material";
import React from "react";
import DataDisplayGrid from "../components/DataDisplayGrid";
import BasePage from "../components/BasePage";
import { useLocation } from "react-router-dom";
import { coreBookDataGridColumns } from "../components/scaffold";
import {
  DeleteIconButtonRender,
  EditIconButtonRenderer,
} from "../components/utils";

function Searches({ api }) {
  const location = useLocation();
  const searchResults = location.state.books;
  const searchParam = location.state.searchParam;
  const searchColumns = [
    ...coreBookDataGridColumns,
    {
      field: "edit_icon",
      headerName: "",
      renderCell: (params) => <EditIconButtonRenderer params={params} />,
      sortable: false,
      editable: false,
      width: 30,
    },
    {
      field: "delete_icon",
      headerName: "",
      renderCell: (params) => (
        <DeleteIconButtonRender params={params} endpoint={api} />
      ),
      sortable: false,
      editable: false,
      width: 30,
    },
  ];

  return (
    <BasePage>
      <Typography variant="h6" mb={1}>
        Showing Results for ..."{searchParam}"
      </Typography>
      <DataDisplayGrid
        data={searchResults}
        columns={searchColumns}
        loadingStatus={false}
      />
    </BasePage>
  );
}

export default Searches;
