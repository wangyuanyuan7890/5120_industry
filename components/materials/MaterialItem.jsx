import React from "react"
import styles from "@/styles/components/materials/MaterialItem.module.scss"

import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline"
import HighlightOffIcon from "@mui/icons-material/HighlightOff"

export default function MaterialItem({ material }) {
  const getMaterialName = (material) => {
    return material.charAt(0).toUpperCase() + material.slice(1)
  }

  return (
    <div className={styles.item_wrapper}>
      <div className={styles.content}>
        <span className={styles.title}>
          {getMaterialName(material.material)}
        </span>
        <span className={styles.description}>{material.description}</span>
        <div className={styles.suggestion}>
          <span className={styles.subtitle}>Suggestion</span>
          <span>{material.suggestion}</span>
        </div>
      </div>
      <div className={styles.stats}>
        <div className={styles.stat_item}>
          <span className={styles.label}>Biodegradable</span>
          {material.biodegradable ? (
            <CheckCircleOutlineIcon color="success" className={styles.icon} />
          ) : (
            <HighlightOffIcon color="error" className={styles.icon} />
          )}
        </div>
        <div className={styles.stat_item}>
          <span className={styles.label}>Sustainable</span>
          {material.ethical_sustainability >= 0.6 ? (
            <CheckCircleOutlineIcon color="success" className={styles.icon} />
          ) : (
            <HighlightOffIcon color="error" className={styles.icon} />
          )}
        </div>
      </div>
    </div>
  )
}
