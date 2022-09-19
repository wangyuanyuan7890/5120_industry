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
              Ecofash makes finding ethical and sustainable clothing easy. We
              aim to educate and inspire young Victorians to make better
              environmental fashion choices to reduce their emissions.
            </span>
            <div>
              <LinkButton text="Learn more" href="lifecycle" />
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
              title="Lifecycle"
              linkHref="lifecycle"
              linkText="See lifecycle"
              description="The growth of the 'Fast Fashion' market has left our wardrobes full of unsustainable products. Hope is not lost! Follow the Reduce, Reuse, Repair and Recycle guidelines of the Sustainable Product Lifecycle to minimise the emsissions and harm of your garmets."
            />
            <Feature
              title="Material checker"
              linkHref="materials"
              linkText="Check materials"
              description="When shopping for sustainable items the Material Checker is all you need to determine whether each garment is sustainable. Just check and select the materials of each garment and the Material Checker will outline the biodegradability and ethical sustainability of each item."
            />
            <Feature
              title="Trends"
              linkHref="trends"
              linkText="See trends"
              description="View data in the form of data visualistions, that summarise topics such as nationwide carbon emissions."
            />
            <Feature
              title="Map"
              linkHref="map"
              linkText="Browse locations"
              description="View locations of op shops nearby that you could possibly find sustainable clothing within accessible price ranges. Donation, repairing and recycling points are also available to help you locate potential nearby places to donate, repair or recycle your old clothes and other apparels."
            />
          </div>
        </div>
      </Container>
    </Page>
  )
}
