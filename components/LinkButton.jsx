import { Button } from "@mui/material"
import Link from "next/link"
import React from "react"

import styles from "@/styles/components/LinkButton.module.scss"

// Generic link button component template
export default function LinkButton({ text, href }) {
  return (
    <Link href={href} passHref>
      <Button variant="contained" className={styles.link_button}>
        {text}
      </Button>
    </Link>
  )
}
