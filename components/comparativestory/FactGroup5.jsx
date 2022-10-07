import styles from "@/styles/components/comparativestory/FactGroup.module.scss"
import Fact from "../home/Fact"
import RecycledMaterialsIcon from "@/public/comparativestory/recycled_materials_fact.svg"
import GarbageTruckIcon from "@/public/comparativestory/garbage_truck_fact.svg"

export default function FactGroup5() {
  return (
    <div className={styles.fact_group}>
      <Fact
        stat="87%"
        image={<RecycledMaterialsIcon className={styles.fact_icon} />}
        text="of raw materials in the textile and apparel industry have not been recycled"
      />
      <Fact
        image={<GarbageTruckIcon className={styles.fact_icon} />}
        text="a garbage truck of textiles is discarded every second"
      />
    </div>
  )
}
