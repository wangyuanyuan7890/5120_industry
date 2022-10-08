import Fullpage, {
  FullPageSections,
  FullpageSection,
  FullpageNavigation,
} from "@ap.cx/react-fullpage"
import Button from "@mui/material/Button"

const SectionStyle = {
  height: "100vh",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
}

export default function SingleFullPage() {
  return (
    <Fullpage>
      <FullPageSections>
        <FullpageSection style={SectionStyle}>
          <h1>Are you more sustainable than the Average Victorian?</h1>
          <p>
            Do you ever feel like you are more sustainable than most other
            people?
          </p>
          <p>
            Test your sustainability habits to compare your waste to the average
            Victorian
          </p>
          <p>Before we start, there are a few things you should know</p>
          <p>
            <b>We will get a bit personal:</b> To tailor the experience to you,{" "}
            <br />
            we are going to ask a few questions about your clothing behaviours.
          </p>
          <p>
            <b>Do not worry:</b> We will not store any personally identifiable
            information. <br /> About the data: The numbers we are quoting here
            come from X,Y,Z.
          </p>
          <div>
            <div>
              <h1>EcoFash Expected Waste</h1>
            </div>
            <div>
              <h1>Average Victorian Annual Waste</h1>
            </div>
          </div>
          <div>
            <h2>Want to reduce your Ecofash waste?</h2>
            <p>
              Try wear each item at least 30 times! Use the Wear Tracker to
              support you!
            </p>
            <Button variant="contained" color="success">
              WEAR TRACKER
            </Button>
          </div>
        </FullpageSection>
      </FullPageSections>
    </Fullpage>
  )
}
