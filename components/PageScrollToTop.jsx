import React, { useState, useEffect } from "react"
import ExpandLessIcon from "@mui/icons-material/ExpandLess"

export default function PageScrollToTop() {
  const [showScrollTopButton, setShowScrollTopButton] = useState(false)

  useEffect(() => {
    window.addEventListener("scroll", () => {
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
          onClick={scrollTop}
          sx={{
            position: "fixed",
            bottom: "2em",
            right: "2em",
            height: "50px",
            width: "50px",
            border: "1px solid #000",
            borderRadius: "50%",
            backgroundColor: "#0ac05e",
            color: "black",
            cursor: "pointer",
            padding: "0.5em",
          }}
        />
      )}
    </>
  )
}
