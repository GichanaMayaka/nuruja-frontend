import * as React from "react";
import {
  DataGrid,
  GridCellEditStopReasons,
  GridToolbar,
} from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";

function DataDisplayGrid({ data, columns, loadingStatus }) {
  return (
    <Paper sx={{ width: "100%", overflow: "overflow" }} elevation={3}>
      <DataGrid
        rows={data}
        columns={columns}
        editMode="row"
        density={"comfortable"}
        slots={{ toolbar: GridToolbar }}
        onCellEditStop={(params, event) => {
          if (params.reason === GridCellEditStopReasons.cellFocusOut) {
            event.defaultMuiPrevented = true;
          }
        }}
        autoHeight
        loading={loadingStatus}
        initialState={{
          pagination: {
            paginationModel: { pageSize: 5, page: 0 },
          },
        }}
        pageSizeOptions={[5, 10, 25, 50, 100]}
      />
    </Paper>
  );
}

export default DataDisplayGrid;
