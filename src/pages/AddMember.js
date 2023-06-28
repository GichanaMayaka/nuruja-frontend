import React from "react";
import BasePage from "../components/BasePage";
import MemberForm from "../components/MemberForm";

function AddMember({ api }) {
  const action = "add";
  const [path] = React.useState(`${api}members/new`);

  return (
    <BasePage>
      <MemberForm action={action} apiEndpoint={path} />
    </BasePage>
  );
}

export default AddMember;
