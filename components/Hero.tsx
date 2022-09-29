import React from "react"
import styles from "@/styles/components/Hero.module.scss"
import { Breadcrumbs, Typography } from "@mui/material"
import Link from "next/link"

// Generic hero component template
export default function Hero({
  title,
  description,
  breadcrumbs = null,
  children = null,
}) {
  console.log(breadcrumbs)
  return (
    <div className={styles.hero}>
      {breadcrumbs && breadcrumbs.length > 0 && (
        <Breadcrumbs>
          {breadcrumbs.map((x: any) =>
            x.href ? (
              <Link href={x.href}>
                <a className={styles.link}>{x.label}</a>
              </Link>
            ) : (
              <Typography color="gray">{x.label}</Typography>
            )
          )}
        </Breadcrumbs>
      )}
      <span className={styles.title}>{title}</span>
      {description && <span className={styles.description}>{description}</span>}
      {children}
    </div>
  )
}
