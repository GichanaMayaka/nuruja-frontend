import { useNavigate } from "react-router-dom";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { BookmarkAdd, BookmarkAdded } from "@mui/icons-material";
import BookmarkAddIcon from "@mui/icons-material/BookmarkAdd";
import { Alert, AlertTitle } from "@mui/material";
import BookmarkRemoveIcon from "@mui/icons-material/BookmarkRemove";

const init = {
  mode: "cors", // no-cors, *cors, same-origin
  credentials: "same-origin",
  headers: {
    "Content-Type": "application/json",
    Origin: "http://localhost:3000",
  },
  redirect: "follow",
  referrerPolicy: "no-referrer",
};

export async function postData(url, data, method = "POST") {
  const response = await fetch(url, {
    ...init,
    method: `${method}`,
    body: JSON.stringify(data),
  });
  return response.json();
}

export async function fetchData(url, method = "GET") {
  const response = await fetch(url, {
    ...init,
    method: `${method}`,
  });
  return response.json();
}

export function EditIconButtonRenderer({ params }) {
  const navigation = useNavigate();

  return (
    <Tooltip title={"Edit"} arrow>
      <IconButton
        color="primary"
        size="small"
        onClick={() => {
          navigation(`${params.row.id}`);
        }}
      >
        <EditIcon />
      </IconButton>
    </Tooltip>
  );
}

export function DeleteIconButtonRender({ params }) {
  const navigation = useNavigate();

  return (
    <Tooltip title={"Delete"} arrow>
      <IconButton
        color="warning"
        size="small"
        onClick={() => {
          navigation(-1);
        }}
      >
        <DeleteIcon />
      </IconButton>
    </Tooltip>
  );
}

export function RentToIconButtonRenderer({ params }) {
  const navigation = useNavigate();

  return (
    <Tooltip title={"Rent To"} arrow>
      <IconButton
        color="secondary"
        size="small"
        onClick={() => {
          navigation(`${params.row.id}/borrow`);
        }}
      >
        <BookmarkAdded />
      </IconButton>
    </Tooltip>
  );
}

export function InitiateRentIconButtonRenderer({ params, endpoint }) {
  const navigation = useNavigate();
  let payload;

  const handleInitiateBorrow = () => {
    payload = {
      book_id: params.row.id,
    };

    postData(endpoint, payload, "POST").then((r) => {
      alert("Borrow Successful");
      navigation(0);
    });
  };

  return (
    <Tooltip title={"Initiate Borrow"} arrow>
      <IconButton color="secondary" size="small" onClick={handleInitiateBorrow}>
        <BookmarkAddIcon />
      </IconButton>
    </Tooltip>
  );
}

export function InitiateReturnIconRenderer({ params, endpoint }) {
  const navigation = useNavigate();

  return (
    <Tooltip title={"Initiate Borrow"} arrow>
      <IconButton
        color="secondary"
        size="small"
        onClick={() => {
          console.log("Returning " + params.row.title);
        }}
      >
        <BookmarkRemoveIcon />
      </IconButton>
    </Tooltip>
  );
}

export function AlertRenderer({ severity, title, message }) {
  return (
    <Alert severity={severity}>
      <AlertTitle>{title}</AlertTitle>
      {message}
    </Alert>
  );
}
