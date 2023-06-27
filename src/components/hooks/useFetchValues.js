import React from "react";
import { fetchData } from "../utils";
import { useNavigate } from "react-router-dom";

function UseFetchValues({ action, endpoint }) {
  const [submitMethod, setSubmitMethod] = React.useState("POST");
  const [data, setData] = React.useState({});
  const navigation = useNavigate();

  React.useEffect(() => {
    if (action.toLowerCase().includes("edit")) {
      setSubmitMethod("PUT");

      fetchData(endpoint)
        .then((response) => {
          if (endpoint.toString().includes("member")) {
            setData({
              username: response.username,
              email: response.email,
              phoneNumber: response.phone_number,
              address: response.address,
            });
          } else if (endpoint.toString().includes("books")) {
            setData({
              title: response.title,
              author: response.author,
              isbn: response.isbn,
              dateOfPublication: new Date(response.date_of_publication),
              status: response.status,
              rentFee: response.rent_fee,
              latePenaltyFee: response.late_penalty_fee,
            });
          }
        })
        .catch((error) => {
          if (error === 404) {
            navigation("/404");
          }
        });
    }
  }, [action, endpoint]);

  return [submitMethod, data];
}

export default UseFetchValues;
