import Page from "@/components/Page"
import Hero from "@/components/Hero"
import { Container } from "@mui/system"
import styles from "@/styles/pages/Opshop.module.scss"
import OpShopsLocation from "../components/opshops/OpShopsLocation"
import { useLoadScript } from "@react-google-maps/api"
import { useState } from "react"

const libraries = ["places"]

export default function SustainableLocations() {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    libraries,
  })

  if (loadError) return "Error loading maps"

  // animate a loading icon with shadows if isLoaded is returns false
  if (!isLoaded)
    return (
      <div className={styles.loading_wrapper}>
        <div className={styles.circle}></div>
        <div className={styles.circle}></div>
        <div className={styles.circle}></div>
        <div className={styles.shadow}></div>
        <div className={styles.shadow}></div>
        <div className={styles.shadow}></div>
      </div>
    )

  // Display the content of the Op shop location map page if isLoaded returns true
  if (isLoaded)
    return (
      <Page title="Sustainable Locations">
        <Container maxWidth="lg">
          <Hero
            title="Sustainable Locations"
            description="Explore the map below to find op shops, recycling, repairing and donating opportunities through locations near you."
          />
        </Container>
        <Container maxWidth="lg">
          <OpShopsLocation />
        </Container>
      </Page>
    )
}
