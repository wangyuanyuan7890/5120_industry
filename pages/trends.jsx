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
        <Hero
          title="Trends"
          description="The trends feature utilises visualisations to illustrate the past, present, and emerging trends in the fashion landscape. Explore the visualisations below to learn about your role in dressing for sustainability."
        />
        <div className={styles.trend_wrapper}>
          <span className={styles.title}>
            Victorian emission trends (2009-2019)
          </span>
          <span className={styles.description}>
            With Victorias total emissions on the decline over the last 5 years,
            the fashion industry is falling behind. Explore the emissions of the
            key sectors of the fashion industry in Waste, Agriculture,
            Industrial Processes, and Manufacturing. Hover over the below graph
            to see details about the sectors and click on the labels to toggle
            visibility of each sector.
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
