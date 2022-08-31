import Page from "@/components/Page"
import { Container } from "@mui/system"
import Hero from "@/components/Hero"

import styles from "@/styles/pages/Lifecycle.module.scss"
import CycleStep from "@/components/lifecycle/CycleStep"
import { useState } from "react"
import { Step, StepButton, StepLabel, Stepper, Tab, Tabs } from "@mui/material"

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
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et felis maximus, blandit tortor et, posuere ante. Donec viverra dictum felis id gravida. Nunc nibh est, tincidunt non accumsan eget, lobortis eget enim."
          />
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
                />
              )
          })}
        </div>
      </Container>
    </Page>
  )
}
