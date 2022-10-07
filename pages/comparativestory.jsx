import Page from "@/components/Page"
import { MyLocationSharp } from "@mui/icons-material"
import { Container } from "@mui/system"
import FullPageScroll from "../components/comparativestory/FullPageScroll"
import SingleFullPage from "../components/comparativestory/SingleFullPage"

export default function ComparativeStory(isShown6) {
  if (isShown6)
    return (
      <Page title="Comparative Story">
        <FullPageScroll />
      </Page>
    )
  else return <SingleFullPage />
}
