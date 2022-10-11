import Hero from "@/components/Hero"
import Page from "@/components/Page"
import { Container } from "@mui/system"
import { useEffect, useState } from "react"

import ClothingTable from "@/components/clothingtracker/ClothingTable"
import LinkButton from "@/components/LinkButton"
import styles from "@/styles/pages/Clothingtracker.module.scss"
import { fetchClothingItems } from "@/util/clothingtracker"

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
    <Page title="Sustainable Wardrobe">
      <Container maxWidth="lg">
        <Hero
          title="How eco-friendly is your wardrobe?"
          description="Keep track of your clothing items to see how sustainable your wardrobe is and how to properly dispose of your clothing items."
        >
          <>
            <div className={styles.hero_divider}>
              <ul>
                <li>
                  <span style={{ fontWeight: "bold" }}>Add</span> a new clothing
                  item
                </li>
                <li>
                  Enter a <span style={{ fontWeight: "bold" }}>name</span> for
                  your clothing item, the{" "}
                  <span style={{ fontWeight: "bold" }}>type</span>, a list of{" "}
                  <span style={{ fontWeight: "bold" }}>materials</span> and the
                  rough <span style={{ fontWeight: "bold" }}>wear count</span>{" "}
                  for the lifetime of that clothing item
                </li>
                <li>
                  If you want to dispose of an item click the{" "}
                  <span style={{ fontWeight: "bold" }}>recycling</span> icon to
                  see our disposal tool and get advice on how to get rid of that
                  item
                </li>
                <li>
                  Then click the{" "}
                  <span style={{ fontWeight: "bold" }}>your impact</span> button
                  to view how eco-friendly you are
                </li>
              </ul>
              {clothingItems.length > 0 && (
                <div className={styles.action_group}>
                  <LinkButton
                    text="Your impact"
                    href="/clothingtracker/summary"
                    icon={<DescriptionIcon />}
                  />
                </div>
              )}
            </div>
          </>
        </Hero>
      </Container>
      <Container maxWidth="lg">
        <ClothingTable
          clothingItems={clothingItems}
          setClothingItems={setClothingItems}
        />
      </Container>
      {clothingItems.length > 0 && (
        <Container
          maxWidth="lg"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "1em",
          }}
        >
          <LinkButton
            text="Your impact"
            href="/clothingtracker/summary"
            icon={<DescriptionIcon />}
          />
        </Container>
      )}
    </Page>
  )
}
