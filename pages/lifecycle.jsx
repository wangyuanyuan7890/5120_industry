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
    subtitle:
      "Do something drastic, cut the plastics! Make a difference by reducing waste now.",
    description:
      "When purchasing garments, emissions through production should be a major factor. The components of ethical sustainable garments are raw materials, transport, production, recyclability influence the emissions of a garment over its lifecycle. Sustainable materials have a positive impact on the local and/or global community, ultimately reducing net emissions and waste through all aspects of the garments journey.",
    linkText: "See Trends",
    linkHref: "trends",
  },
  {
    title: "Reuse",
    subtitle:
      "Never refuse to reuse. When you refuse to reuse, its our Earth you abuse.",
    description:
      "The average Victorian yields around 27kg of clothing waste each year! This figure demonstrates the disconnect between consumers and our clothing as the fashion industry moved towards fast production and fast use garments. To counted this disconnect each garment should be worn at least 30 times to reduce this unnecessary waste. Reusing fashion products allows each garment to last longer, significantly reducing the carbon, water and waste footprints of sourcing new garments. Form a connection to your clothes, look after them and compare your wears of your favourite items to your friends.",
  },
  {
    title: "Repair",
    subtitle:
      "When in doubt, do not throw it out! Practice good habits of reparing.",
    description:
      "Repairing, restoring, and salvaging is something previous generations knew all too well. Taking your old shoes to a cobbler or patching over a hole in a shirt takes less than an hour but can lengthen the garments lifetime. By mending your clothing, you are lengthening the garments life, which means you reduce your total amount of waste. This step is where lowering your fashion emissions gets creative, and presents an opportunity to learn a new skill, personalise a garment and connect more with your clothing.",
  },
  {
    title: "Recycle",
    subtitle:
      "Recycle today for a better tomorrow, it is time to take a stand!",
    description:
      "The majority of materials in landfill each year could be recycled! With the rise of the sustainable fashion movement around the world, more and more commercial companies are dedicated to the repair, recycling and reselling of fashion products, while some encourage consumers to resell their unwanted fashion products in exchange for discounts. There are thousands of Victorian second opportunity stores which can resell your donated old clothing. Contact them or any charitable organisations to see if they have recycling opportunities.",
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
            description="With the vast emissions of the fashion industry, we can minimise our emissions and harm by following the Sustainable Product Life Cycle. The ideal garment is ethically sourced, worn many times, repaired to lengthen its use and recycled or disposed of ethically. Explore the stages of this cycle to learn to Reduce, Reuse, Recycle and Repair your garments. By investing in your wardrobe and mending your clothing, you are ensuring that you can wear the pieces for longer, slowing down how much you consume and making sure that less goes to waste."
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
