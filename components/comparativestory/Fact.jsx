import React from "react"
import styles from "@/styles/components/comparativestory/Fact.module.scss"

export default function Fact({ stat, image, text }) {
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
