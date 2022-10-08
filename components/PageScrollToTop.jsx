import React, { useState, useEffect } from "react"
import ExpandLessIcon from "@mui/icons-material/ExpandLess"
import styles from "@/styles/components/PageScrollToTop.module.scss"

export default function PageScrollToTop() {
  const [showScrollTopButton, setShowScrollTopButton] = useState(false)

  useEffect(() => {
    window.addEventListener("scroll", () => {
      console.log(window.screenY)
      if (window.scrollY > 1) {
        setShowScrollTopButton(true)
      } else {
        setShowScrollTopButton(false)
      }
    })
  }, [])

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <>
      {showScrollTopButton && (
        <ExpandLessIcon
          className={styles.top_btn_position}
          onClick={scrollTop}
        />
      )}
    </>
  )
}
