import React from "react"
import Nav from "./Nav"

import styles from "@/styles/components/Layout.module.scss"

export default function Layout({ children }) {
  return (
    <div className={styles.layout_wrapper}>
      <Nav />
      <div className={styles.container_wrapper}>{children}</div>
    </div>
  )
}
