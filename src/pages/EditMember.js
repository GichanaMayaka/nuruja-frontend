import React from "react";
import { useParams } from "react-router-dom";
import MemberForm from "../components/MemberForm";
import BasePage from "../components/BasePage";

function EditMember({ api }) {
  const action = "edit";
  const { id } = useParams();
  const [path] = React.useState(`${api}members/${id}`);

  return (
    <BasePage>
      <MemberForm apiEndpoint={path} action={action} />
    </BasePage>
  );
}

export default EditMember;
