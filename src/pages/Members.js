import React from "react";
import { Button, Container } from "@mui/material";
import ResponsiveDrawer from "../components/ResponsiveDrawer";
import DataDisplayGrid from "../components/DataDisplayGrid";
import { coreMembersDataGridColumns } from "../components/Scaffold";
import {
  DeleteIconButtonRender,
  EditIconButtonRenderer,
  fetchData,
  RentToIconButtonRenderer,
} from "../components/Utils";
import { useNavigate } from "react-router-dom";

const additionalColumns = [
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
    renderCell: (params) => <DeleteIconButtonRender params={params} />,
    sortable: false,
    editable: false,
    width: 30,
  },
];

function Members({ api }) {
  const [members, setMembers] = React.useState([]);
  const [apiEndpoint, setApiEndpoint] = React.useState(`${api}members`);
  const [isLoading, setIsLoading] = React.useState(true);
  const navigation = useNavigate();
  const membersContextColumns = [
    ...coreMembersDataGridColumns,
    ...additionalColumns,
  ];

  React.useEffect(() => {
    fetchData(apiEndpoint).then((response) => {
      setMembers(response.members);
      setIsLoading(false);
    });
  }, []);

  return (
    <Container sx={{ display: "flex", marginTop: 3 }}>
      <ResponsiveDrawer>
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
      </ResponsiveDrawer>
    </Container>
  );
}

export default Members;
