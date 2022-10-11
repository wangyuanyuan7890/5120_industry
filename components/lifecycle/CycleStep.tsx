import React from "react"
import styles from "@/styles/components/lifecycle/CycleStep.module.scss"
import LinkButton from "../LinkButton"
import { Button } from "@mui/material"
import ChevronRightIcon from "@mui/icons-material/ChevronRight"
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft"
import Link from "next/link"

// Lifecycle page cycle steps - shows when you click a tab and shows data for each step
export default function CycleStep({
  children,
  title,
  subtitle,
  description,
  image,
  links,
  handleNext,
  handleBack,
}) {
  return (
    <div className={styles.tab}>
      <main className={styles.main}>
        <section className={styles.main_content}>
          <div className={styles.header}>
            <span className={styles.title}>{title}</span>
            <span className={styles.subtitle}>{subtitle}</span>
          </div>
          <span className={styles.description}>{description}</span>
          {children}
          <div className={styles.links}>
            <span className={styles.link_title}>
              You may also be interested in
            </span>
            <ul>
              {links.map((x, index) => (
                <li className={styles.link_text} key={index}>
                  <Link href={x.href}>
                    <span className={styles.link_color}>{x.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
        <section className={styles.image_content}>{image}</section>
      </main>
      <div className={styles.action_group}>
        <Button
          variant="text"
          className={styles.buttonTransparent}
          onClick={handleBack}
          startIcon={<ChevronLeftIcon />}
        >
          Back
        </Button>
        <Button
          variant="contained"
          className={styles.button}
          onClick={handleNext}
          endIcon={<ChevronRightIcon />}
        >
          Next
        </Button>
      </div>
    </div>
  )
}
