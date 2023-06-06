import Fade from '@mui/material/Fade';
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
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
import { Button, Grid, IconButton } from "@mui/material";
import TablePagination from "@mui/material/TablePagination";
import { useNavigate } from "react-router-dom";
import Tooltip from '@mui/material/Tooltip';

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
    <Grid container spacing={ 1 }>
      <Grid item xs={ "auto" } md={ "auto" }>
        <Paper sx={ { overflow: "hidden", width: "100%" } }>
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
                        <Tooltip title={ "Edit" } arrow TransitionComponent={Fade} TransitionProps={{ timeout: 600 }}>
                          <IconButton color="primary" onClick={ () => {
                            handleNavigation(`/${ link }/${ row.id }`);
                          } }>
                            <EditIcon disableRipple/>
                          </IconButton>
                        </Tooltip>
                        { url.includes("members") ?
                          <Tooltip title={ "Rent" } arrow TransitionComponent={Fade} TransitionProps={{ timeout: 600 }}>
                            <IconButton color="secondary" onClick={ () => {
                              handleNavigation(`/${ link }/${ row.id }/borrow`);
                            } }>
                              <BookmarkAddIcon disableRipple/>
                            </IconButton>
                          </Tooltip> : null }
                        <Tooltip title={ "Delete" } arrow TransitionComponent={Fade} TransitionProps={{ timeout: 600 }}>
                          <IconButton onClick={ () => {
                            handleNavigation(`/${ link }/${ row.id }`);
                          } }>
                            <DeleteIcon color="warning"/>
                          </IconButton>
                        </Tooltip>
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
      </Grid>
      { url.includes("book") ? <Grid item xs={ "auto" } md={ "auto" }>
        <Button variant="text" color="secondary" size="large" onClick={ () => handleNavigation(`/books/1`) }>Add a
          Book</Button>
      </Grid> : null }
    </Grid>
  );
}
