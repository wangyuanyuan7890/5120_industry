import Page from "@/components/Page"
import { Container } from "@mui/system"
import LinkButton from "@/components/LinkButton"
import Feature from "@/components/home/Feature"

import FactGroup from "@/components/home/FactGroup"
import SplineContainer from "@/components/home/SplineContainer"
import { useProgress } from "@react-three/drei"
import { useRef } from "react"

import ClothingTrackerIcon from "@/public/home/features/ctracker.svg"
import MaterialCheckerIcon from "@/public/home/features/mchecker.svg"
import LifecycleIcon from "@/public/home/features/lifecycle.svg"
import SustainableLocationsIcon from "@/public/home/features/slocation.svg"
import ComparativeStoryIcon from "@/public/home/features/cstory.svg"
import BgDecorator from "@/public/home/bg_decorator.svg"
import BgDecorator2 from "@/public/home/bg_decorator2.svg"
import WhyUseImage from "@/public/home/whyuse.png"
import { Box, Typography, useMediaQuery } from "@mui/material"
import Image from "next/image"
import PageScrollToTop from "@/components/PageScrollToTop"
import ThreeDRotationIcon from "@mui/icons-material/ThreeDRotation"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"

// Home page design
export default function Home() {
  const target = useRef()
  const { active, loaded, total } = useProgress()
  const isLoaded = !active && total > 0 && loaded === total
  const isMobile = useMediaQuery("(max-width:768px)")

  return (
    <Page title="Home">
      <Box sx={{ position: "relative" }}>
        {!isMobile && (
          <>
            <Box
              sx={{
                position: "absolute",
                top: "50%",
                left: "2em",
                zIndex: -1,
                opacity: 0.75,
                transform: "translate(0, -50%)",
              }}
            >
              <BgDecorator />
            </Box>
            <Box
              sx={{
                position: "absolute",
                top: "50%",
                right: "2em",
                zIndex: -1,
                opacity: 0.75,
                transform: "translate(0, -50%);",
              }}
            >
              <BgDecorator2 />
            </Box>
          </>
        )}
        <Container
          maxWidth="lg"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            padding: "7em 1em 10em 1em",
          }}
        >
          <Typography variant="h2" fontWeight={500} textAlign="center">
            What is your
          </Typography>
          <Typography
            fontWeight={500}
            variant="h2"
            color="#0ac05e"
            sx={{ marginBottom: "0.25em" }}
            textAlign="center"
          >
            clothing footprint?
          </Typography>
          <Typography
            variant="h6"
            sx={{ marginBottom: "0.75em" }}
            textAlign="center"
          >
            Walk the sustainable catwalk and see how eco-friendly you are
            compared to the average Victorian.
          </Typography>
          <LinkButton text="Compare now" href="/comparativestory" />
        </Container>
      </Box>
      <Box sx={{ backgroundColor: "#012c19", padding: "3em 0" }}>
        <Container
          maxWidth="lg"
          sx={{
            display: "grid",
            gridTemplateColumns: !isMobile ? "1fr 1fr" : "1fr",
            columnGap: "2em",
            rowGap: "2em",
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
              their clothing emissions. Whether purchasing or disposing of
              clothing, we try our best to help you make the sustainable
              clothing discisions in order to help take care of our environment.
            </Typography>
          </Box>
          <Box>
            <Image
              priority={true}
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
        <Container
          maxWidth="lg"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ExpandMoreIcon fontSize="large" sx={{ color: "white" }} />
        </Container>
      </Box>
      <Container
        maxWidth="lg"
        ref={target}
        sx={{
          display: "flex",
          flexDirection: "column",
          padding: "3em 0",
        }}
      >
        <Typography variant="h4" sx={{ textAlign: "center" }}>
          Interactive bedroom <ThreeDRotationIcon fontSize="medium" />
        </Typography>
        <Typography
          variant="body1"
          sx={{ textAlign: "center", marginBottom: "1em" }}
        >
          Drag to rotate scene
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
            gridTemplateColumns: !isMobile ? "repeat(3, 1fr)" : "1fr",
            columnGap: "1em",
            rowGap: "1em",
          }}
        >
          <Feature
            title="Sustainable Wardrobe"
            description="See the impact your wardrobe has on the environment and how to properly dispose of your clothing."
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
            description="Find affordable shopping and donate or repair old clothing by exploring our sustainable locations map."
            image={SustainableLocationsIcon}
            link="/sustainablelocations"
          />
          <Feature
            title="Comparative Story"
            description="Compare your behaviours and find out how eco-friendly you are compared to the average Victorian."
            image={ComparativeStoryIcon}
            link="/comparativestory"
          />
        </Container>
      </Box>
      <PageScrollToTop />
    </Page>
  )
}
