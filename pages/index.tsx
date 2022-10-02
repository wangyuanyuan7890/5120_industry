import Page from "@/components/Page"
import { Container } from "@mui/system"
import HomeHeroImage from "@/public/home_hero.svg"
import LinkButton from "@/components/LinkButton"
import Feature from "@/components/home/Feature"

import styles from "@/styles/pages/Home.module.scss"
import FactGroup from "@/components/home/FactGroup"
import { Suspense, useEffect, useRef, useState } from "react"
import Scene from "@/components/home/SplineScene"
import { OrbitControls, useProgress } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"

// Home page design
export default function Home() {
  useEffect(() => {}, [])

  const target = useRef()
  const { active, loaded, total } = useProgress()
  const isLoaded = !active && total > 0 && loaded === total

  return (
    <Page title="Home">
      <Container maxWidth="lg">
        <div className={styles.hero_wrapper}>
          <HomeHeroImage className={styles.hero_image} />
          <div className={styles.hero}>
            <div className={styles.title}>
              <span>
                Choose <span className={styles.highlight}>Eco</span>
              </span>
              <span>
                <span className={styles.highlight}>Friendly</span> Clothing
              </span>
            </div>
            <span className={styles.description}>
              Ecofash makes finding ethical and sustainable clothing easy. Out
              shopping? Check if an item is sustainable and biodegradable with
              our Material checker.
            </span>
            <div>
              <LinkButton text="Material checker" href="materials" />
            </div>
          </div>
        </div>
      </Container>
      <Container maxWidth="lg">
        <FactGroup />
      </Container>
      <Container maxWidth="lg">
        <div ref={target} className={styles.spline_container}>
          <Suspense fallback={null}>
            <Canvas
              shadows
              flat
              linear
              onCreated={(state) => state.events.connect(target.current)}
            >
              <Scene />
              <OrbitControls
                enableZoom={false}
                enablePan={false}
                minAzimuthAngle={Math.PI * 0.4}
                maxAzimuthAngle={Math.PI * 0.4}
                minPolarAngle={0}
                maxPolarAngle={Math.PI * 0.3}
              />
            </Canvas>
          </Suspense>
        </div>
      </Container>
      <Container maxWidth="lg">
        <div className={styles.feature_wrapper}>
          <div className={styles.feature_group}>
            <Feature
              title="Sustainable Lifecycle"
              linkHref="lifecycle"
              linkText="See lifecycle"
              description="Ensure your clothing follows the four R's of the Sustainable Lifecycle"
            />
            <Feature
              title="Material checker"
              linkHref="materials"
              linkText="Check materials"
              description="Grab a material tag and check if a clothing is sustainability and biodegradability"
            />
            <Feature
              title="Clothing tracker"
              linkHref="clothingtracker"
              linkText="Track clothing"
              description="Unsure if you've worn an item the sustainable 30 times? Use the Wear Tracker to hit this mark"
            />
            <Feature
              title="Find Sustainable and Donation Locations"
              linkHref="sustainablelocations"
              linkText="Browse locations"
              description="Want to shop affordably, donate old clothing, repair old clothing? Explore the opportunities close to you"
            />
            <Feature
              title="Victorian Clothing Trends"
              linkHref="trends"
              linkText="See trends"
              description="Think your clothing is more sustainable than the average Victorian? Compare your behaviours and find out"
            />
          </div>
        </div>
      </Container>
    </Page>
  )
}
