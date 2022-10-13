import React, { useEffect } from "react"
import styles from "@/styles/components/clothingtracker/DisposalOptionGroup.module.scss"
import DisposalOption from "./DisposalOption"
import Link from "next/link"
import DisposalOptionGroupContainer from "./DisposalOptionGroupContainer"
import DisposalOptionGroupHeader from "./DisposalOptionGroupHeader"
import { Box, useMediaQuery } from "@mui/material"

interface Option {
  title: string
  description: string
}

const options = {
  rewearClothing: {
    // low, medium, high (STATIC?)
    title: "Rewear",
    description: "Please continue to wear this clothing item.",
  },
  donate: {
    // medium, high
    title: "Donate",
    description: "This item is still in okay condition you should donate it.",
  },
  donateOrSell: {
    // low
    title: "Donate or sell",
    description:
      "This item is still in great condition you should donate it or sell it second hand to an op shop.",
  },
  renew: {
    // high
    title: "Renew",
    description:
      "If you really like this item you should get it repaired at a repair location.",
  },
  recycle: {
    // high
    title: "Recycle",
    description:
      "You should consider recycling this item either directly to a recycling point or by giving it to a repair shop that can reuse the materials.",
  },
  waste: {
    // high
    title: "Waste",
    description:
      "This is a last resort and throwing your clothing in the trash may cause environmental harm.",
  },
  compost: {
    // biodegradable
    title: "Compost",
    description:
      "This clothing item is made mostly of natural fibers and can be composted, any synthetic fibers should be removed before composting.",
  },
}

const lowWearOptions = [
  options.rewearClothing,
  options.donateOrSell,
  options.waste,
]
const mediumWearOptions = [
  options.rewearClothing,
  options.donate,
  options.recycle,
  options.waste,
]
const highWearOptions = [
  options.rewearClothing,
  options.donate,
  options.renew,
  options.recycle,
  options.waste,
]

export default function DisposalOptionGroup({ clothingItem }) {
  const isMobile = useMediaQuery("(max-width:768px)")

  return (
    <div className={styles.option_group}>
      {clothingItem.wearCount >= 0 && clothingItem.wearCount < 30 && (
        <>
          <DisposalOptionGroupHeader
            wearCount={clothingItem.wearCount}
            limit={30}
            type="low"
          />
          <DisposalOptionGroupContainer options={lowWearOptions} />
        </>
      )}
      {clothingItem.wearCount >= 30 && clothingItem.wearCount < 60 && (
        <>
          <DisposalOptionGroupHeader
            wearCount={clothingItem.wearCount}
            limit={60}
            type="moderate"
          />
          <DisposalOptionGroupContainer options={mediumWearOptions} />
        </>
      )}
      {clothingItem.wearCount >= 60 && (
        <>
          <DisposalOptionGroupHeader
            wearCount={clothingItem.wearCount}
            limit={null}
            type="high"
          />
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: !isMobile ? "1fr 1fr 1fr" : "1fr",
              columnGap: "1em",
              rowGap: "1em",
            }}
          >
            <DisposalOptionGroupContainer options={highWearOptions} />
            {clothingItem.isBiodegradable && (
              <DisposalOption
                title={options.compost.title}
                description={options.compost.description}
              />
            )}
          </Box>
        </>
      )}
      <div className={styles.links}>
        <span className={styles.link_title}>
          See the following for a map showing op shops, repair, donation and
          recycling locations
        </span>
        <ul>
          <li className={styles.link_text}>
            <Link href="/sustainablelocations">
              <span className={styles.link_color}>Sustainable locations</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}
