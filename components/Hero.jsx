import React from "react"
import styles from "@/styles/components/Hero.module.scss"

// Generic hero component template
export default function Hero({ title, description }) {
  return (
    <div className={styles.hero}>
      <span className={styles.title}>{title}</span>
      <span className={styles.description}>{description}</span>
    </div>
  )
}
