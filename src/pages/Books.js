import { Container } from "@mui/material";
import React from "react";
import ResponsiveDrawer from "../components/ResponsiveDrawer";
import { coreBookDataGridColumns } from "../components/dataProvider";
import DataDisplayGrid from "../components/DataDisplayGrid";
import { useNavigate } from "react-router-dom";
import {
  DeleteIconButtonRender,
  EditIconButtonRenderer,
  fetchData,
} from "../components/Utils";

const additionalColumns = [
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
    renderCell: (params) => <DeleteIconButtonRender params={params} />,
    sortable: false,
    editable: false,
    width: 30,
  },
];

export function Books({ api }) {
  const [apiEndpoint, setApiEndpoint] = React.useState(`${api}books`);
  const [books, setBooks] = React.useState([]);
  const [errorDetails, setErrorDetails] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(true);
  const booksContextColumns = [
    ...coreBookDataGridColumns,
    ...additionalColumns,
  ];

  React.useEffect(() => {
    fetchData(apiEndpoint, "GET").then((r) => {
      setBooks(r.books);
      setIsLoading(false);
    });
  }, []);

  return (
    <Container>
      <ResponsiveDrawer>
        <DataDisplayGrid
          data={books}
          columns={booksContextColumns}
          loadingStatus={isLoading}
        />
      </ResponsiveDrawer>
    </Container>
  );
}
