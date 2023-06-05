import { createTheme, ThemeProvider } from "@mui/material/styles";
import * as React from "react";
import { Books } from "./pages/Books";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  books,
  booksColumns,
  members,
  membersColumns,
} from "./components/dataProvider";
import { Members } from "./pages/Members";
import { LandingPage } from "./pages/LandingPage";
import { BooksEdit } from "./pages/BooksEdit";

const darkTheme = createTheme({
  palette: {
    mode: "light",
  },
});

function App() {
  return (
    <ThemeProvider theme={ darkTheme }>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={ <LandingPage columns={ booksColumns } data={ books } url={ "" }/> }
          />
          <Route
            path="/books"
            element={ <Books columns={ booksColumns } data={ books } url={ "books" }/> }
          />
          <Route
            path="/members"
            element={ <Members columns={ membersColumns } data={ members } url={ "members" }/> }
          />
          <Route
            path="/balances"
            element={ <Members columns={ membersColumns } data={ members } url={ "balances" }/> }
          />
          <Route
            path="/shelf"
            element={ <Books columns={ booksColumns } data={ books } url={ "books" }/> }
          />
          <Route
            path="/books/:id"
            element={ <BooksEdit columns={ booksColumns } data={ books } url={ "books" }/> }
          />
          <Route
            path="/members/:id"
            element={ <BooksEdit columns={ membersColumns } data={ members } url={ "members" }/> }
          />
          <Route
            path="/balances/:id"
            element={ <BooksEdit columns={ membersColumns } data={ members } url={ "balances" }/> }
          />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
