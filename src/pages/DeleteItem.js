import React from "react";
import { useParams } from "react-router-dom";

function DeleteItem({ api }) {
  const { id } = useParams();
  const [endpoint, setEndpoint] = React.useState(`${api}${id}/delete`);

  console.log(endpoint);
  return <div>{`To delete ${id}`}</div>;
}

export default DeleteItem;
