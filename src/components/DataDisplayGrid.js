import * as React from "react";
import { DataGrid, GridCellEditStopReasons } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";

export default function DataDisplayGrid({ data, columns }) {
  const [bookId, setBookId] = React.useState(0);

  return (
    <Paper sx={{ width: "100%", overflow: "overflow" }}>
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
        onCellClick={(row) => {
          setBookId(row.row.id);
        }}
      />
    </Paper>
  );
}
