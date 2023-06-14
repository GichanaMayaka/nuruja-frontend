import { Button, Container } from "@mui/material";
import React from "react";
import ResponsiveDrawer from "../components/ResponsiveDrawer";
import { coreBookDataGridColumns } from "../components/Scaffold";
import DataDisplayGrid from "../components/DataDisplayGrid";
import {
  AlertRenderer,
  DeleteIconButtonRender,
  EditIconButtonRenderer,
  fetchData,
} from "../components/Utils";
import { useNavigate } from "react-router-dom";

function Books({ api }) {
  const [apiEndpoint] = React.useState(`${api}books`);
  const [books, setBooks] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [requestFailed, setRequestFailed] = React.useState(false);
  const navigation = useNavigate();

  const booksContextColumns = [
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
        <DeleteIconButtonRender params={params} endpoint={apiEndpoint} />
      ),
      sortable: false,
      editable: false,
      width: 30,
    },
  ];

  React.useEffect(() => {
    fetchData(apiEndpoint, "GET")
      .then((r) => {
        setBooks(r.books);
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
    <Container sx={{ display: "flex", marginTop: 3 }}>
      <ResponsiveDrawer>
        {requestFailed ? (
          <AlertRenderer />
        ) : (
          <>
            <DataDisplayGrid
              data={books}
              columns={booksContextColumns}
              loadingStatus={isLoading}
            />
            <Button
              variant="text"
              color="secondary"
              size="large"
              onClick={() => {
                navigation("new");
              }}
            >
              Add a Book
            </Button>{" "}
          </>
        )}
      </ResponsiveDrawer>
    </Container>
  );
}

export default Books;
