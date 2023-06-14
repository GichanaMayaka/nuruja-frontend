import React from "react";
import ResponsiveDrawer from "../components/ResponsiveDrawer";
import { Container } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import DataDisplayGrid from "../components/DataDisplayGrid";
import { coreBookDataGridColumns } from "../components/Scaffold";
import { fetchData, InitiateRentIconButtonRenderer } from "../components/Utils";
import Typography from "@mui/material/Typography";

function RentBook({ api }) {
  const { id } = useParams();

  const [availableBooks, setAvailableBooks] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [fetchBooksEndpoint] = React.useState(`${api}books/available`);
  const [postBookEndpoint] = React.useState(`${api}members/${id}/borrow`);
  const navigation = useNavigate();

  const contextColumns = [
    ...coreBookDataGridColumns,
    {
      field: "rent_icon",
      headerName: "",
      renderCell: (params) => (
        <InitiateRentIconButtonRenderer
          params={params}
          endpoint={postBookEndpoint}
        />
      ),
      sortable: false,
      editable: false,
      width: 30,
    },
  ];

  React.useEffect(() => {
    fetchData(fetchBooksEndpoint)
      .then((r) => {
        setAvailableBooks(r.books);
        setIsLoading(false);
      })
      .catch((error) => {
        if (error.status === 404) {
          navigation("/404");
        }
      });
  }, []);

  return (
    <Container sx={{ alignContent: "center", marginTop: 3 }}>
      <ResponsiveDrawer>
        <Typography variant="h6" mb={1}>
          Borrowing
        </Typography>
        <DataDisplayGrid
          columns={contextColumns}
          data={availableBooks}
          loadingStatus={isLoading}
        />
      </ResponsiveDrawer>
    </Container>
  );
}

export default RentBook;
