import React from "react";
import ResponsiveDrawer from "../components/ResponsiveDrawer";
import { Container } from "@mui/material";
import {
  AlertRenderer,
  fetchData,
  InitiateReturnIconRenderer,
} from "../components/Utils";
import DataDisplayGrid from "../components/DataDisplayGrid";
import { coreBookDataGridColumns } from "../components/Scaffold";

function ReturnBook({ api }) {
  const [rentedBooks, setRentedBooks] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [fetchRentedBooksEndpoint] = React.useState(`${api}books/unavailable`);
  const [postReturnsEndpoint] = React.useState(`${api}members`);
  const [requestFailed, setRequestFailed] = React.useState(false);
  const contextColumns = [
    {
      field: "username",
      headerName: "UserName",
      sortable: true,
      editable: false,
      type: "Date",
      flex: 1,
    },
    ...coreBookDataGridColumns,
    {
      field: "date_borrowed",
      headerName: "Date Borrowed",
      sortable: true,
      editable: false,
      type: "Date",
      flex: 1,
    },
    {
      field: "date_due",
      headerName: "Date Due",
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
    fetchData(fetchRentedBooksEndpoint)
      .then((r) => {
        setRentedBooks(r.books);
        setIsLoading(false);
      })
      .catch((error) => {
        setRequestFailed(true);
      });
  }, []);

  return (
    <Container sx={{ alignContent: "center", marginTop: 3 }}>
      <ResponsiveDrawer>
        {requestFailed ? (
          <AlertRenderer />
        ) : (
          <DataDisplayGrid
            data={rentedBooks}
            columns={contextColumns}
            loadingStatus={isLoading}
          />
        )}
      </ResponsiveDrawer>
    </Container>
  );
}

export default ReturnBook;
