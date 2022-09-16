import React, { useEffect, useState } from "react"
import Page from "@/components/Page"
import { Container } from "@mui/system"
import Hero from "@/components/Hero"

import styles from "@/styles/pages/Clothingtracker.module.scss"
import { fetchClothingItems, setClothingItems } from "util/clothingtracker"
import ClothingTable from "@/components/clothingtracker/ClothingTable"

export default function ClothingTracker() {
  const [clothingItems, setClothingItems] = useState<ClothingItem[]>([])

  useEffect(() => {}, [])

  return (
    <Page title="Clothing Tracker">
      <Container maxWidth="lg">
        <Hero
          title="How to use clothing tracker"
          description="Track an outfit or your entire wardrobe and get instant feedback based on your entries."
        >
          <ul>
            <li>Create a new clothing record</li>
            <li>
              Enter a type of clothing, custom name, list of materials and
              amount times that clothing has been worn
            </li>
            <li>
              Then click the clothing summary button to see how eco-friendly you
              are!
            </li>
          </ul>
        </Hero>
      </Container>
      <Container maxWidth="lg">
        <ClothingTable
          clothingItems={clothingItems}
          setClothingItems={setClothingItems}
        />
      </Container>
    </Page>
  )
}
