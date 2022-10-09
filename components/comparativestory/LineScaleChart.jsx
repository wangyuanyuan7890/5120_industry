import React from "react"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js"
import { Line } from "react-chartjs-2"
import { SustainableData } from "../../data/SustainableExpValues"
import { VictorianSustainableData } from "../../data/VicSustainableExpValues"

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

const susData = SustainableData.map((a) => a.exp1)
const vicData = VictorianSustainableData.map((a) => a.exp1)

// console.log(susData)

// options to style the line chart
export const options = {
  scales: {
    yAxis: {
      ticks: {
        min: 0,
        max: 10,
        stepSize: 1,
        callback: function (label, index, labels) {
          switch (label) {
            case 0:
              return "0"
            case 1:
              return "1"
            case 2:
              return "2"
            case 3:
              return "3"
            case 4:
              return "4"
            case 5:
              return "5"
            case 6:
              return "6"
            case 7:
              return "7"
            case 8:
              return "8"
            case 9:
              return "9"
            case 10:
              return "10+"
          }
        },
      },
    },
  },
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Renewal Trends Overtime",
    },
  },
}

export default function LineScaleChart(props) {
  const renewCount = props.data > 10 ? 10 : props.data

  const data = {
    labels: ["", "", "", "", "", "", "", "", "", "", "", ""],
    datasets: [
      {
        data: susData,
        backgroundColor: "transparent",
        borderColor: "#006400",
        label: "Sustainable trend",
      },
      {
        data: vicData,
        backgroundColor: "transparent",
        borderColor: "#b22222",
        label: "Avg Victorian",
      },
      {
        data: [
          renewCount,
          renewCount,
          renewCount,
          renewCount,
          renewCount,
          renewCount,
          renewCount,
          renewCount,
          renewCount,
          renewCount,
          renewCount,
          renewCount,
        ],
        backgroundColor: "transparent",
        borderColor: "#000000",
        label: "Your Count",
      },
    ],
  }

  return <Line options={options} data={data} />
}
