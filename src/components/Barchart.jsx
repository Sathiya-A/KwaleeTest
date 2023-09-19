import {Chart} from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import { useState} from "react";
export default function Barchart(props){
  const dates = props.filterdata.map(x=> x.Date);
  const xaxisData = Array.from(new Set(dates)).sort(function(a,b){ return new Date(a.Date) - new Date(b.Date)});
  console.log("y axis", props.filterdata.map(x=>x["Daily Users"]))
const [chartData, setChartData] = useState({
  labels: xaxisData, 
  datasets: [
    {
      label: "Daily Users Dashboard ",
      data: props.filterdata.map((data) => data["Daily Users"]),
      backgroundColor: [
        "rgba(75,192,192,1)",
        "#ecf0f1",
        "#50AF95",
        "#f3ba2f",
        "#2a71d0"
      ],
      borderColor: "black",
      borderWidth: 2
    }
  ]
});
  return(
    <div>
      <BarChart chartData={chartData} width="480" height="300"/>
    </div>
  )
}


export const BarChart = ({ chartData }) => {
  return (
    <div className="chart-container">

      <Bar
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
              text: "Daily Users Dashboard"
            },
            legend: {
              display: false
            }
          }
        }}
      />
    </div>
  );
};
