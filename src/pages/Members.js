import React from "react";
import { Button, Container } from "@mui/material";
import ResponsiveDrawer from "../components/ResponsiveDrawer";
import DataDisplayGrid from "../components/DataDisplayGrid";
import { coreMembersDataGridColumns } from "../components/Scaffold";
import {
  AlertRenderer,
  DeleteIconButtonRender,
  EditIconButtonRenderer,
  fetchData,
  RentToIconButtonRenderer,
} from "../components/Utils";
import { useNavigate } from "react-router-dom";
import Typography from "@mui/material/Typography";

function Members({ api }) {
  const [members, setMembers] = React.useState([]);
  const [apiEndpoint] = React.useState(`${api}members`);
  const [isLoading, setIsLoading] = React.useState(true);
  const [requestFailed, setRequestFailed] = React.useState(false);
  const navigation = useNavigate();

  const membersContextColumns = [
    ...coreMembersDataGridColumns,
    {
      field: "edit_icon",
      headerName: "",
      renderCell: (params) => <EditIconButtonRenderer params={params} />,
      sortable: false,
      editable: false,
      width: 30,
    },
    {
      field: "rent_icon",
      headerName: "",
      renderCell: (params) => <RentToIconButtonRenderer params={params} />,
      sortable: false,
      editable: false,
      width: 30,
    },
    {
      field: "delete_icon",
      headerName: "",
      renderCell: (params) => (
        <DeleteIconButtonRender params={params} endpoint={apiEndpoint} />
      ),
      sortable: false,
      editable: false,
      width: 30,
    },
  ];

  React.useEffect(() => {
    fetchData(apiEndpoint)
      .then((response) => {
        setMembers(response.members);
        setIsLoading(false);
      })
      .catch((error) => {
        if (error.status === 404) {
          navigation("/404");
        } else {
          setRequestFailed(true);
        }
      });
  }, []);

  return (
    <Container sx={{ display: "flex", marginTop: 3 }}>
      <ResponsiveDrawer>
        {requestFailed ? (
          <AlertRenderer
            message={"Connection Error"}
            variant={"filled"}
            severity={"warning"}
            title={"Error"}
          />
        ) : (
          <>
            <Typography variant="h6" mb={1}>
              Members
            </Typography>
            <DataDisplayGrid
              data={members}
              columns={membersContextColumns}
              loadingStatus={isLoading}
            />
            <Button
              variant="text"
              color="secondary"
              size="large"
              onClick={() => {
                navigation("new");
              }}
            >
              Add a Member
            </Button>
          </>
        )}
      </ResponsiveDrawer>
    </Container>
  );
}

export default Members;
