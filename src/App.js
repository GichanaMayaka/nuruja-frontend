import { createTheme, ThemeProvider } from "@mui/material/styles";
import * as React from "react";
import { Books } from "./pages/Books";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { booksColumns, membersColumns } from "./components/dataProvider";
import { Members } from "./pages/Members";
import { LandingPage } from "./pages/LandingPage";
import EditBook from "./pages/EditBook";
import axios from "axios";
import AddBook from "./pages/AddBook";
import DeleteItem from "./pages/DeleteItem";
import AddMember from "./pages/AddMember";
import EditMember from "./pages/EditMember";

const appTheme = createTheme({
  status: {
    danger: "#e53e3e",
  },
  palette: {
    primary: {
      main: "#386641",
      darker: "#053e85",
    },
    neutral: {
      main: "#64748B",
      contrastText: "#fff",
    },
    warning: {
      main: "#bc4749",
    },
    secondary: {
      main: "#6e1b7d",
    },
    mode: "light",
  },
});

const API_ENDPOINT = new URL("http://127.0.0.1:8000/");

function App() {
  const [url, setUrl] = React.useState(API_ENDPOINT);
  const [books, setBooks] = React.useState([]);
  const [members, setMembers] = React.useState([]);

  React.useEffect(() => {
    axios.get(`${url.href}/books`).then((response) => {
      setBooks(response.data.books);
    });
  }, []);

  React.useEffect(() => {
    axios.get(`${url.href}/members`).then((response) => {
      setMembers(response.data.users);
    });
  }, []);

  return (
    <ThemeProvider theme={appTheme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route
            path="/books"
            element={
              <Books
                columns={booksColumns}
                data={books}
                url={"books"}
                apiEndpoint={url}
              />
            }
          />
          <Route path="/books/new" element={<AddBook apiEndpoint={url} />} />
          <Route path="/books/:id" element={<EditBook apiEndpoint={url} />} />
          <Route
            path="/books/:id/delete"
            element={<DeleteItem url={"books"} apiEndpoint={url} />}
          />
          <Route
            path="/members"
            element={
              <Members
                columns={membersColumns}
                data={members}
                url={"members"}
                apiEndpoint={url}
              />
            }
          />
          <Route
            path="/members/new"
            element={<AddMember apiEndpoint={url} />}
          />
          <Route
            path="/members/:id"
            element={<EditMember apiEndpoint={url} />}
          />
          <Route
            path="/members/:id/delete"
            element={
              <EditBook
                columns={membersColumns}
                data={members}
                url={"members"}
                apiEndpoint={url}
              />
            }
          />
          <Route
            path="/members/:id/borrow"
            element={
              <Books
                columns={booksColumns}
                data={books}
                url={"members"}
                apiEndpoint={url}
              />
            }
          />
          <Route
            path="/balances"
            element={
              <Members
                columns={membersColumns}
                data={members}
                url={"balances"}
                apiEndpoint={url}
              />
            }
          />
          <Route
            path="/shelf"
            element={
              <Books
                columns={booksColumns}
                data={books}
                url={"shelf"}
                apiEndpoint={url}
              />
            }
          />
          <Route
            path="/shelf/:id"
            element={
              <EditBook
                columns={booksColumns}
                data={books}
                url={"balances"}
                apiEndpoint={url}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
