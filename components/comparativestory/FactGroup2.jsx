import styles from "@/styles/components/comparativestory/FactSingle.module.scss"
import Fact from "../comparativestory/Fact_Medium"
import WaterIcon from "@/public/comparativestory/water_pollution_fact.svg"

export default function FactGroup2() {
  return (
    <div className={styles.fact_group}>
      <Fact
        stat="20%"
        image={<WaterIcon className={styles.fact_icon} />}
        text="of all industrial water pollution is due to the fashion industry"
      />
    </div>
  )
}
