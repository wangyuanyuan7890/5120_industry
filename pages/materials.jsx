import Hero from "@/components/Hero"
import Page from "@/components/Page"
import styles from "@/styles/pages/Materials.module.scss"
import { Container } from "@mui/material"

export default function Materials() {
  return (
    <Page title="Materials">
      <Container maxWidth="lg">
        <Hero
          title="Material search"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et felis maximus, blandit tortor et, posuere ante. Donec viverra dictum felis id gravida. Nunc nibh est, tincidunt non accumsan eget, lobortis eget enim."
        />
      </Container>
    </Page>
  )
}
