import Typography from "@mui/material/Typography";
import { ResponsiveLine } from "@nivo/line";
import React from "react";
import { fetchData } from "../utils";
import { useNavigate } from "react-router-dom";

export function BalanceOverTimeLineChart({ api }) {
  const [balanceOverTimeEndpoint] = React.useState(
    `${api}analytics/balances-series`
  );
  const [data, setData] = React.useState([]);
  const navigation = useNavigate();

  React.useEffect(() => {
    fetchData(balanceOverTimeEndpoint, "GET")
      .then((r) => {
        setData([r]);
      })
      .catch((error) => {
        if (error.status === 404) {
          navigation("/404");
        }
      });
  }, []);

  return (
    <>
      <Typography>Balance Amount Over Time</Typography>
      <ResponsiveLine
        data={data}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        colors={{ scheme: "category10" }}
        xScale={{ type: "point" }}
        yScale={{
          type: "linear",
          min: "auto",
          max: "auto",
          stacked: false,
          reverse: false,
        }}
        curve="catmullRom"
        axisTop={null}
        axisRight={null}
        axisBottom={{
          orient: "bottom",
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "Date",
          legendOffset: 36,
          legendPosition: "middle",
        }}
        axisLeft={{
          orient: "left",
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "Value",
          legendOffset: -40,
          legendPosition: "middle",
        }}
        enableGridX={false}
        enableGridY={true}
        lineWidth={2}
        enablePoints={true}
        pointSize={6}
        pointColor={{ theme: "background" }}
        pointBorderWidth={2}
        pointBorderColor={{ from: "serieColor" }}
        enableArea={false}
        useMesh={true}
        animate
        motionConfig="wobbly"
        // legends={[
        //   {
        //     anchor: "bottom-right",
        //     direction: "column",
        //     justify: false,
        //     translateX: 100,
        //     translateY: 0,
        //     itemsSpacing: 0,
        //     itemDirection: "left-to-right",
        //     itemWidth: 80,
        //     itemHeight: 20,
        //     itemOpacity: 0.75,
        //     symbolSize: 12,
        //     symbolShape: "circle",
        //     symbolBorderColor: "rgba(0, 0, 0, .5)",
        //     effects: [
        //       {
        //         on: "hover",
        //         style: {
        //           itemBackground: "rgba(0, 0, 0, .03)",
        //           itemOpacity: 1,
        //         },
        //       },
        //     ],
        //   },
        // ]}
      />
    </>
  );
}
