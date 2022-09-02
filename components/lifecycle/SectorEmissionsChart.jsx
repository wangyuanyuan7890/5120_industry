import React from "react"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js"
import { Bar } from "react-chartjs-2"
import {
  SectorEmissionLabels,
  SectorEmissionData,
} from "@/data/SectorEmissions"

// Register components for stacked bar chart
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

// Setup options for chart
const options = {
  plugins: {
    title: {
      display: true,
      text: "Victorian Co2 emissions by sector (tonnes per capita)",
    },
  },
  responsive: true,
  scales: {
    x: {
      stacked: true,
    },
    y: {
      stacked: true,
    },
  },
}

// Chart to display for the lifecycle page that shows sector emissions based on different sectors
export default function SectorEmissionsChart() {
  // Filters out data for each sector
  const sector1 = SectorEmissionData.filter((x) => x.sector === "waste")
  const sector2 = SectorEmissionData.filter((x) => x.sector === "agriculture")
  const sector3 = SectorEmissionData.filter(
    (x) => x.sector === "industrial processes"
  )
  const sector4 = SectorEmissionData.filter(
    (x) => x.sector === "manufacturing industries and construction"
  )

  // Extracts values for each year by sector
  const extractValuesByYear = (data) => {
    const obj = {}
    SectorEmissionLabels.map((x) => {
      const v = data.find((y) => x === y.year)
      obj[x] = v.emissions_tonnes_per_capita
    })
    return obj
  }

  const sectorValues1 = extractValuesByYear(sector1)
  const sectorValues2 = extractValuesByYear(sector2)
  const sectorValues3 = extractValuesByYear(sector3)
  const sectorValues4 = extractValuesByYear(sector4)

  // Imports these values into our data set for the chart
  const data = {
    SectorEmissionLabels,
    datasets: [
      {
        label: "Waste",
        data: sectorValues1,
        backgroundColor: "rgb(255, 99, 132)",
      },
      {
        label: "Agriculture",
        data: sectorValues2,
        backgroundColor: "rgb(75, 192, 192)",
      },
      {
        label: "Industrial processes",
        data: sectorValues3,
        backgroundColor: "rgb(53, 162, 235)",
      },
      {
        label: "Manufacturing industries and construction",
        data: sectorValues4,
        backgroundColor: "rgb(136, 3, 252)",
      },
    ],
  }

  return <Bar options={options} data={data} />
}
