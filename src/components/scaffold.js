export const MenuItemsNuruja = [
  "Books",
  "Members",
  "Returns",
  "Balances",
];

export const coreMembersDataGridColumns = [
  {
    field: "username",
    headerName: "Name",
    editable: false,
    type: "text",
    flex: 1,
  },
  {
    field: "address",
    headerName: "Address",
    editable: false,
    type: "text",
    flex: 1,
  },
  {
    field: "email",
    headerName: "E-Mail",
    editable: false,
    type: "email",
    flex: 1,
  },
  {
    field: "phone_number",
    headerName: "Phone Number",
    editable: false,
    type: "number",
    flex: 1,
  },
];

export const coreBookDataGridColumns = [
  {
    field: "isbn",
    headerName: "ISBN",
    sortable: true,
    editable: false,
    type: "text",
    flex: 1,
  },
  {
    field: "title",
    headerName: "Title",
    type: "text",
    editable: false,
    sortable: true,
    flex: 1,
  },
  {
    field: "author",
    headerName: "Author",
    editable: false,
    sortable: true,
    type: "text",
    flex: 1,
  },
  {
    field: "date_of_publication",
    headerName: "Date of Publication",
    type: "Date",
    editable: false,
    sortable: true,
    flex: 1,
  },
  {
    field: "status",
    headerName: "Status",
    type: "text",
    sortable: true,
    editable: false,
    flex: 1,
  },
  {
    field: "rent_fee",
    headerName: "Rent Fee",
    type: "number",
    sortable: true,
    editable: false,
    flex: 1,
  },
  {
    field: "late_penalty_fee",
    headerName: "Penalty Fee",
    type: "number",
    sortable: true,
    editable: false,
    flex: 1,
  },
];

export const coreBalancesDataGridColumns = [
  {
    field: "username",
    headerName: "Member",
    sortable: true,
    editable: false,
    type: "text",
    flex: 1,
  },
  {
    field: "balance",
    headerName: "Balances",
    sortable: true,
    editable: false,
    type: "text",
    flex: 1,
  },
  {
    field: "date_of_entry",
    headerName: "Date of Entry",
    sortable: true,
    editable: false,
    type: "Date",
    flex: 1,
  },
];
