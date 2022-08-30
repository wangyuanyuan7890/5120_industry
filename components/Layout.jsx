import React, { useEffect, useState } from "react"
import Nav from "./Nav"

import styles from "@/styles/components/Layout.module.scss"
import Footer from "./Footer"

export default function Layout({ children }) {
  const [stickyNav, setStickyNav] = useState(false)

  useEffect(() => {
    window.addEventListener("scroll", handleStickyNav)
  })

  const handleStickyNav = () => {
    if (window.scrollY >= 1) {
      setStickyNav(true)
    } else {
      setStickyNav(false)
    }
  }

  return (
    <div
      className={`${styles.layout_wrapper} ${
        stickyNav && styles.nav_sticky_padding
      }`}
    >
      <Nav stickyNav={stickyNav} />
      <div className={styles.container_wrapper}>{children}</div>
      <Footer />
    </div>
  )
}
