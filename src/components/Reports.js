import React from "react";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import { PendingReturnsTreeMap } from "./reports-components/PendingReturnsTreeMap";
import { BooksRentalStatusDonutChart } from "./reports-components/BooksRentalStatusDonutChart";
import { BalanceOverTimeLineChart } from "./reports-components/BalanceOverTimeLineChart";

function Reports({ api }) {
  return (
    <>
      <Typography variant="h6" mb={1}>
        DashBoard
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={6} mb={2} sx={{ height: 500 }}>
          <PendingReturnsTreeMap api={api} />
        </Grid>
        <Grid item xs={6} mb={2} sx={{ height: 500 }}>
          <BooksRentalStatusDonutChart api={api} />
        </Grid>
        <Grid item xs={12} sx={{ height: 300 }}>
          <BalanceOverTimeLineChart api={api} />
        </Grid>
      </Grid>
    </>
  );
}

export default Reports;
