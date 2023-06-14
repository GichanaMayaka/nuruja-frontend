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
import { useNavigate } from "react-router-dom";
import Typography from "@mui/material/Typography";

function ReturnBook({ api }) {
  const [rentedBooks, setRentedBooks] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [fetchRentedBooksEndpoint] = React.useState(`${api}books/unavailable`);
  const [postReturnsEndpoint] = React.useState(`${api}members`);
  const [requestFailed, setRequestFailed] = React.useState(false);
  const navigation = useNavigate();
  const contextColumns = [
    {
      field: "username",
      headerName: "Name",
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
        if (error.status === 404) {
          navigation("/404");
        } else {
          setRequestFailed(true);
        }
      });
  }, []);

  return (
    <Container sx={{ alignContent: "center", marginTop: 3 }}>
      <ResponsiveDrawer>
        {requestFailed ? (
          <AlertRenderer />
        ) : (
          <>
            <Typography variant="h6" mb={1}>
              Returns
            </Typography>
            <DataDisplayGrid
              data={rentedBooks}
              columns={contextColumns}
              loadingStatus={isLoading}
            />
          </>
        )}
      </ResponsiveDrawer>
    </Container>
  );
}

export default ReturnBook;
