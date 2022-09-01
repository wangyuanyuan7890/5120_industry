import React from "react"
import styles from "@/styles/components/lifecycle/CycleStep.module.scss"
import LinkButton from "../LinkButton"
import { Button } from "@mui/material"

export default function CycleStep({
  children,
  title,
  subtitle,
  description,
  linkText,
  linkHref,
  handleNext,
  handleBack,
}) {
  return (
    <div className={styles.tab}>
      <div className={styles.header}>
        <span className={styles.title}>{title}</span>
        <span className={styles.subtitle}>{subtitle}</span>
      </div>
      <span className={styles.description}>{description}</span>
      {children}
      <div className={styles.action_group}>
        <div className={styles.start_group}>
          {linkText && linkHref && (
            <LinkButton text={linkText} href={linkHref} />
          )}
        </div>
        <div className={styles.end_group}>
          <Button
            variant="text"
            className={styles.buttonTransparent}
            onClick={handleBack}
          >
            Back
          </Button>
          <Button
            variant="contained"
            className={styles.button}
            onClick={handleNext}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  )
}
