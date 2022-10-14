import React, { useEffect, useState } from "react"
import styles from "@/styles/components/clothingtracker/SummaryChartGroup.module.scss"

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js"
import { Pie } from "react-chartjs-2"
import { Typography } from "@mui/material"
import { isBiodegradable, isSustainable } from "./SummaryTable"
import { clothingTypes } from "./ClothingTableRow"

ChartJS.register(ArcElement, Tooltip, Legend)

// shows the charts for summary page which break down the tracked clothing
export default function SummaryChartGroup({ clothingItems }) {
  // will check if any items have been worn
  const hasAnyItemsWorn = () => {
    return clothingItems.filter((x) => x.wearCount > 0).length >= 1
  }

  // generates data set for wear count
  const prepareWearCountData = () => {
    const labels: string[] = [
      ...clothingItems
        .sort((a, b) => {
          if (a.type < b.type) return -1
          if (a.type > b.type) return 1
          return 0
        })
        .map((x: ClothingItem) => x.name),
    ]
    const datasetData: number[] = [...clothingItems].map(
      (x: ClothingItem) => x.wearCount
    )
    const { backgroundColors, borderColors } = generateColors(clothingItems)
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
  const generateColors = (clothingItems: ClothingItem[]) => {
    const backgroundColors: string[] = []
    const borderColors: string[] = []
    for (let index = 0; index < clothingItems.length; index++) {
      const type = clothingTypes.find(
        (x) => x.value === clothingItems[index].type
      )
      const backgroundOpacity = "60"
      backgroundColors.push(`${type.color}${backgroundOpacity}`)
      borderColors.push(type.color)
    }
    return { backgroundColors, borderColors }
  }

  return (
    <div className={styles.chart_group_wrapper}>
      <div className={styles.chart_container}>
        <Typography variant="h6" textAlign="center">
          Wear count
        </Typography>
        {hasAnyItemsWorn() ? (
          <Pie
            data={prepareWearCountData()}
            options={noLegendOptions}
            className={styles.chart}
          />
        ) : (
          <Typography variant="body1" textAlign="center" color="error">
            No clothing has been worn
          </Typography>
        )}
      </div>
      <div className={styles.chart_container}>
        <Typography variant="h6" textAlign="center">
          Overall biodegradability %
        </Typography>
        <Pie data={prepareBiodegradabilityData()} className={styles.chart} />
      </div>
      <div className={styles.chart_container}>
        <Typography variant="h6" textAlign="center">
          Overall sustainability %
        </Typography>
        <Pie data={prepareSustainabilityData()} className={styles.chart} />
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
