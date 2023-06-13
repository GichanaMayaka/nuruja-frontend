import { BookmarkAdded } from "@mui/icons-material";
import BookmarkAddIcon from "@mui/icons-material/BookmarkAdd";
import BookmarkRemoveIcon from "@mui/icons-material/BookmarkRemove";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Alert, AlertTitle } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import React from "react";
import { useNavigate } from "react-router-dom";

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

  if (!response.ok) {
    throw new Error("Network response was not ok.");
  }

  return response.json();
}

export async function fetchData(url, method = "GET") {
  const response = await fetch(url, {
    ...init,
    method: `${method}`,
  });

  if (!response.ok) {
    throw new Error("Network response was not ok.");
  }

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
        color="neutral"
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
      <IconButton color="neutral" size="small" onClick={handleInitiateBorrow}>
        <BookmarkAddIcon />
      </IconButton>
    </Tooltip>
  );
}

export function InitiateReturnIconRenderer({ params, endpoint }) {
  const navigation = useNavigate();
  const location = `${endpoint}/${params.row.user_id}/return`;
  let payload;

  const handleInitiateReturn = () => {
    payload = {
      book_id: params.row.book_id,
    };

    postData(location, payload, "POST")
      .then((r) => {
        alert("Return Successful");
        navigation(0);
      })
      .catch((error) => {
        setRequestFailed(true);
      });
  };

  return (
    <Tooltip title={"Initiate Return"} arrow>
      <IconButton color="secondary" size="small" onClick={handleInitiateReturn}>
        <BookmarkRemoveIcon />
      </IconButton>
    </Tooltip>
  );
}

export function AlertRenderer({
  severity = "warning",
  title = "Error",
  message = "Connection Error",
  variant = "filled",
}) {
  const navigation = useNavigate();

  return (
    <Alert
      severity={severity}
      variant={variant}
      onClose={() => {
        navigation("/");
      }}
    >
      <AlertTitle>{title}</AlertTitle>
      {message}
    </Alert>
  );
}
