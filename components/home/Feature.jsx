import React, { Component } from "react"
import styles from "@/styles/components/home/Feature.module.scss"
import LinkButton from "../LinkButton"

// Home page feature template to represent a feature in the website
export default function Feature({
  title,
  description,
  linkText,
  linkHref,
  image,
}) {
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
