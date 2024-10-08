import * as React from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import service from "@/app/services/datasetHome";

export default function BasicBars() {
  const [values, setValues] = React.useState([]);
  React.useEffect(() => {
    service.chart().then(({ data }) => setValues(data));
  }, []);

  return (
    <BarChart
      dataset={values}
      xAxis={[{ scaleType: "band", dataKey: "ano" }]}
      series={[{ dataKey: "media",  label: 'Average amount of water per year in millimeters' }]}
      width={500}
      height={400}
      borderRadius={10}
    />
  );
}
