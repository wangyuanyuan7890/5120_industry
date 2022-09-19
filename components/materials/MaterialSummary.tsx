import React, { useEffect, useState } from "react"
import styles from "@/styles/components/materials/MaterialSummary.module.scss"
import { LinearProgress } from "@mui/material"

import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline"
import HighlightOffIcon from "@mui/icons-material/HighlightOff"

const recommendations = {
  sustainable: {
    label: "Sustainable",
    points: [
      "Give the clothing item to a professional recycling company to break down the item, the materials can be reused for other items",
    ],
  },
  unsustainable: {
    label: "Unsustainable",
    points: [
      "Unsustainable have humanitarian, environmental and or unethical animal treatment concerns during production",
      "Recycling and reusing unsustainable clothing will only delay their arrival to the landfill",
    ],
  },
  biodegradable: {
    label: "Biodegradable",
    points: [
      "Biodegradable clothing can be recycled in home compost by chopping it up and burying it",
      "Can deliver biodegradable fabric to a municipal compost site",
    ],
  },
  nonBiodegradable: {
    label: "Non-Biodegradable",
    points: [
      "Non-biodegradable fabrics cannot be broken down by microorganisms and naturally occurring bacteria and on average take 20-200 years to break down in landfill",
    ],
  },
}

export default function MaterialSummary({ materials }) {
  const [calculatedData, setCalculatedData] = useState({
    totalCount: 0,
    biodegradableCount: 0,
    biodegradablePercentage: 0,
    sustainabilityCount: 0,
    sustainabilityPercentage: 0,
  })

  useEffect(() => {
    let biodegradableCount = 0
    let sustainabilityCount = 0
    materials.map((x: Material) => {
      if (x.biodegradable) {
        biodegradableCount += 1
      }
      if (x.sustainability_score >= 0.6) {
        sustainabilityCount += 1
      }
    })

    const data = {
      totalCount: materials.length,
      biodegradableCount,
      biodegradablePercentage: parseFloat(
        ((biodegradableCount / materials.length) * 100).toFixed(2)
      ),
      sustainabilityCount,
      sustainabilityPercentage: parseFloat(
        ((sustainabilityCount / materials.length) * 100).toFixed(2)
      ),
    }

    setCalculatedData(data)
  }, [materials])

  return (
    <div className={styles.summary_wrapper}>
      <span className={styles.title}>Summary</span>
      <div className={styles.summary_container}>
        <PercentageItemGroup data={calculatedData} />
        <RecommendationGroup data={calculatedData} />
      </div>
    </div>
  )
}

function RecommendationGroup({ data }) {
  return (
    <div className={styles.recommendation_group}>
      {data.biodegradablePercentage === 100 ? (
        <Recommendation recommendation={recommendations.biodegradable} />
      ) : (
        <Recommendation recommendation={recommendations.nonBiodegradable} />
      )}
      {data.sustainabilityPercentage >= 60 ? (
        <Recommendation recommendation={recommendations.sustainable} />
      ) : (
        <Recommendation recommendation={recommendations.unsustainable} />
      )}
    </div>
  )
}

function Recommendation({ recommendation }) {
  return (
    <div className={styles.recommendation}>
      <span className={styles.subtitle}>{recommendation.label}</span>
      {recommendation.points.length > 0 && (
        <ul>
          {recommendation.points.map((x) => (
            <li>{x}</li>
          ))}
        </ul>
      )}
    </div>
  )
}

function PercentageItemGroup({ data }) {
  return (
    <div className={styles.percentage_group}>
      <PercentageItem
        title="Biodegradability"
        percentage={data.biodegradablePercentage}
        color={data.biodegradablePercentage === 100 ? "success" : "error"}
      />
      <PercentageItem
        title="Sustainability"
        percentage={data.sustainabilityPercentage}
        color={data.sustainabilityPercentage >= 60 ? "success" : "error"}
      />
    </div>
  )
}

function PercentageItem({ title, percentage, color }) {
  return (
    <div className={styles.percentage_container}>
      <span className={styles.subtitle}>{title}</span>
      <div className={styles.progress_bar}>
        <span className={styles.percentage}>{percentage}%</span>
        <LinearProgress
          variant="determinate"
          value={percentage}
          color={color}
          sx={{ height: "24px", width: "100%", borderRadius: "4px" }}
        />
      </div>
      {color === "success" ? (
        <CheckCircleOutlineIcon color="success" className={styles.icon} />
      ) : (
        <HighlightOffIcon color="error" className={styles.icon} />
      )}
    </div>
  )
}
