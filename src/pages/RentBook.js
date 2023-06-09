import React from "react";
import ResponsiveDrawer from "../components/ResponsiveDrawer";
import { Container } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import DataDisplayGrid from "../components/DataDisplayGrid";
import {
  coreBookDataGridColumns,
  renderRentToIconButton,
} from "../components/dataProvider";

const additionalColumns = [
  {
    field: "rent_icon",
    headerName: "",
    renderCell: renderRentToIconButton,
    sortable: false,
    editable: false,
    width: 30,
  },
];

function RentBook({ api }) {
  const { id } = useParams();

  const contextColumns = [...coreBookDataGridColumns, ...additionalColumns];
  const [bookId, setBookId] = React.useState(0);
  const [availableBooks, setAvailableBooks] = React.useState([]);
  const [fetchBooksEndpoint, setFetchBooksEndpoint] = React.useState(
    `${api}books/available`
  );
  const [errorDetails, setErrorDetails] = React.useState("");
  const navigate = useNavigate();

  React.useEffect(() => {
    fetch(fetchBooksEndpoint)
      .then((r) => {
        if (r.status === 200) {
          return r.json();
        } else if (r.status === 404) {
          setErrorDetails("Book not Found");
        } else {
          setErrorDetails("Server Error");
        }
      })
      .then((response) => {
        if (response !== undefined) {
          setAvailableBooks(response.books);
        } else {
          alert("Book[s] not Found");
          navigate("/books/");
        }
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
