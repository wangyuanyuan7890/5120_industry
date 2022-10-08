import Page from "@/components/Page"
import { Container } from "@mui/system"
import HomeHeroImage from "@/public/home_hero.svg"
import LinkButton from "@/components/LinkButton"
import Feature from "@/components/home/Feature"

import styles from "@/styles/pages/Home.module.scss"
import FactGroup from "@/components/home/FactGroup"
import SplineContainer from "@/components/home/SplineContainer"
import { useProgress } from "@react-three/drei"
import { useRef } from "react"

import ClothingTrackerIcon from "@/public/home/features/ctracker.svg"
import MaterialCheckerIcon from "@/public/home/features/mchecker.svg"
import LifecycleIcon from "@/public/home/features/lifecycle.svg"
import SustainableLocationsIcon from "@/public/home/features/slocation.svg"
import ComparativeStoryIcon from "@/public/home/features/cstory.svg"
import WhyUseImage from "@/public/home/whyuse.png"
import { Box, Typography } from "@mui/material"
import Image from "next/image"

// Home page design
export default function Home() {
  const target = useRef()
  const { active, loaded, total } = useProgress()
  const isLoaded = !active && total > 0 && loaded === total

  return (
    <Page title="Home">
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          padding: "8em 0",
        }}
      >
        <Typography variant="h2" color="#0ac05e" fontWeight={700}>
          Sustainable shopping
        </Typography>
        <Typography
          variant="h3"
          fontWeight={500}
          sx={{ marginBottom: "0.5em" }}
        >
          has never been more important
        </Typography>
        <Typography variant="h6" sx={{ marginBottom: "0.5em" }}>
          Ecofash empowers all Victorians to dress sustainably in order reduce
          their emissions.
        </Typography>
        <LinkButton text="Clothing tracker" href="/clothingtracker" />
      </Container>
      <Box sx={{ backgroundColor: "#012c19", padding: "3em 0" }}>
        <Container
          maxWidth="lg"
          sx={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            columnGap: "2em",
            marginBottom: "2em",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-start",
              flexDirection: "column",
            }}
          >
            <Typography variant="h5" color="#0ac05e">
              What we&apos;re trying to do
            </Typography>
            <Typography
              variant="body1"
              color="white"
              sx={{ fontSize: "1.2em" }}
            >
              Ecofash empowers all Victorians to dress sustainably and reduce
              their emissions. Whether purchasing or disposing of clothing, we
              try our best to help you make sustainable clothing discisions.
            </Typography>
          </Box>
          <Box>
            <Image
              src={WhyUseImage}
              className="image"
              sizes="100vw"
              style={{ borderRadius: "0.5em" }}
            />
          </Box>
        </Container>
        <Container maxWidth="lg">
          <FactGroup />
        </Container>
      </Box>
      <Container
        maxWidth="lg"
        ref={target}
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "600px",
          padding: "3em 0",
          gap: "1em",
        }}
      >
        <Typography variant="h4" sx={{ textAlign: "center" }}>
          Interactive experience
        </Typography>
        <SplineContainer target={target} />
      </Container>
      <Box sx={{ backgroundColor: "#012c19", padding: "3em 0" }}>
        <Container sx={{ marginBottom: "0.5em" }}>
          <Typography variant="h5" color="white" sx={{ textAlign: "center" }}>
            What we offer
          </Typography>
        </Container>
        <Container
          maxWidth="lg"
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            columnGap: "1em",
            rowGap: "1em",
          }}
        >
          <Feature
            title="Clothing Tracker"
            description="Have you worn your clothing enough? Use our tracker to see how sustainable you are."
            image={ClothingTrackerIcon}
            link="/clothingtracker"
          />
          <Feature
            title="Material Checker"
            description="Grab a material tag and check if a clothing is sustainability and biodegradability."
            image={MaterialCheckerIcon}
            link="/materials"
          />
          <Feature
            title="Lifecycle"
            description="Ensure your clothing follows the four R's of the sustainable lifecycle."
            image={LifecycleIcon}
            link="/lifecycle"
          />
          <Feature
            title="Sustainable Locations"
            description="Want to shop affordably, donate old clothing, repair old clothing? Explore these opportunities close to you."
            image={SustainableLocationsIcon}
            link="/sustainablelocations"
          />
          <Feature
            title="Comparative Story"
            description="Think your clothing is more sustainable than the average Victorian? Compare your behaviours and find out."
            image={ComparativeStoryIcon}
            link="/trends"
          />
        </Container>
      </Box>
    </Page>
  )
}
