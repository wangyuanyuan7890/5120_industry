import Page from "@/components/Page"
import { Container } from "@mui/system"
import HomeHeroImage from "@/public/home_hero.svg"
import LifelineLogo from "@/public/companies/lifeline.svg"
import RedCrossLogo from "@/public/companies/red_cross.svg"
import SalvationArmyLogo from "@/public/companies/salvation_army.svg"
import SmithFamilyLogo from "@/public/companies/smith_family.svg"
import LinkButton from "@/components/LinkButton"

import styles from "@/styles/pages/Home.module.scss"
import Feature from "@/components/home/Feature"
import Link from "next/link"

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
              Ecofash makes finding design-focused ethical and sustainable
              clothing easy. We aim to educate and inspire people to make better
              economincal choices when it comes to their clothing in order to
              reduce energy waste.
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
        <div className={styles.feature_wrapper}>
          <div className={styles.feature_header}>
            <span className={styles.title}>Features</span>
            <span className={styles.description}>
              Below are some of the features offered on the site
            </span>
          </div>
          <div className={styles.feature_group}>
            <Feature
              title="Lifecycle"
              linkHref="lifecycle"
              linkText="See lifecycle"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              gravida est lobortis lorem tempor, sed feugiat elit tincidunt.
              Aliquam fermentum neque gravida molestie lacinia. Cras bibendum
              laoreet elit, nec aliquet nunc egestas ac. Nulla erat lacus,
              consectetur nec risus sed, porta accumsan nunc."
            />
            <Feature
              title="Material search"
              linkHref="materials"
              linkText="See materials"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              gravida est lobortis lorem tempor, sed feugiat elit tincidunt.
              Aliquam fermentum neque gravida molestie lacinia. Cras bibendum
              laoreet elit, nec aliquet nunc egestas ac. Nulla erat lacus,
              consectetur nec risus sed, porta accumsan nunc."
            />
          </div>
        </div>
      </Container>
    </Page>
  )
}
