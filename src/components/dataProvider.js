export const MenuItemsNuruja = [
  "Books",
  "Members",
  "Balances",
  "Shelf",
];

function createBooks(id, name, author, dateOfPublication, rentPrice) {
  return { id, name, author, dateOfPublication, rentPrice };
}

function createMembers(id, name, address, email, phoneNumber) {
  return { id, name, address, email, phoneNumber };
}

export const books = [
  createBooks(1, "Gardens of the Moon", "Steven Erickson", "1999-01-01", 100),
  createBooks(2, "DeadHouse Gates", "Steven Erickson", "2001-01-01", 100),
  createBooks(3, "Memories of Ice", "Steven Erickson", "2002-01-01", 100),
  createBooks(4, "House of Chains", "Steven Erickson", "2004-01-01", 100),
  createBooks(5, "Midnight Tides", "Steven Erickson", "2005-01-01", 100),
  createBooks(6, "The BoneHunters", "Steven Erickson", "2007-01-01", 100),
  createBooks(7, "Reaper's Gale", "Steven Erickson", "2008-01-01", 100),
  createBooks(8, "Toll the Hounds", "Steven Erickson", "2008-01-01", 100),
  createBooks(9, "Dust of Dreams", "Steven Erickson", "2008-01-01", 100),
  createBooks(10, "The Crippled God", "Steven Erickson", "2008-01-01", 100),
  createBooks(11, "Before they are Hanged", "Joe Abecrombie", "2008-01-01", 100),
];

export const members = [
  createMembers(1, "gichana", "Ngong'", "gichana@email.com", "1041"),
  createMembers(2, "jusline", "mmong'", "jusline@email.com", "1051"),
  createMembers(3, "joy", "ndromm'", "joy@email.com", "1061"),
];

export const booksColumns = [
  { id: "name", label: "Name", minWidth: 170 },
  { id: "author", label: "Author", minWidth: 100 },
  {
    id: "dateOfPublication",
    label: "Date of Publication",
    minWidth: 170,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "rentPrice",
    label: "Rent Price",
    minWidth: 170,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
];

export const membersColumns = [
  { id: "name", label: "Name", minWidth: 170 },
  { id: "address", label: "Address", minWidth: 100 },
  { id: "email", label: "Email", minWidth: 100 },
  { id: "phoneNumber", label: "Phone Number", minWidth: 100 },
];