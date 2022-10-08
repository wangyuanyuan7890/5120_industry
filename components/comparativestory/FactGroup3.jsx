import styles from "@/styles/components/comparativestory/FactSingle.module.scss"
import Fact from "../home/Fact"
import CharityShirtIcon from "@/public/comparativestory/charity_clothing_fact.svg"

export default function FactGroup3() {
  return (
    <div className={styles.fact_group}>
      <Fact
        stat="96%"
        image={<CharityShirtIcon className={styles.fact_icon} />}
        text="of donated clothing is used by charities"
      />
    </div>
  )
}
