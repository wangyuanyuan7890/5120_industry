import React from "react"
import styles from "@/styles/components/clothingtracker/DisposalOptionGroup.module.scss"
import DisposalOption from "./DisposalOption"
import Link from "next/link"

interface Option {
  title: string
  description: string
}

const mildWearOptions: Option[] = [
  {
    title: "Rewear Clothing",
    description: "Please continue to consume the wear times of this item.",
  },
  {
    title: "Donate",
    description:
      "If you would like to donate this item, please clean it and pack it properly and send it to the donation points/Op Shops, click on the link below to go to the sustainable locations page, which will help you find the suitable locations.",
  },
  {
    title: "Renew",
    description:
      "If you would like to repair this item, click on the link below to go to the sustainable locations page, which will help you find the suitable repair locations.",
  },
]

const highWearOptions: Option[] = [
  {
    title: "Rewear Clothing",
    description:
      "Please continue to consume the wear times of this item until it is completely worn out.",
  },
  {
    title: "Recycle",
    description:
      "Click on the link below to go to the sustainable locations page, which will help you find the suitable recycling point.",
  },
]

export default function DisposalOptionGroup({ clothingItem }) {
  return (
    <div className={styles.option_group}>
      {clothingItem.wearCount >= 0 &&
        clothingItem.wearCount < 20 &&
        mildWearOptions.map((x, index) => (
          <DisposalOption
            key={index}
            title={x.title}
            description={x.description}
          />
        ))}
      {clothingItem.wearCount >= 20 &&
        clothingItem.wearCount <= 30 &&
        highWearOptions.map((x, index) => (
          <DisposalOption
            key={index}
            title={x.title}
            description={x.description}
          />
        ))}
      <div className={styles.links}>
        <span className={styles.link_title}>
          You may also be interested in:
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
