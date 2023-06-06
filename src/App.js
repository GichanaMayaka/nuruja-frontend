import { createTheme, ThemeProvider } from "@mui/material/styles";
import * as React from "react";
import { Books } from "./pages/Books";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { books, booksColumns, members, membersColumns, dataGridColumns } from "./components/dataProvider";
import { Members } from "./pages/Members";
import { LandingPage } from "./pages/LandingPage";
import { BooksEdit } from "./pages/BooksEdit";

const appTheme = createTheme({
  status: {
    danger: '#e53e3e',
  },
  palette: {
    primary: {
      main: '#0971f1',
      darker: '#053e85',
    },
    neutral: {
      main: '#64748B',
      contrastText: '#fff',
    },
    mode: "light",
  },
});

function App() {
  return (
    <ThemeProvider theme={ appTheme }>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={ <LandingPage/> }
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
            element={ <Books columns={ booksColumns } data={ books } url={ "shelf" }/> }
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
            path="/members/:id/borrow"
            element={ <Books columns={ booksColumns } data={ books } url={ "members" }/> }
          />
          <Route
            path="/shelf/:id"
            element={ <BooksEdit columns={ booksColumns } data={ books } url={ "balances" }/> }
          />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
