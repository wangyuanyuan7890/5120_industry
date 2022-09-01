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

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

const options = {
  plugins: {
    title: {
      display: true,
      text: "Victorian Co2 emissions by sector (2009-2019)",
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

export default function SectorEmissionsChart() {
  const sector1 = SectorEmissionData.filter((x) => x.sector === "waste")
  const sector2 = SectorEmissionData.filter((x) => x.sector === "agriculture")
  const sector3 = SectorEmissionData.filter(
    (x) => x.sector === "industrial processes"
  )
  const sector4 = SectorEmissionData.filter(
    (x) => x.sector === "manufacturing industries and construction"
  )

  const extractValuesByYear = (data) => {
    const obj = {}
    SectorEmissionLabels.map((x) => {
      console.log(x)
      const v = data.find((y) => x === y.year)
      obj[x] = v.emissions_tonnes_per_capita
    })
    return obj
  }

  const sectorValues1 = extractValuesByYear(sector1)
  const sectorValues2 = extractValuesByYear(sector2)
  const sectorValues3 = extractValuesByYear(sector3)
  const sectorValues4 = extractValuesByYear(sector4)

  console.log(sectorValues1)
  console.log(SectorEmissionLabels)
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
