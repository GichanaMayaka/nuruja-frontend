import React from "react";
import { Container } from "@mui/material";
import ResponsiveDrawer from "../components/ResponsiveDrawer";
import DataDisplayGrid from "../components/DataDisplayGrid";
import { coreMembersDataGridColumns } from "../components/dataProvider";
import {
  DeleteIconButtonRender,
  EditIconButtonRenderer,
  fetchData,
  RentToIconButtonRenderer,
} from "../components/Utils";

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

export const Members = ({ api }) => {
  const [members, setMembers] = React.useState([]);
  const [apiEndpoint, setApiEndpoint] = React.useState(`${api}members`);
  const [isLoading, setIsLoading] = React.useState(true);
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
    <Container>
      <ResponsiveDrawer>
        <DataDisplayGrid
          data={members}
          columns={membersContextColumns}
          loadingStatus={isLoading}
        />
      </ResponsiveDrawer>
    </Container>
  );
};
