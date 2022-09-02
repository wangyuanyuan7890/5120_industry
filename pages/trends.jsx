import React from "react"
import Hero from "@/components/Hero"
import Page from "@/components/Page"
import styles from "@/styles/pages/Trends.module.scss"
import SectorEmissionsChart from "@/components/lifecycle/SectorEmissionsChart"
import { Container } from "@mui/material"

export default function trends() {
  return (
    <Page title="Trends">
      <Container maxWidth="lg">
        <Hero title="Trends" description="Lorem ipsum text" />
        <div className={styles.trend_wrapper}>
          <span className={styles.title}>
            Victorian emission trends (2009-2019)
          </span>
          <span className={styles.description}>
            Victoria emission totals have been decreasing, we must continue to
            reduce these. Explore the emission trends through from Victoria
            between 2009-2019 shown below.
          </span>
          <Container maxWidth="md">
            <div className={styles.chart_wrapper}>
              <SectorEmissionsChart />
            </div>
          </Container>
        </div>
      </Container>
    </Page>
  )
}
