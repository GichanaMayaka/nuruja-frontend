import * as React from "react";
import { DataGrid, GridCellEditStopReasons } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";

function DataDisplayGrid({ data, columns, loadingStatus }) {
  return (
    <Paper sx={{ width: "100%", overflow: "overflow" }} elevation={3}>
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
        initialState={{
          pagination: {
            paginationModel: { pageSize: 10, page: 0 },
          },
        }}
        pageSizeOptions={[5, 10, 25, 50, 100]}
      />
    </Paper>
  );
}

export default DataDisplayGrid;
