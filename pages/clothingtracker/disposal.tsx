import Hero from "@/components/Hero"
import Page from "@/components/Page"
import { Container } from "@mui/material"
import React from "react"

const breadcrumbs = [
  { label: "Tracker", href: "/clothingtracker" },
  { label: "Disposal tool" },
]

export default function Disposal() {
  return (
    <Page title="Clothing Disposal Tool">
      <Container maxWidth="lg">
        <Hero
          title="Clothing Disposal Tool"
          description="Helping you make sustainable decisions when disposing of clothing."
          breadcrumbs={breadcrumbs}
        ></Hero>
      </Container>
      <Container maxWidth="lg">
        <span>Content</span>
      </Container>
    </Page>
  )
}
