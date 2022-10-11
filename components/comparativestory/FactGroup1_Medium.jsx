import styles from "@/styles/components/comparativestory/FactGroup.module.scss"
import Fact_Medium from "../comparativestory/Fact_Medium"
import HatIcon from "@/public/comparativestory/clothing_use_fact.svg"
import ClothingWornIcon from "@/public/comparativestory/clothing_worn_fact.svg"

export default function FactGroup1_Medium() {
  return (
    <div className={styles.fact_group}>
      <Fact_Medium
        stat="36%"
        image={<HatIcon className={styles.fact_icon} />}
        text="Clothing use dropped by between 2000 and 2015"
      />
      <Fact_Medium
        stat="50%"
        image={<ClothingWornIcon className={styles.fact_icon} />}
        text="of garments in ones wardrobe are worn less than twice"
      />
    </div>
  )
}
