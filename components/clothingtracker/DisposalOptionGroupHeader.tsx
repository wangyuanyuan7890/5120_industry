import React from "react"
import styles from "@/styles/components/clothingtracker/DisposalOptionGroupHeader.module.scss"

export default function DisposalOptionGroupHeader({ wearCount, limit, type }) {
  const wearsLeft = limit - wearCount
  return (
    <div>
      <span className={styles.text}>
        You&apos;ve worn this clothing item{" "}
        <span className={styles.bold}>{wearCount}</span> time
        {wearCount > 1 && "s"} and your usage is considered{" "}
        <span className={styles.bold}>{type}</span>
        {limit !== null ? (
          <span>
            , wear it another <span className={styles.bold}>{wearsLeft}</span>{" "}
            time
            {wearsLeft > 1 && "s"} to hit the next sustainability goal.
          </span>
        ) : (
          <span>.</span>
        )}
      </span>
    </div>
  )
}
