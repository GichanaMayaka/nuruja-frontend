import { useNavigate } from "react-router-dom";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { BookmarkAdded } from "@mui/icons-material";
import BookmarkAddIcon from "@mui/icons-material/BookmarkAdd";

export async function postData(url, data = {}, method = "POST") {
  const response = await fetch(url, {
    method: `${method.toUpperCase()}`, // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
      Origin: "http://localhost:3000",
    },
    redirect: "follow", // manual, *follow, error
    referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}

export async function deleteItem(url, data = {}, method = "DELETE") {
  await postData(url, data, method);
}

export async function fetchData(url, method = "GET") {
  const response = await fetch(url, {
    method: `${method.toUpperCase()}`, // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
      Origin: "http://localhost:3000",
    },
    redirect: "follow", // manual, *follow, error
    referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
  });
  return response.json(); // parses JSON response into native JavaScript objects
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
          navigation(`${params.row.id}/delete`);
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
      alert("Borrow Initiated. Redirecting");
      navigation(-1);
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
