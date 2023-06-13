import React from "react";
import ResponsiveDrawer from "../components/ResponsiveDrawer";
import { Container } from "@mui/material";
import { fetchData, InitiateReturnIconRenderer } from "../components/Utils";
import DataDisplayGrid from "../components/DataDisplayGrid";
import { coreBookDataGridColumns } from "../components/Scaffold";

function ReturnBook({ api }) {
  const [rentedBooks, setRentedBooks] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [fetchRentedBooksEndpoint, setFetchRentedBooksEndpoint] =
    React.useState(`${api}books/unavailable`);
  const [postReturnsEndpoint, setPostReturnsEndpoint] = React.useState(
    `${api}members`
  );
  const contextColumns = [
    ...coreBookDataGridColumns,
    {
      field: "date_due",
      headerName: "Date Due",
      sortable: true,
      editable: false,
      type: "Date",
      flex: 1,
    },
    {
      field: "username",
      headerName: "UserName",
      sortable: true,
      editable: false,
      type: "Date",
      flex: 1,
    },
    {
      field: "date_borrowed",
      headerName: "Date Borrowed",
      sortable: true,
      editable: false,
      type: "Date",
      flex: 1,
    },
    {
      field: "rent_icon",
      headerName: "",
      renderCell: (params) => (
        <InitiateReturnIconRenderer
          params={params}
          endpoint={postReturnsEndpoint}
        />
      ),
      sortable: false,
      editable: false,
      width: 30,
    },
  ];

  React.useEffect(() => {
    fetchData(fetchRentedBooksEndpoint).then((r) => {
      setRentedBooks(r.books);
      setIsLoading(false);
    });
  }, []);

  // TODO: Fix "Warning: Encountered two children with the same key,"
  return (
    <Container sx={{ alignContent: "center", marginTop: 3 }}>
      <ResponsiveDrawer>
        <DataDisplayGrid
          data={rentedBooks}
          columns={contextColumns}
          loadingStatus={isLoading}
        />
      </ResponsiveDrawer>
    </Container>
  );
}

export default ReturnBook;
