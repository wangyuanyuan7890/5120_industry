import React from "react"
import styles from "@/styles/components/materials/InfoGroup.module.scss"

import BClockImage from "@/public/materials/biodegradability/clock.svg"
import BGasImage from "@/public/materials/biodegradability/gas.svg"
import BLightImage from "@/public/materials/biodegradability/light.svg"
import BRainImage from "@/public/materials/biodegradability/rain.svg"
import BTubeImage from "@/public/materials/biodegradability/tube.svg"

import SCo2Image from "@/public/materials/sustainability/co2.svg"
import SEthical1Image from "@/public/materials/sustainability/ethical_1.svg"
import SEthical2Image from "@/public/materials/sustainability/ethical_2.svg"
import SPipeImage from "@/public/materials/sustainability/pipe.svg"
import SRainImage from "@/public/materials/sustainability/rain.svg"

export default function InfoGroup() {
  return (
    <div className={styles.info_group}>
      <div className={styles.factor_group}>
        <span className={styles.factor_text}>Biodegradability factors</span>
        <div className={styles.image_group}>
          <div className={styles.image_container}>
            <BTubeImage />
            <span className={styles.image_text}>Composition</span>
          </div>
          <div className={styles.image_container}>
            <BClockImage />
            <span className={styles.image_text}>Breakdown time</span>
          </div>
          <div className={styles.image_container}>
            <BRainImage />
            <span className={styles.image_text}>Water reliance</span>
          </div>
          <div className={styles.image_container}>
            <BLightImage />
            <span className={styles.image_text}>Light reliance</span>
          </div>
          <div className={styles.image_container}>
            <BGasImage />
            <span className={styles.image_text}>Oxygen reliance</span>
          </div>
        </div>
      </div>
      <div className={styles.factor_group}>
        <span className={styles.factor_text}>Sustainability factors</span>
        <div className={styles.image_group}>
          <div className={styles.image_container}>
            <div className={styles.image_group}>
              <SEthical1Image />
              <SEthical2Image />
            </div>
            <span className={styles.image_text}>Ethical</span>
          </div>
          <div className={styles.image_container}>
            <SCo2Image />
            <span className={styles.image_text}>Emissions</span>
          </div>
          <div className={styles.image_container}>
            <SRainImage />
            <span className={styles.image_text}>Water pollution</span>
          </div>
          <div className={styles.image_container}>
            <SPipeImage />
            <span className={styles.image_text}>Water usage</span>
          </div>
        </div>
      </div>
    </div>
  )
}
