import React from "react";
import BasePage from "../components/BasePage";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import DataDisplayGrid from "../components/DataDisplayGrid";
import { coreBookDataGridColumns } from "../components/scaffold";
import { fetchData, InitiateRentIconButtonRenderer } from "../components/utils";
import Typography from "@mui/material/Typography";

function RentBook({ api }) {
  const { id } = useParams();

  const [availableBooks, setAvailableBooks] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [fetchBooksEndpoint] = React.useState(`${api}books/available`);
  const [postBookEndpoint] = React.useState(`${api}members/${id}/borrow`);
  const navigation = useNavigate();
  const location = useLocation();

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
    <BasePage>
      <Typography variant="h6" mb={1}>
        Renting to {location.state.name}
      </Typography>
      <DataDisplayGrid
        columns={contextColumns}
        data={availableBooks}
        loadingStatus={isLoading}
      />
    </BasePage>
  );
}

export default RentBook;
