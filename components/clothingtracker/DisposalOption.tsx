import React from "react"
import styles from "@/styles/components/clothingtracker/DisposalOption.module.scss"

export default function DisposalOption({ title, description }) {
  return (
    <div className={styles.option}>
      <span className={styles.title}>{title}</span>
      <span className={styles.description}>{description}</span>
    </div>
  )
}
