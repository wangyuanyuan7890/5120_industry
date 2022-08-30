import React from "react"
import styles from "@/styles/components/Footer.module.scss"

export default function Footer() {
  return (
    <div className={styles.footer}>
      <span>
        Copyright © <span className={styles.highlight}>Ecofash.rocks</span>{" "}
        2022. All rights reserved.
      </span>
    </div>
  )
}
