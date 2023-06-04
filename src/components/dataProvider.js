export const MenuItemsNuruja = [
    "Books",
    "Members",
    "Balances",
    "Shelf",
];

function createData(name, author, dateOfPublication, rentPrice) {
    return {name, author, dateOfPublication, rentPrice};
}

function createMembers(name, address, email, phoneNumber) {
    return {name, address, email, phoneNumber};
}

export const books = [
    createData("Gardens of the Moon", "Steven Erickson", "1999-01-01", 100),
    createData("DeadHouse Gates", "Steven Erickson", "2001-01-01", 100),
    createData("Memories of Ice", "Steven Erickson", "2002-01-01", 100),
    createData("House of Chains", "Steven Erickson", "2004-01-01", 100),
    createData("Midnight Tides", "Steven Erickson", "2005-01-01", 100),
    createData("The BoneHunters", "Steven Erickson", "2007-01-01", 100),
    createData("Reaper's Gale", "Steven Erickson", "2008-01-01", 100),
    createData("Toll the Hounds", "Steven Erickson", "2008-01-01", 100),
    createData("Dust of Dreams", "Steven Erickson", "2008-01-01", 100),
    createData("The Crippled God", "Steven Erickson", "2008-01-01", 100),
    createData("Before they are Hanged", "Joe Abecrombie", "2008-01-01", 100),
];

export const members = [
    createMembers("gichana", "Ngong'", "gichana@email.com", "1041"),
    createMembers("jusline", "mmong'", "jusline@email.com", "1051"),
    createMembers("joy", "ndromm'", "joy@email.com", "1061"),
    createMembers("valeria", "penis land", "valeria@email.com", "1061"),
];

export const booksColumns = [
    {id: "name", label: "Name", minWidth: 170},
    {id: "author", label: "Author", minWidth: 100},
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
    {id: "name", label: "Name", minWidth: 170},
    {id: "address", label: "Address", minWidth: 100},
    {id: "email", label: "Email", minWidth: 100},
    {id: "phoneNumber", label: "Phone Number", minWidth: 100},
];