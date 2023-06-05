import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import * as React from "react";

import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { IconButton } from "@mui/material";
import TablePagination from "@mui/material/TablePagination";
import { useNavigate } from "react-router-dom";

export default function DataDisplay({ columns, data, url }) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [link, setLink] = React.useState(url);
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  const handleChangePage = (event, newPage) => {
    event.preventDefault();
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    event.preventDefault();
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={ { width: "100%", overflow: "hidden" } }>
      <TableContainer sx={ { maxHeight: 920 } }>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              { columns.map((column) => (
                <TableCell
                  key={ column.id }
                  align={ column.align }
                  style={ { minWidth: column.minWidth } }
                >
                  { column.label }
                </TableCell>
              )) }
            </TableRow>
          </TableHead>
          <TableBody>
            { data
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={ -1 } key={ row.id }>
                    { columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={ column.id } align={ column.align }>
                          { column.format && typeof value === "number"
                            ? column.format(value)
                            : value }
                        </TableCell>
                      );
                    }) }
                    <IconButton onClick={ () => {
                      handleNavigation(`/${ link }/${ row.id }`);
                    } }>
                      <EditIcon sx={ { color: "#0f8cdb" } }/>
                    </IconButton>
                    <IconButton onClick={ () => {
                      handleNavigation(`/${ link }/${ row.id }`);
                    } }>
                      <DeleteIcon sx={ { color: "#ff2b51" } }/>
                    </IconButton>
                  </TableRow>
                );
              }) }
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={ [10, 25, 100] }
        component="div"
        count={ data.length }
        rowsPerPage={ rowsPerPage }
        page={ page }
        onPageChange={ handleChangePage }
        onRowsPerPageChange={ handleChangeRowsPerPage }
      />
    </Paper>
  );
}
