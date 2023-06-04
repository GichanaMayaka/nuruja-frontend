import React from "react";
import {Container} from "@mui/material";
import ResponsiveDrawer from "../components/ResponsiveDrawer";

export const Members = ({columns, data}) => {
    return (
        <Container sx={{alignContent: "center", marginTop: 3}}>
            <ResponsiveDrawer columns={columns} data={data}/>
        </Container>
    );
};
