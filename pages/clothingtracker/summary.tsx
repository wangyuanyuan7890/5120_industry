import React, { useEffect, useState } from "react"
import Page from "@/components/Page"
import { Container } from "@mui/system"
import Hero from "@/components/Hero"

import styles from "@/styles/pages/clothingtracker/Summary.module.scss"
import ClothingTable from "@/components/clothingtracker/ClothingTable"
import { fetchClothingItems } from "@/util/clothingtracker"
import SummaryTable from "@/components/clothingtracker/SummaryTable"
import SummaryChartGroup from "@/components/clothingtracker/SummaryChartGroup"
import LinkButton from "@/components/LinkButton"

import ClothingImage from "@/public/clothingtracker/clothing.svg"
import { Button } from "@mui/material"

// summary of clothing tracker items
export default function Summary() {
  const [clothingItems, setClothingItems] = useState([])

  // loads json clothing data from local storage
  useEffect(() => {
    const items = fetchClothingItems()
    setClothingItems(items)
  }, [])

  return (
    <Page title="Clothing tracker summary">
      <Container maxWidth="lg">
        <Hero
          title="Clothing tracker summary"
          description="Sustainable management summary of tracked clothing items."
        >
          <div>
            <LinkButton text="Track clothing" href="/clothingtracker" />
          </div>
        </Hero>
      </Container>
      <Container maxWidth="lg">
        {clothingItems.length <= 0 ? (
          <div className={styles.notfound_container}>
            <ClothingImage className={styles.image} />
            <span className={styles.title}>No clothing items found</span>
            <LinkButton text="Clothing tracker" href="/clothingtracker" />
          </div>
        ) : (
          <>
            <SummaryChartGroup clothingItems={clothingItems} />
            <SummaryTable clothingItems={clothingItems} />
          </>
        )}
      </Container>
    </Page>
  )
}
