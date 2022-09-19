import React, { useEffect, useState } from "react"
import styles from "@/styles/components/clothingtracker/SummaryChartGroup.module.scss"

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js"
import { Pie } from "react-chartjs-2"
import { Typography } from "@mui/material"
import { isBiodegradable, isSustainable } from "./SummaryTable"

ChartJS.register(ArcElement, Tooltip, Legend)

// shows the charts for summary page which break down the tracked clothing
export default function SummaryChartGroup({ clothingItems }) {
  // generates data set for wear count
  const prepareWearCountData = () => {
    const labels: string[] = clothingItems.map((x: ClothingItem) => x.name)
    const datasetData: number[] = clothingItems.map(
      (x: ClothingItem) => x.wearCount
    )
    const { backgroundColors, borderColors } = generateColors(
      clothingItems.length
    )
    const data = {
      labels,
      datasets: [
        {
          data: datasetData,
          backgroundColor: backgroundColors,
          borderColor: borderColors,
          borderWidth: 1,
        },
      ],
    }
    return data
  }

  // generates data set for biodegradability
  const prepareBiodegradabilityData = () => {
    const labels: string[] = ["Biodegradable", "Non-biodegradable"]
    let biodegradable = 0
    let nonBiodegradable = 0
    clothingItems.map((x: ClothingItem) => {
      const value = isBiodegradable(x.materials)
      if (value) biodegradable += 1
      else nonBiodegradable += 1
    })
    const total = biodegradable + nonBiodegradable
    biodegradable = parseFloat(((biodegradable / total) * 100).toFixed(2))
    nonBiodegradable = parseFloat(((nonBiodegradable / total) * 100).toFixed(2))
    const data = {
      labels,
      datasets: [
        {
          data: [biodegradable, nonBiodegradable],
          backgroundColor: ["rgba(60, 179, 113, 0.4)", "rgba(255, 0, 0, 0.4)"],
          borderColor: ["rgba(60, 179, 113, 1)", "rgba(255, 0, 0, 1)"],
          borderWidth: 1,
        },
      ],
    }
    return data
  }

  // generates data set for sustainability
  const prepareSustainabilityData = () => {
    const labels: string[] = ["Sustainable", "Non-sustainable"]
    let sustainable = 0
    let nonSustainable = 0
    clothingItems.map((x: ClothingItem) => {
      const value = isSustainable(x.materials)
      if (value) sustainable += 1
      else nonSustainable += 1
    })
    const total = sustainable + nonSustainable
    sustainable = parseFloat(((sustainable / total) * 100).toFixed(2))
    nonSustainable = parseFloat(((nonSustainable / total) * 100).toFixed(2))
    const data = {
      labels,
      datasets: [
        {
          data: [sustainable, nonSustainable],
          backgroundColor: ["rgba(60, 179, 113, 0.4)", "rgba(255, 0, 0, 0.4)"],
          borderColor: ["rgba(60, 179, 113, 1)", "rgba(255, 0, 0, 1)"],
          borderWidth: 1,
        },
      ],
    }
    return data
  }

  // generates random color set for data
  const generateColors = (length: number) => {
    const backgroundColors: string[] = []
    const borderColors: string[] = []
    for (let index = 0; index < length; index++) {
      const r = Math.floor(Math.random() * 255)
      const g = Math.floor(Math.random() * 255)
      const b = Math.floor(Math.random() * 255)
      const backgroundOpacity = 0.4
      const borderOpacity = 1
      backgroundColors.push(
        "rgba(" + r + "," + g + "," + b + "," + backgroundOpacity + ")"
      )
      borderColors.push(
        "rgba(" + r + "," + g + "," + b + "," + borderOpacity + ")"
      )
    }
    return { backgroundColors, borderColors }
  }

  return (
    <div className={styles.chart_group_wrapper}>
      <div className={styles.chart_container}>
        <Typography variant="h6" textAlign="center">
          Wear count
        </Typography>
        <Pie data={prepareWearCountData()} options={noLegendOptions} />
      </div>
      <div className={styles.chart_container}>
        <Typography variant="h6" textAlign="center">
          Overall biodegradability %
        </Typography>
        <Pie data={prepareBiodegradabilityData()} />
      </div>
      <div className={styles.chart_container}>
        <Typography variant="h6" textAlign="center">
          Overall sustainability %
        </Typography>
        <Pie data={prepareSustainabilityData()} />
      </div>
    </div>
  )
}

const noLegendOptions = {
  plugins: {
    legend: {
      display: false,
    },
  },
}
