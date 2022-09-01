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

const steps = [
  {
    title: "Reduce",
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et felis maximus, blandit tortor et, posuere ante. Donec viverra dictum felis id gravida. Nunc nibh est, tincidunt non accumsan eget, lobortis eget enim.",
    linkText: "See materials",
    linkHref: "materials",
  },
  {
    title: "Reuse",
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et felis maximus, blandit tortor et, posuere ante. Donec viverra dictum felis id gravida. Nunc nibh est, tincidunt non accumsan eget, lobortis eget enim.",
  },
  {
    title: "Repair",
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et felis maximus, blandit tortor et, posuere ante. Donec viverra dictum felis id gravida. Nunc nibh est, tincidunt non accumsan eget, lobortis eget enim.",
  },
  {
    title: "Recycle",
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et felis maximus, blandit tortor et, posuere ante. Donec viverra dictum felis id gravida. Nunc nibh est, tincidunt non accumsan eget, lobortis eget enim.",
  },
]

export default function Lifecycle() {
  const [activeStep, setActiveStep] = useState(0)

  const handleNext = () => {
    if (activeStep === steps.length - 1) {
      setActiveStep(0)
    } else {
      setActiveStep(activeStep + 1)
    }
  }

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
            description="With the vast emissions of the fashion industry, we can minimise our emissions and harm by following the Sustainable Product Life Cycle. The ideal garmet is ethically sourced, worn many times, repaired to lengthen its use and recycled or desposed of ethically. Explore the stages of this cycle to learn to Reduce, Reuse, Recycle and Repair your garmets. By investing in your wardrobe and mending your clothing, you are ensuring that you can wear the pieces for longer, slowing down how much you consume and making sure that less goes to waste."
          />
        </div>
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
          <span>Product lifecycle</span>
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
                >
                  {activeStep === 0 && (
                    <div className={styles.chart_wrapper}>
                      <span>Chart</span>
                      <span>Text</span>
                    </div>
                  )}
                </CycleStep>
              )
          })}
        </div>
      </Container>
    </Page>
  )
}
