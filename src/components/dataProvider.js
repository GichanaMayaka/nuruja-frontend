import IconButton from "@mui/material/IconButton";
import BookmarkAddedIcon from "@mui/icons-material/BookmarkAdded";

export const MenuItemsNuruja = ["Books", "Members", "Balances", "Shelf"];

export const booksColumns = [
  {
    id: "title",
    label: "Title",
    minWidth: "12%",
  },
  {
    id: "author",
    label: "Author",
    minWidth: "12%",
  },
  {
    id: "isbn",
    label: "ISBN",
    minWidth: "12%",
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "date_of_publication",
    label: "Date of Publication",
    minWidth: "12%",
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "status",
    label: "Status",
    minWidth: "12%",
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "category",
    label: "Category",
    minWidth: "12%",
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "rent_fee",
    label: "Rent Price (KShs.)",
    minWidth: "12%",
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "late_penalty_fee",
    label: "Late Fee (KShs.)",
    minWidth: "12%",
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
];

export const membersColumns = [
  {
    id: "username",
    label: "Username",
    // minWidth: 170
  },
  {
    id: "address",
    label: "Address",
    // minWidth: 100
  },
  {
    id: "email",
    label: "Email",
    // minWidth: 100
  },
  {
    id: "phone_number",
    label: "Phone Number",
    // minWidth: 100
  },
];

export const dataGridColumns = [
  {
    field: "isbn",
    headerName: "ISBN",
    editable: true,
    type: "text",
    width: 50,
  },
  {
    field: "title",
    headerName: "Title",
    width: 150,
    type: "text",
  },
  {
    field: "author",
    headerName: "Author",
    width: 150,
    editable: true,
    type: "text",
  },
  {
    field: "date_of_publication",
    headerName: "Date of Publication",
    type: "Date",
    width: 150,
    editable: true,
  },
  {
    field: "status",
    headerName: "Status",
    type: "text",
    sortable: true,
    width: 100,
  },
  {
    field: "rent_fee",
    headerName: "Rent Fee",
    type: "number",
    sortable: true,
    width: 70,
  },
  {
    field: "late_penalty_fee",
    headerName: "Penalty Fee",
    type: "number",
    sortable: true,
    width: 90,
  },
  {
    headerName: "",
    renderCell: renderDetailsButton,
    sortable: false,
    editable: false,
  },
];

function renderDetailsButton(params) {
  return (
    <strong>
      <IconButton
        color="secondary"
        size="small"
        onClick={() => {
          console.log(params.row.title);
        }}
      >
        <BookmarkAddedIcon />
      </IconButton>
    </strong>
  );
}
