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
          description="Victorias annual emissions are on the decline as citizens reduce their consumption behaviours. However, these positive behaviours have not followed into the fashion industry. Explore the elements of the Victorian fashion industries consistent emissions.
"
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
