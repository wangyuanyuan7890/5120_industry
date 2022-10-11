import React from "react"
import styles from "@/styles/components/comparativestory/FactSmall.module.scss"

export default function Fact_Medium({ stat, image, text }) {
  return (
    <div className={styles.fact}>
      <div className={styles.stat}>
        <span className={styles.title}>{stat}</span>
        {<div className={styles.image}>{image}</div>}
      </div>
      <span className={styles.text}>{text}</span>
    </div>
  )
}
