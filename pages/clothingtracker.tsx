import React, { useEffect, useState } from "react"
import Page from "@/components/Page"
import { Container } from "@mui/system"
import Hero from "@/components/Hero"

import styles from "@/styles/pages/Clothingtracker.module.scss"
import { fetchClothingItems } from "@/util/clothingtracker"
import ClothingTable from "@/components/clothingtracker/ClothingTable"
import LinkButton from "@/components/LinkButton"

import DeleteIcon from "@mui/icons-material/Delete"
import DescriptionIcon from "@mui/icons-material/Description"

// keeps track of clothing items
export default function ClothingTracker() {
  const [clothingItems, setClothingItems] = useState<ClothingItem[]>([])

  // loads json clothing data from local storage
  useEffect(() => {
    const items = fetchClothingItems()
    setClothingItems(items)
  }, [])

  return (
    <Page title="Clothing Tracker">
      <Container maxWidth="lg">
        <Hero
          title="How to use the clothing tracker"
          description="Track an outfit or your entire wardrobe and get instant feedback based on your entries."
        >
          <ul>
            <li>Create a new clothing record</li>
            <li>
              Enter a name for your clothing item, the type, a list of materials
              and the amount times that clothing has been worn
            </li>
            <li>
              Then click the view summary button to see how eco-friendly you
              are!
            </li>
          </ul>
          {clothingItems.length > 0 && (
            <div className={styles.action_group}>
              <LinkButton
                text="View summary"
                href="/clothingtracker/summary"
                icon={<DescriptionIcon />}
              />
              <LinkButton
                text="Disposal tool"
                href="/clothingtracker/disposal"
                icon={<DeleteIcon />}
              />
            </div>
          )}
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
