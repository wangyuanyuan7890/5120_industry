import React from "react"
import styles from "@/styles/components/home/Fact.module.scss"

export default function Fact({ stat, image, text }) {
  return (
    <div className={styles.fact}>
      <div className={styles.stat}>
        <span className={styles.title}>{stat}</span>
        {image}
      </div>
      <span className={styles.text}>{text}</span>
    </div>
  )
}
