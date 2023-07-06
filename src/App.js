import { createTheme, ThemeProvider } from "@mui/material/styles";
import * as React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "./components/NotFound";
import AddBook from "./pages/AddBook";
import AddMember from "./pages/AddMember";
import Balances from "./pages/Balances";
import Books from "./pages/Books";
import EditBook from "./pages/EditBook";
import EditMember from "./pages/EditMember";
import LandingPage from "./pages/LandingPage";
import Members from "./pages/Members";
import RentBook from "./pages/RentBook";
import ReturnBook from "./pages/ReturnBook";
import Searches from "./pages/Searches";
import Analytics from "./pages/Analytics";

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
      main: "#410f49",
    },
  },
});

const API_ENDPOINT = new URL(process.env.REACT_APP_API_ENDPOINT);

function App() {
  const [endpoint] = React.useState(API_ENDPOINT);

  return (
    <ThemeProvider theme={appTheme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />

          <Route path="/books" element={<Books api={endpoint} />} />
          <Route path="/books/new" element={<AddBook api={endpoint} />} />
          <Route path="/books/:id" element={<EditBook api={endpoint} />} />

          <Route path="/members" element={<Members api={endpoint} />} />
          <Route path="/members/new" element={<AddMember api={endpoint} />} />
          <Route path="/members/:id" element={<EditMember api={endpoint} />} />
          <Route
            path="/members/:id/borrow"
            element={<RentBook api={endpoint} />}
          />

          <Route path="/balances" element={<Balances api={endpoint} />} />

          <Route path="/returns" element={<ReturnBook api={endpoint} />} />

          <Route path="/search" element={<Searches api={endpoint} />} />

          <Route path="/reports" element={<Analytics api={endpoint} />} />

          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
