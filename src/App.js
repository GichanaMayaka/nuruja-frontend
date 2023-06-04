import {createTheme, ThemeProvider} from "@mui/material/styles";
import * as React from "react";
import {Home} from "./pages/Home";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {books, booksColumns, members, membersColumns} from "./components/dataProvider";
import {Members} from "./pages/Members";
import {Index} from "./pages/Index";

const darkTheme = createTheme({
    palette: {
        mode: "dark",
    },
});

function App() {
    return (
        <ThemeProvider theme={darkTheme}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Index columns={booksColumns} data={books}/>}/>
                    <Route path="/books" element={<Home columns={booksColumns} data={books}/>}/>
                    <Route path="/members" element={<Members columns={membersColumns} data={members}/>}/>
                    <Route path="/balances" element={<Members columns={membersColumns} data={books}/>}/>
                    <Route path="/shelf" element={<Home columns={booksColumns} data={books}/>}/>
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;
