export const MenuItemsNuruja = ["Books", "Members", "Balances", "Shelf"];

export const booksColumns = [
  {
    id: "title",
    label: "Title",
    minWidth: "12%"
  },
  {
    id: "author",
    label: "Author",
    minWidth: "12%"
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
