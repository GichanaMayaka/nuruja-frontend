import { Container } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import MemberForm from "../components/MemberForm";
import ResponsiveDrawer from "../components/ResponsiveDrawer";

function EditMember({ api }) {
  const action = "edit";
  const { id } = useParams();
  const [path] = React.useState(`${api}members/${id}`);

  return (
    <Container sx={{ alignContent: "center", marginTop: 3 }}>
      <ResponsiveDrawer>
        <MemberForm apiEndpoint={path} action={action} />
      </ResponsiveDrawer>
    </Container>
  );
}

export default EditMember;
