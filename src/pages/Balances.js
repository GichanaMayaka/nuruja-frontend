import { Container } from "@mui/material";
import React from "react";
import DataDisplayGrid from "../components/DataDisplayGrid";
import ResponsiveDrawer from "../components/ResponsiveDrawer";
import { coreBalancesDataGridColumns } from "../components/Scaffold";
import { AlertRenderer, fetchData } from "../components/Utils";
import { useNavigate } from "react-router-dom";
import Typography from "@mui/material/Typography";

function Balances({ api }) {
  const [endpoint] = React.useState(`${api}balances/all`);
  const [balances, setBalances] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [requestFailed, setRequestFailed] = React.useState(false);
  const navigation = useNavigate();

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
    <Container sx={{ display: "flex", marginTop: 3 }}>
      <ResponsiveDrawer>
        {!requestFailed ? (
          <>
            <Typography variant="h6" mb={1}>
              Balances
            </Typography>
            <DataDisplayGrid
              columns={coreBalancesDataGridColumns}
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
