import Typography from "@mui/material/Typography";
import { ResponsiveTreeMap } from "@nivo/treemap";
import React from "react";
import { fetchData } from "../utils";
import { useNavigate } from "react-router-dom";

export function PendingReturnsTreeMap({ api }) {
  const [pendingBalancesEndpoint] = React.useState(
    `${api}analytics/pending-returns`
  );
  const [data, setData] = React.useState({});
  const navigation = useNavigate();

  React.useEffect(() => {
    fetchData(pendingBalancesEndpoint, "GET")
      .then((r) => {
        setData(r);
      })
      .catch((error) => {
        if (error.status === 404) {
          navigation("/404");
        }
      });
  }, []);

  return (
    <>
      <Typography variant="h7">Pending Returns TreeMap</Typography>
      <ResponsiveTreeMap
        data={data}
        identity="username"
        value="balance"
        valueFormat=".02s"
        margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
        colors={{ scheme: "nivo" }}
        labelSkipSize={12}
        labelTextColor={{
          from: "color",
          modifiers: [["darker", 1.2]],
        }}
        label={(e) => e.id + ": " + e.formattedValue + ""}
        parentLabelPosition="top"
        parentLabelTextColor={{
          from: "color",
          modifiers: [["darker", 2]],
        }}
        parentLabelSize={40}
        borderColor={{
          from: "color",
          modifiers: [["darker", 0.1]],
        }}
        animate
        motionConfig="wobbly"
        orientLabels="horizontal"
        tile="squarify"
      />
    </>
  );
}
