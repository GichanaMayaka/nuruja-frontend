import { createTheme, ThemeProvider } from "@mui/material/styles";
import * as React from "react";
import { Books } from "./pages/Books";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  booksColumns,
  coreBookDataGridColumns,
  membersColumns,
} from "./components/dataProvider";
import { Members } from "./pages/Members";
import { LandingPage } from "./pages/LandingPage";
import EditBook from "./pages/EditBook";
import axios from "axios";
import AddBook from "./pages/AddBook";
import DeleteItem from "./pages/DeleteItem";
import AddMember from "./pages/AddMember";
import EditMember from "./pages/EditMember";
import RentBook from "./pages/RentBook";

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
  const [endpoint, setEndpoint] = React.useState(API_ENDPOINT);
  const [books, setBooks] = React.useState([]);
  const [members, setMembers] = React.useState([]);

  return (
    <ThemeProvider theme={appTheme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/books" element={<Books api={endpoint} />} />
          <Route path="/books/new" element={<AddBook api={endpoint} />} />
          <Route path="/books/:id" element={<EditBook api={endpoint} />} />
          <Route
            path="/books/:id/delete"
            element={<DeleteItem url={"books"} apiEndpoint={endpoint} />}
          />
          <Route path="/members" element={<Members api={endpoint} />} />
          <Route path="/members/new" element={<AddMember api={endpoint} />} />
          <Route path="/members/:id" element={<EditMember api={endpoint} />} />
          <Route
            path="/members/:id/delete"
            element={<EditBook api={endpoint} />}
          />
          <Route
            path="/members/:id/borrow"
            element={<RentBook api={endpoint} />}
          />
          <Route path="/balances" element={<Members api={endpoint} />} />
          <Route path="/shelf" element={<Books api={endpoint} />} />
          <Route path="/shelf/:id" element={<EditBook api={endpoint} />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
