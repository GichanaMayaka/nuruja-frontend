import React from "react";
import { useParams } from "react-router-dom";
import BookForm from "../components/BookForm";
import BasePage from "../components/BasePage";

function EditBook({ api }) {
  const action = "edit";
  const { id } = useParams();
  const [path] = React.useState(`${api}books/${id}`);

  return (
    <BasePage>
      <BookForm action={action} apiEndpoint={path} />
    </BasePage>
  );
}

export default EditBook;
