import React from "react"
import styles from "@/styles/components/home/FactGroup.module.scss"
import Fact from "./Fact"
import Co2Icon from "@/public/home/co2_fact.svg"
import TextilesIcon from "@/public/home/textiles_fact.svg"
import WasteIcon from "@/public/home/waste_fact.svg"

export default function FactGroup() {
  return (
    <div className={styles.fact_group}>
      <Fact
        stat="95%"
        image={<Co2Icon className={styles.fact_icon} />}
        text="95% of textiles that are in landfill can be recycled"
      />
      <Fact
        stat="10%"
        image={<TextilesIcon className={styles.fact_icon} />}
        text="10% of emissions come from the fashion industry"
      />
      <Fact
        stat="27kg"
        image={<WasteIcon className={styles.fact_icon} />}
        text="27kg of clothing is wasted by the average Victorian per year"
      />
    </div>
  )
}
