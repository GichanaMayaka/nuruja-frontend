import * as React from "react";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import { Grid } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Landing = () => {
  return (
    <Box sx={{ flexGrow: 1, width: "100%" }}>
      <Grid container spacing={2}>
        <Grid item xs="auto">
          <Item>xs=8</Item>
        </Grid>
        <Grid item xs="auto">
          <Item>xs=4</Item>
        </Grid>
        <Grid item xs="auto">
          <Item>xs=4</Item>
        </Grid>
        <Grid item xs="auto">
          <Item>xs=8</Item>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Landing;
