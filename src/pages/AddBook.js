import * as React from "react";
import BookForm from "../components/BookForm";
import BasePage from "../components/BasePage";

function AddBook({ api }) {
  const action = "add";
  const [path] = React.useState(`${api}books/new`);

  return (
    <BasePage>
      <BookForm action={action} apiEndpoint={path} />
    </BasePage>
  );
}

export default AddBook;
