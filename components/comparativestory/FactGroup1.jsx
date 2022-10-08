import styles from "@/styles/components/comparativestory/FactGroup.module.scss"
import Fact from "../home/Fact"
import HatIcon from "@/public/comparativestory/clothing_use_fact.svg"
import ClothingWornIcon from "@/public/comparativestory/clothing_worn_fact.svg"

export default function FactGroup1() {
  return (
    <div className={styles.fact_group}>
      <Fact
        stat="36%"
        image={<HatIcon className={styles.fact_icon} />}
        text="Clothing use dropped by between 2000 and 2015"
      />
      <Fact
        stat="50%"
        image={<ClothingWornIcon className={styles.fact_icon} />}
        text="of garments in ones wardrobe are worn less than twice"
      />
    </div>
  )
}
