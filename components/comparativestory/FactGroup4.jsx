import styles from "@/styles/components/comparativestory/FactSingle.module.scss"
import Fact from "../comparativestory/Fact_Medium"
import MicoplasticIcon from "@/public/comparativestory/microplastic_fact.svg"

export default function FactGroup4() {
  return (
    <div className={styles.fact_group}>
      <Fact
        stat="35%"
        image={<MicoplasticIcon className={styles.fact_icon} />}
        text="of all microplastics in the ocean came from the laundering of synthetic textiles like polyster"
      />
    </div>
  )
}
