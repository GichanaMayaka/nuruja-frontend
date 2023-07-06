import Typography from "@mui/material/Typography";
import { ResponsivePie } from "@nivo/pie";
import React from "react";
import { fetchData } from "../utils";
import { useNavigate } from "react-router-dom";

export function BooksRentalStatusDonutChart({ api }) {
  const [bookStatusEndpoint] = React.useState(`${api}analytics/book-status`);
  const [data, setData] = React.useState([]);
  const navigation = useNavigate();

  React.useEffect(() => {
    fetchData(bookStatusEndpoint, "GET")
      .then((r) => {
        setData(r.data);
      })
      .catch((error) => {
        if (error.status === 404) {
          navigation("/404");
        }
      });
  }, []);

  return (
    <>
      <Typography>Book Rental Status</Typography>
      <ResponsivePie
        data={data}
        margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
        colors={{ scheme: "nivo" }}
        innerRadius={0.5}
        padAngle={0.7}
        cornerRadius={3}
        activeOuterRadiusOffset={10}
        borderWidth={1}
        borderColor={{ from: "color", modifiers: [["darker", 0.2]] }}
        arcLabel={(e) => e.id + ": " + e.value}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor="#333333"
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: "color" }}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{ from: "color", modifiers: [["darker", 2]] }}
        arcLinkLabelsStraightLength={4}
        animate
        motionConfig="wobbly"
      />
    </>
  );
}
