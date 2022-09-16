import React from "react"
import styles from "@/styles/components/Hero.module.scss"

// Generic hero component template
export default function Hero({ title, description, children }) {
  return (
    <div className={styles.hero}>
      <span className={styles.title}>{title}</span>
      {description && <span className={styles.description}>{description}</span>}
      {children}
    </div>
  )
}
