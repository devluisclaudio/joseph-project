import * as React from "react";
import { BarChart } from "@mui/x-charts/BarChart";

export default function BasicBars() {
  const data = [
    {
      ano: "2014",
      media: 239.12985320854187,
    },
    {
      ano: "2015",
      media: 104.55987190492526,
    },
    {
      ano: "2016",
      media: 188.407253289871,
    },
    {
      ano: "2017",
      media: 260.5025580123052,
    },
    {
      ano: "2018",
      media: 116.1361613350144,
    },
    {
      ano: "2019",
      media: 73.58739410496965,
    },
    {
      ano: "2020",
      media: 7.529426804640643,
    },
  ];
  const years = data.map((obj) => obj.ano);
  const tempmedias = data.map((obj) => {
    return [{ data: [obj.media] }];
  });

  const medias = tempmedias[0];

  console.log(medias);
  return (
    <BarChart
      dataset={data}
      xAxis={[{ scaleType: "band", dataKey: 'ano' }]}
      series={[{dataKey: 'media'}]}
      width={500}
      height={300}
    />
  );
}
