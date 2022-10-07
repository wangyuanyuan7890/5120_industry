import Page from "@/components/Page"
import { Container } from "@mui/system"
import HomeHeroImage from "@/public/home_hero.svg"
import LinkButton from "@/components/LinkButton"
import Feature from "@/components/home/Feature"

import styles from "@/styles/pages/Home.module.scss"
import FactGroup from "@/components/home/FactGroup"
import { Suspense, useEffect, useRef, useState } from "react"
import Scene from "@/components/home/SplineScene"
import { Bounds, OrbitControls, useProgress } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { Box, CircularProgress, Typography } from "@mui/material"

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
              Ecofash makes identifyng ecofriendly clothing easy. Need somewhere
              to keep track of your clothes? Check our Clothing tracker.
            </span>
            <div>
              <LinkButton text="Clothing tracker" href="clothingtracker" />
            </div>
          </div>
        </div>
      </Container>
      <Container maxWidth="lg">
        <FactGroup />
      </Container>
      <Container maxWidth="lg">
        <div ref={target} className={styles.spline_container}>
          <Suspense
            fallback={
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                  gap: "0.5em",
                  height: "100%",
                }}
              >
                <CircularProgress color="success" size={60} thickness={4} />
                <Typography variant="h6">Loading scene...</Typography>
              </Box>
            }
          >
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
                minPolarAngle={Math.PI / 2 - 0.4}
                maxPolarAngle={Math.PI / 2 + 0.5}
                minAzimuthAngle={Math.PI / 2 + 0.1}
                maxAzimuthAngle={Math.PI - 0.5}
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
