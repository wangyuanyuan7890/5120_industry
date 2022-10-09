import React, { useEffect, useState } from "react"
import Nav from "./Nav"

import styles from "@/styles/components/Layout.module.scss"
import Footer from "./Footer"

// Layout for all pages that will incorporate the navbar, content and footers
export default function Layout({ children }) {
  const [stickyNav, setStickyNav] = useState(true)

  // Setup scroll effect to detect when the page scrolls
  useEffect(() => {
    window.addEventListener("scroll", handleStickyNav)
    return () => window.removeEventListener("scroll", handleStickyNav)
  }, [])

  // Changes styles of the navbar when page is scrolled
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
      <Nav stickyNav={stickyNav} setStickyNav={setStickyNav} />
      <div className={styles.container_wrapper}>{children}</div>
      <Footer />
    </div>
  )
}
