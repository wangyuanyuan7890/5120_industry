import React from "react"
import styles from "@/styles/components/home/Feature.module.scss"
import LinkButton from "../LinkButton"

export default function Feature({ title, description, linkText, linkHref }) {
  return (
    <div className={styles.feature}>
      <span className={styles.title}>{title}</span>
      <span className={styles.description}>{description}</span>
      <div>
        <LinkButton text={linkText} href={linkHref} />
      </div>
    </div>
  )
}
