import React from "react";
import ResponsiveDrawer from "../components/ResponsiveDrawer";
import { Container } from "@mui/material";
import { useParams } from "react-router-dom";
import MemberForm from "../components/MemberForm";

function EditMember({ api }) {
  const action = "edit";
  const { id } = useParams();
  const path = `${api}members/${id}`;

  return (
    <Container sx={{ alignContent: "center", marginTop: 3 }}>
      <ResponsiveDrawer>
        <MemberForm apiEndpoint={path} action={action} />
      </ResponsiveDrawer>
    </Container>
  );
}

export default EditMember;
