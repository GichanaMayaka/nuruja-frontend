import React from "react";
import { Container } from "@mui/material";
import ResponsiveDrawer from "../components/ResponsiveDrawer";
import MemberForm from "../components/MemberForm";

function AddMember({ api }) {
  const action = "add";
  const path = `${api}members/new`;

  return (
    <Container sx={{ alignContent: "center", marginTop: 3 }}>
      <ResponsiveDrawer>
        <MemberForm action={action} apiEndpoint={path} />
      </ResponsiveDrawer>
    </Container>
  );
}

export default AddMember;
