import { Container } from "@mui/material";
import Typography from "@mui/material/Typography";
import React from "react";
import { useNavigate } from "react-router-dom";
import DataDisplayGrid from "../components/DataDisplayGrid";
import ResponsiveDrawer from "../components/ResponsiveDrawer";
import { coreBalancesDataGridColumns } from "../components/scaffold";
import {
  AlertRenderer,
  ClearUserBalanceIconRenderer,
  fetchData
} from "../components/utils";

function Balances({ api }) {
  const [endpoint] = React.useState(`${api}balances/all`);
  const [balances, setBalances] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [requestFailed, setRequestFailed] = React.useState(false);
  const navigation = useNavigate();

  const contextColumns = [
    ...coreBalancesDataGridColumns,
    {
      field: "clear_balance_icon",
      headerName: "",
      renderCell: (params) => (
        <ClearUserBalanceIconRenderer params={params} endpoint={api} />
      ),
      sortable: false,
      editable: false,
      width: 30,
    },
  ];

  React.useEffect(() => {
    fetchData(endpoint, "GET")
      .then((r) => {
        setBalances(r.balances);
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
        {!requestFailed ? (
          <>
            <Typography variant="h6" mb={1}>
              Balances
            </Typography>
            <DataDisplayGrid
              columns={contextColumns}
              data={balances}
              loadingStatus={isLoading}
            />
          </>
        ) : (
          <AlertRenderer />
        )}
      </ResponsiveDrawer>
    </Container>
  );
}

export default Balances;
