import React, { useEffect, useState } from "react"
import Page from "@/components/Page"
import { Container } from "@mui/system"
import Hero from "@/components/Hero"

import styles from "@/styles/pages/clothingtracker/Summary.module.scss"
import ClothingTable from "@/components/clothingtracker/ClothingTable"

export default function Summary() {
  return (
    <Page title="Clothing tracker summary">
      <Container maxWidth="lg">
        <Hero
          title="Clothing tracker summary"
          description="Sustainable management summary of tracked clothing items."
        />
      </Container>
      <Container maxWidth="lg"></Container>
    </Page>
  )
}
