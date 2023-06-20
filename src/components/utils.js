import { BookmarkAdded, MoneyOff } from "@mui/icons-material";
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
  mode: "cors",
  headers: {
    "Content-Type": "application/json",
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
    throw response;
  }

  return response.json();
}

export async function fetchData(url, method = "GET") {
  const response = await fetch(url, {
    ...init,
    method: `${method}`,
  });

  if (!response.ok) {
    throw response;
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

export function DeleteIconButtonRender({ params, endpoint }) {
  const itemId = params.row.id;
  const [api] = React.useState(`${endpoint}/${itemId}/delete`);
  const navigation = useNavigate();

  const handleDelete = () => {
    postData(api, {}, "DELETE")
      .then((r) => navigation("/"))
      .catch((error) => {
        console.log(error.status);
      });
  };

  return (
    <Tooltip title={"Delete"} arrow>
      <IconButton color="warning" size="small" onClick={handleDelete}>
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
        color="primary"
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

    postData(endpoint, payload, "POST")
      .then((r) => {
        alert("Borrow Successful");
        navigation("/members");
      })
      .catch((error) => {
        if (error.status === 406) {
          alert(
            "Cannot Borrow. Member's balance will be beyond cut-off of Kshs. 500"
          );
          navigation("/balances");
        }
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
        if (error.status === 404) {
          navigation("/404");
        }
      });
  };

  return (
    <Tooltip title={"Initiate Return"} arrow>
      <IconButton color="neutral" size="small" onClick={handleInitiateReturn}>
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

export function ClearUserBalanceIconRenderer({ params, endpoint }) {
  const navigation = useNavigate();
  const location = `${endpoint}balances/clear`;

  const handleClearUserBalance = () => {
    const payload = {
      user_id: params.row.user_id,
    };

    postData(location, payload, "POST")
      .then((r) => {
        alert("Balance Cleared");
        navigation(0);
      })
      .catch((error) => {
        if (error.status === 404) {
          navigation("/404");
        }
      });
  };

  return (
    <>
      {params.row.balance ? (
        <Tooltip title={"Clear Balance"} arrow>
          <IconButton
            color="primary"
            size="small"
            onClick={handleClearUserBalance}
          >
            <MoneyOff />
          </IconButton>
        </Tooltip>
      ) : null}
    </>
  );
}
