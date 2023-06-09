import React from "react";
import ResponsiveDrawer from "../components/ResponsiveDrawer";
import { Container } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import DataDisplayGrid from "../components/DataDisplayGrid";
import { coreBookDataGridColumns } from "../components/dataProvider";
import { fetchData, InitiateRentIconButtonRenderer } from "../components/Utils";

function RentBook({ api }) {
  const { id } = useParams();

  const [bookId, setBookId] = React.useState(0);
  const [availableBooks, setAvailableBooks] = React.useState([]);
  const [fetchBooksEndpoint, setFetchBooksEndpoint] = React.useState(
    `${api}books/available`
  );
  const [postBookEndpoint, setPostBookEndpoint] = React.useState(
    `${api}members/${id}/borrow`
  );

  const [errorDetails, setErrorDetails] = React.useState("");
  const contextColumns = [
    ...coreBookDataGridColumns,
    {
      field: "rent_icon",
      headerName: "",
      renderCell: (params, endpoint) => (
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
  const navigate = useNavigate();

  React.useEffect(() => {
    fetchData(fetchBooksEndpoint).then((r) => {
      setAvailableBooks(r.books);
    });
  }, []);

  return (
    <Container sx={{ alignContent: "center", marginTop: 3 }}>
      <ResponsiveDrawer>
        <DataDisplayGrid
          columns={contextColumns}
          data={availableBooks}
          apiEndpoint={api}
        />
      </ResponsiveDrawer>
    </Container>
  );
}

export default RentBook;
