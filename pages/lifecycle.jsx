import Page from "@/components/Page"
import { Container } from "@mui/system"
import Hero from "@/components/Hero"

import styles from "@/styles/pages/Lifecycle.module.scss"
import CycleStep from "@/components/lifecycle/CycleStep"
import { Component, useState } from "react"
import { Step, StepButton, StepLabel, Stepper, Tab, Tabs } from "@mui/material"

import ReduceImage from "@/public/lifecycle/clothing_lifecycle_reduce.svg"
import ReuseImage from "@/public/lifecycle/clothing_lifecycle_reuse.svg"
import RepairImage from "@/public/lifecycle/clothing_lifecycle_repair.svg"
import RecycleImage from "@/public/lifecycle/clothing_lifecycle_recycle.svg"

// Step data for each lifecycle
const steps = [
  {
    title: "Reduce",
    subtitle: "Do something drastic, don't wear microplastic!",
    description:
      "When buying clothing, emissions through production should be a major factor. Sustainable materials have a positive impact on the local and/or global community, ultimately reducing net emissions and waste through all aspects of the clothings journey.",
    linkText: "See Trends",
    linkHref: "trends",
  },
  {
    title: "Reuse",
    subtitle: "When you refuse to reuse, its our Earth you abuse.",
    description:
      "The average Victorian yields around 27kg of clothing waste each year! Each item in your wardrobe should be worn at least 30 times to reduce this unnecessary waste.  Form a connection to your clothes, look after them and compare your wears of your favourite items to your friends.",
    linkText: "Track Clothing",
    linkHref: "clothingtracker",
  },
  {
    title: "Renew",
    subtitle: "Repair or donate, if in doubt don't throw it out!",
    description:
      "Repairing, rehoming, and salvaging clothing is something previous generations knew all too well, when the fashion industries emissions were far lower. This step is where lowering your fashion emissions gets creative. Renewing presents an opportunity to personalise a clothing and further the experience of your clothing.",
    linkText: "Browse Locations",
    linkHref: "map",
  },
  {
    title: "Recycle",
    subtitle: "Recycle today for a better tomorrow!",
    description:
      "The majority of materials in landfill each year could be recycled! More and more commercial companies are dedicated to the repair, recycling and reselling of clothing, while some encourage consumers to resell their unwanted fashion products in exchange for discounts. Victoria also hosts countless textile recycling opportunities.",
    linkText: "Check materials",
    linkHref: "materials",
  },
]

// Lifecycle page that shows the different steps of the product lifecycle
export default function Lifecycle() {
  const [activeStep, setActiveStep] = useState(0)

  // handles going forward a step
  const handleNext = () => {
    if (activeStep === steps.length - 1) {
      setActiveStep(0)
    } else {
      setActiveStep(activeStep + 1)
    }
  }

  // handles going back a step
  const handleBack = () => {
    if (activeStep === 0) {
      setActiveStep(steps.length - 1)
    } else {
      setActiveStep(activeStep - 1)
    }
  }

  return (
    <Page title="Lifecycle">
      <Container maxWidth="lg">
        <div className={styles.hero_wrapper}>
          <Hero
            title="Sustainable product lifecycle"
            description="The Sustainable Product Lifecycle outlines cyclical the stages of a sustainable clothing. Explore the stages of this cycle to learn to Reduce, Reuse, Recycle and Repair your clothing."
          />
          <div className={styles.clothing_lifecycle_wrapper}>
            {activeStep === 0 && (
              <ReduceImage className={styles.clothing_lifecycle} />
            )}
            {activeStep === 1 && (
              <ReuseImage className={styles.clothing_lifecycle} />
            )}
            {activeStep === 2 && (
              <RepairImage className={styles.clothing_lifecycle} />
            )}
            {activeStep === 3 && (
              <RecycleImage className={styles.clothing_lifecycle} />
            )}
          </div>
        </div>
        <div className={styles.step_header}>
          <Stepper nonLinear activeStep={activeStep} className={styles.stepper}>
            {steps.map((step, index) => {
              return (
                <Step key={index}>
                  <StepButton
                    color="inherit"
                    onClick={() => setActiveStep(index)}
                  >
                    {step.title}
                  </StepButton>
                </Step>
              )
            })}
          </Stepper>
        </div>
        <div className={styles.step_container}>
          {steps.map((step, index) => {
            if (index === activeStep)
              return (
                <CycleStep
                  key={index}
                  title={step.title}
                  subtitle={step.subtitle}
                  description={step.description}
                  linkText={step.linkText}
                  linkHref={step.linkHref}
                  handleNext={handleNext}
                  handleBack={handleBack}
                ></CycleStep>
              )
          })}
        </div>
      </Container>
    </Page>
  )
}
