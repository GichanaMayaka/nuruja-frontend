import { Container } from "@mui/material";
import React from "react";
import DataDisplayGrid from "../components/DataDisplayGrid";
import ResponsiveDrawer from "../components/ResponsiveDrawer";
import { coreBalancesDataGridColumns } from "../components/Scaffold";
import { AlertRenderer, fetchData } from "../components/Utils";

function Balances({ api }) {
  const [endpoint] = React.useState(`${api}balances/all`);
  const [balances, setBalances] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [requestFailed, setRequestFailed] = React.useState(false);

  React.useEffect(() => {
    fetchData(endpoint, "GET")
      .then((r) => {
        setBalances(r.balances);
        setIsLoading(false);
      })
      .catch((error) => {
        setRequestFailed(true);
      });
  }, []);

  return (
    <Container sx={{ display: "flex", marginTop: 3 }}>
      <ResponsiveDrawer>
        {!requestFailed ? (
          <DataDisplayGrid
            columns={coreBalancesDataGridColumns}
            data={balances}
            loadingStatus={isLoading}
          />
        ) : (
          <AlertRenderer />
        )}
      </ResponsiveDrawer>
    </Container>
  );
}

export default Balances;
