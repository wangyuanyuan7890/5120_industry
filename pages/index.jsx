import Page from "@/components/Page"
import { Container } from "@mui/system"
import HomeHeroImage from "@/public/home_hero.svg"
import LifelineLogo from "@/public/companies/lifeline.svg"
import RedCrossLogo from "@/public/companies/red_cross.svg"
import SalvationArmyLogo from "@/public/companies/salvation_army.svg"
import SmithFamilyLogo from "@/public/companies/smith_family.svg"
import LinkButton from "@/components/LinkButton"
import Feature from "@/components/home/Feature"

import styles from "@/styles/pages/Home.module.scss"
import FactGroup from "@/components/home/FactGroup"

// Home page design
export default function Home() {
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
        <div className={styles.company_group}>
          <a href="https://www.lifeline.org.au/">
            <LifelineLogo className={styles.company_logo} />
          </a>
          <a href="https://www.redcross.org.au/">
            <RedCrossLogo className={styles.company_logo} />
          </a>
          <a href="https://www.salvationarmy.org.au/">
            <SalvationArmyLogo className={styles.company_logo} />
          </a>
          <a href="https://www.thesmithfamily.com.au/">
            <SmithFamilyLogo className={styles.company_logo} />
          </a>
        </div>
      </Container>
      <Container maxWidth="lg">
        <FactGroup />
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
