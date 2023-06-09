import * as React from "react";
import { DataGrid, GridCellEditStopReasons } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";

export default function DataDisplayGrid({ data, columns, loadingStatus }) {
  return (
    <Paper sx={{ width: "100%", overflow: "overflow", marginTop: 3 }} elevation={3}>
      <DataGrid
        rows={data}
        columns={columns}
        editMode="row"
        onCellEditStop={(params, event) => {
          if (params.reason === GridCellEditStopReasons.cellFocusOut) {
            event.defaultMuiPrevented = true;
          }
        }}
        autoHeight
        loading={loadingStatus}
      />
    </Paper>
  );
}
