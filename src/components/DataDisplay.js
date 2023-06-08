import Fade from "@mui/material/Fade";
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
import BookmarkAddIcon from "@mui/icons-material/BookmarkAdd";
import { Button, Container, Grid, IconButton } from "@mui/material";
import TablePagination from "@mui/material/TablePagination";
import { useNavigate } from "react-router-dom";
import Tooltip from "@mui/material/Tooltip";
import { deleteItem } from "./Utils";

export default function DataDisplay({ columns, data, url, apiEndpoint }) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
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
    <Grid component={Container} spacing={1}>
      <Grid item xs={10}>
        <Paper
          sx={{ overflow: "hidden", width: "100%", marginTop: 2 }}
          elevation={3}
        >
          <TableContainer sx={{ maxHeight: 920 }}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead sx={{ color: "#386641" }}>
                <TableRow>
                  {columns.map((column) => (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      style={{ minWidth: column.minWidth }}
                    >
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {data
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => {
                    return (
                      <TableRow
                        hover
                        role="checkbox"
                        tabIndex={-1}
                        key={row.id}
                      >
                        {columns.map((column) => {
                          const value = row[column.id];
                          return (
                            <TableCell key={column.id} align={column.align}>
                              {column.format && typeof value === "number"
                                ? column.format(value)
                                : value}
                            </TableCell>
                          );
                        })}
                        <Tooltip
                          title={"Edit"}
                          arrow
                          TransitionComponent={Fade}
                          TransitionProps={{ timeout: 600 }}
                        >
                          <IconButton
                            color="primary"
                            onClick={() => {
                              handleNavigation(`/${link}/${row.id}`);
                            }}
                          >
                            <EditIcon />
                          </IconButton>
                        </Tooltip>
                        {url.includes("members") ? (
                          <Tooltip
                            title={"Rent"}
                            arrow
                            TransitionComponent={Fade}
                            TransitionProps={{ timeout: 600 }}
                          >
                            <IconButton
                              color="secondary"
                              onClick={() => {
                                handleNavigation(`/${link}/${row.id}/borrow`);
                              }}
                            >
                              <BookmarkAddIcon />
                            </IconButton>
                          </Tooltip>
                        ) : null}
                        <Tooltip
                          title={"Delete"}
                          arrow
                          TransitionComponent={Fade}
                          TransitionProps={{ timeout: 600 }}
                        >
                          <IconButton
                            onClick={() => {
                              deleteItem(
                                `${apiEndpoint}${link}/${row.id}/delete`
                              ).then((r) => {
                                console.log(r);
                              });
                            }}
                          >
                            <DeleteIcon color="warning" />
                          </IconButton>
                        </Tooltip>
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25, 100]}
            component="div"
            count={data.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      </Grid>
      {url.includes("book") ? (
        <Grid item xs={1}>
          <Button
            variant="text"
            color="secondary"
            size="large"
            onClick={() => handleNavigation(`/books/new`)}
          >
            Add a Book
          </Button>
        </Grid>
      ) : url.includes("member") ? (
        <Grid item xs={1}>
          <Button
            variant="text"
            color="secondary"
            size="large"
            onClick={() => handleNavigation(`/members/new`)}
          >
            Add a Member
          </Button>
        </Grid>
      ) : null}
    </Grid>
  );
}
