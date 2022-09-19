import React, { useState } from "react"
import styles from "@/styles/components/materials/MaterialItem.module.scss"

import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline"
import HighlightOffIcon from "@mui/icons-material/HighlightOff"

import AddIcon from "@mui/icons-material/Add"
import RemoveIcon from "@mui/icons-material/Remove"

// Material page item template that shows up when searching for items
export default function MaterialItem({ material }) {
  const [expanded, setExpanded] = useState(false)

  // Toggle expansion for item
  const handleExpandToggle = (e) => {
    setExpanded(!expanded)
  }

  // Gets the name of a material with a capital first character
  const getMaterialName = (name) => {
    return name.charAt(0).toUpperCase() + name.slice(1)
  }
  return (
    <div className={styles.item_wrapper}>
      <div className={styles.content}>
        <span className={styles.title}>
          {expanded ? (
            <RemoveIcon onClick={handleExpandToggle} />
          ) : (
            <AddIcon onClick={handleExpandToggle} />
          )}
          <span>{getMaterialName(material.name)}</span>
        </span>
        {expanded && (
          <>
            <span className={styles.description}>{material.description}</span>
            <div className={styles.suggestion}>
              <span className={styles.subtitle}>Suggestion</span>
              <span>{material.suggestion}</span>
            </div>
          </>
        )}
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
          {material.sustainability_score >= 0.6 ? (
            <CheckCircleOutlineIcon color="success" className={styles.icon} />
          ) : (
            <HighlightOffIcon color="error" className={styles.icon} />
          )}
        </div>
      </div>
    </div>
  )
}
