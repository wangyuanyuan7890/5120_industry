import React, { useEffect, useState } from "react"
import Page from "@/components/Page"
import { Container } from "@mui/system"
import Hero from "@/components/Hero"

import styles from "@/styles/pages/clothingtracker/Summary.module.scss"
import { fetchClothingItems } from "@/util/clothingtracker"
import SummaryTable from "@/components/clothingtracker/SummaryTable"
import SummaryChartGroup from "@/components/clothingtracker/SummaryChartGroup"
import LinkButton from "@/components/LinkButton"

import ClothingImage from "@/public/clothingtracker/clothing.svg"

import Link from "next/link"

const breadcrumbs = [
  { label: "Wardrobe", href: "/clothingtracker" },
  { label: "Summary" },
]

// summary of clothing tracker items
export default function Summary() {
  const [clothingItems, setClothingItems] = useState([])

  // loads json clothing data from local storage
  useEffect(() => {
    const items = fetchClothingItems()
    setClothingItems(items)
  }, [])

  return (
    <Page title="Sustainable wardrobe summary">
      <Container maxWidth="lg">
        <Hero
          title="Sustainable wardrobe summary"
          description="A sustainability dashboard of your Ecofash wardrobe."
          breadcrumbs={breadcrumbs}
        />
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
      <Container maxWidth="lg" sx={{ marginTop: "1em" }}>
        <div className={styles.links}>
          <span className={styles.link_title}>
            See the following for more information about your materials
          </span>
          <ul>
            <li className={styles.link_text}>
              <Link href="/materials">
                <span className={styles.link_color}>Material checker</span>
              </Link>
            </li>
          </ul>
        </div>
      </Container>
    </Page>
  )
}
