import { useState, useRef } from "react"
import Fullpage, {
  FullPageSections,
  FullpageSection,
  FullpageNavigation,
} from "@ap.cx/react-fullpage"
import Slider from "@mui/material/Slider"
import { styled } from "@mui/material/styles"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
import TextField from "@mui/material/TextField"
import styles from "@/styles/components/comparativestory/FullPageScroll.module.scss"
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown"
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace"
import LocalDrinkIcon from "@mui/icons-material/LocalDrink"
import { Alert, Snackbar } from "@mui/material"
import bg from "@/public/Image.jpeg"
import FactGroup1 from "./FactGroup1"
import FactGroup2 from "./FactGroup2"
import FactGroup3 from "./FactGroup3"
import FactGroup4 from "./FactGroup4"
import FactGroup5 from "./FactGroup5"
import WasteIcon from "@/public/comparativestory/annual_waste.svg"
import WearScaleChart from "./WearScaleChart"

const FullPageScroll = () => {
  var timeout
  var timeout1
  const [openSnack, setOpenSnack] = useState(false)
  const handleClose = () => {
    setOpenSnack(false)
  }

  // button controls
  const [isShown, setIsShown] = useState(false)
  const [isShown2, setIsShown2] = useState(false)
  const [isShown3, setIsShown3] = useState(false)
  const [isShown4, setIsShown4] = useState(false)
  const [isShown5, setIsShown5] = useState(false)
  const [isShown6, setIsShown6] = useState(false)

  // user input
  const [wearCount, setWearCount] = useState(20)
  const [purchaseCount, setPurchaseCount] = useState(10)
  const [renewCount, setRenewCount] = useState(3)
  const [susPercentage, setSusPercentage] = useState(30)
  const [recycleValue, setRecycleValue] = useState(0)

  const section1 = useRef(null)
  const section2 = useRef(null)
  const section3 = useRef(null)
  const section4 = useRef(null)
  const section5 = useRef(null)
  const section6 = useRef(null)

  function scrollTo(section) {
    section.current.scrollIntoView({ behaviour: "smooth" })
  }

  // prop to style the full page sections
  const SectionStyle = {
    height: "100vh",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }

  // prop to style first section of full page scroll
  const SectionStyle1 = {
    height: "100vh",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  }

  // slider for section 2
  const WearCountSlider = styled(Slider)({
    color: "#52af77",
    height: 300,
    "& .MuiSlider-track": {
      border: "none",
    },
    "& .MuiSlider-thumb": {
      height: 24,
      width: 24,
      backgroundColor: "#fff",
      border: "2px solid currentColor",
      "&:focus, &:hover, &.Mui-active, &.Mui-focusVisible": {
        boxShadow: "inherit",
      },
      "&:before": {
        display: "none",
      },
    },
    "& .MuiSlider-valueLabel": {
      lineHeight: 1.2,
      fontSize: 12,
      background: "unset",
      padding: 0,
      width: 32,
      height: 32,
      borderRadius: "50% 50% 50% 0",
      backgroundColor: "#52af77",
      transformOrigin: "bottom right",
      transform: "translate(50%, -100%) rotate(-130deg) scale(0)",
      "&:before": { display: "none" },
      "&.MuiSlider-valueLabelOpen": {
        transform: "translate(250%, -70%) rotate(45deg) scale(1)",
      },
      "& > *": {
        transform: "rotate(-45deg)",
      },
    },
  })

  // slider for section 5
  const WearCountSlider5 = styled(Slider)({
    color: "#52af77",
    height: 300,
    "& .MuiSlider-track": {
      border: "none",
    },
    "& .MuiSlider-thumb": {
      height: 24,
      width: 24,
      backgroundColor: "#fff",
      border: "2px solid currentColor",
      "&:focus, &:hover, &.Mui-active, &.Mui-focusVisible": {
        boxShadow: "inherit",
      },
      "&:before": {
        display: "none",
      },
    },
    "& .MuiSlider-valueLabel": {
      lineHeight: 1.2,
      fontSize: 12,
      background: "unset",
      padding: 0,
      width: 32,
      height: 32,
      borderRadius: "50% 50% 50% 0",
      backgroundColor: "#52af77",
      transformOrigin: "bottom right",
      transform: "translate(50%, -100%) rotate(-130deg) scale(0)",
      "&:before": { display: "none" },
      "&.MuiSlider-valueLabelOpen": {
        transform: "translate(250%, -70%) rotate(45deg) scale(1)",
      },
      "& > *": {
        transform: "rotate(-45deg)",
      },
    },
  })

  function preventHorizontalKeyboardNavigation(event) {
    // console.log(event)
    if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
      event.preventDefault()
    }
  }

  // function to keep input data formatted and restricted to only numbers
  function handleChange(e) {
    const re = /^[0-9\b]+$/
    if (e.target.value === "" || re.test(e.target.value)) {
      e.target.value = e.target.value.replace(/^0+(?=\d)/, "")
      setPurchaseCount(e.target.value)
    }
  }

  // fuction to handle second user input field
  function handleChange1(e) {
    const re = /^[0-9\b]+$/
    if (e.target.value === "" || re.test(e.target.value)) {
      e.target.value = e.target.value.replace(/^0+(?=\d)/, "")
      setRenewCount(e.target.value)
    }
  }

  const handleSliderChange1 = (event, newValue) => {
    timeout && clearTimeout(timeout)
    timeout = setTimeout(() => {
      // console.log("change")
      // console.log(newValue)
      setWearCount(newValue)
    }, 1000)
  }

  const handleSliderChange2 = (event, newValue) => {
    timeout1 && clearTimeout(timeout1)
    timeout1 = setTimeout(() => {
      // console.log(newValue)
      setSusPercentage(newValue)
    }, 1000)
  }

  const handleClick1 = (event) => {
    setIsShown((current) => !current)
  }

  const handleClick2 = (event) => {
    if (purchaseCount === "" || purchaseCount == 0) {
      setIsShown2(true)
      setOpenSnack(true)
    }
    setIsShown2((current) => !current)
  }

  const handleClick3 = (event) => {
    if (renewCount === "") {
      setIsShown3(true)
    }
    setIsShown3((current) => !current)
  }

  const handleClick4 = (event) => {
    setIsShown4((current) => !current)
  }

  const handleClick5 = (event, newValue) => {
    setIsShown5((current) => !current)
    setIsShown6(false)
    if (newValue === 1) {
      setRecycleValue(newValue)
    } else if (newValue === 0) {
      setRecycleValue(newValue)
    } else {
      setRecycleValue(0)
    }
  }

  const handleClick6 = (event) => {
    setIsShown6((current) => !current)
  }

  return (
    <Fullpage>
      <FullpageNavigation />
      <FullPageSections>
        <div ref={section1}>
          <FullpageSection
            style={{
              ...SectionStyle1,
              backgroundImage: `url(${bg})`,
              backgroundSize: "cover",
            }}
            scrollTo={scrollTo}
            goToSectionRef={section2}
          >
            <h1>Are you more sustainable than the Average Victorian?</h1>
            <p>
              Test your sustainability habits to compare your waste to the
              average Victorian
            </p>
            <p>Before we start, there are a few things you should know:</p>
            <ul>
              <li>
                <b>We will get a bit personal:</b> To tailor the experience to
                you we are going to ask a few <br /> questions about your
                clothing behaviours.
              </li>
              <br />
              <li>
                <b>Storage:</b> We will not store any personally identifiable
                information.
              </li>
              <br />
              <li>
                <b>The Data:</b> The numbers we're quoting here come from
                Australian Government waste <br /> and production reports and
                ABS population statistics.
              </li>
            </ul>
            {/* <div className={styles.arrow_div}>
              <KeyboardDoubleArrowDownIcon
                className={styles.downarrow}
                onClick={executeScroll}
              ></KeyboardDoubleArrowDownIcon>
            </div> */}
          </FullpageSection>
        </div>
        <div ref={section2}>
          {!isShown && (
            <FullpageSection
              style={SectionStyle1}
              scrollTo={scrollTo}
              goToSectionRef={section3}
            >
              <h3>Reusing is essential to minimising fashion footprint.</h3>
              <div className={styles.filler_text_section_2}>
                <p>
                  On top of the abundant production emissions, when clothes end
                  up in landfills they create even more greenhouse gases
                  poluting the Earth's fragile atmostphere. Sustainable
                  reduction habits include rewearing items to reduce all forms
                  of emissions.
                </p>
                <p>
                  Reducing consumption by reusing old clothing means less
                  resources, both monetary and environment, are wasted in
                  growing fiber for new ones.
                </p>
              </div>
              <h1>On average how many times do you wear a pair of pants?</h1>
              <div className={styles.section_div}>
                <div className={styles.sub_section_div1}>
                  <p>Use the slider to estimate your average wear count →</p>
                  <Button
                    variant="contained"
                    color="success"
                    onClick={handleClick1}
                  >
                    LOCK IT IN
                  </Button>
                </div>
                <div className={styles.sub_section_div2}>
                  <Typography gutterBottom>Wear Count</Typography>
                  <WearCountSlider
                    valueLabelDisplay="on"
                    aria-label="wear count"
                    defaultValue={wearCount}
                    orientation="vertical"
                    onChange={handleSliderChange1}
                    onKeyDown={preventHorizontalKeyboardNavigation}
                  />
                </div>
              </div>
            </FullpageSection>
          )}
          {isShown && (
            <FullpageSection style={SectionStyle1}>
              <div className={styles.back_button2}>
                <KeyboardBackspaceIcon
                  onClick={handleClick1}
                  className={styles.back_icon}
                />
              </div>
              <h3>Reusing is essential to minimising fashion footprint.</h3>
              <div className={styles.filler_text_section_2}>
                <p>
                  On top of the abundant production emissions, when clothes end
                  up in landfills they create even more greenhouse gases
                  poluting the Earth's fragile atmostphere. Sustainable
                  reduction habits include rewearing items to reduce all forms
                  of emissions.
                </p>
                <p>
                  Reducing consumption by reusing old clothing means less
                  resources, both monetary and environment, are wasted in
                  growing fiber for new ones.
                </p>
              </div>
              <h1>On average how many times do you wear a pair of pants?</h1>
              <div className={styles.section_2_lower}>
                <div className={styles.fact_card}>
                  <FactGroup1 />
                </div>
                <div>
                  <WearScaleChart data={wearCount} />
                </div>
              </div>
            </FullpageSection>
          )}
        </div>
        <div ref={section3}>
          {!isShown2 && (
            <FullpageSection style={SectionStyle1}>
              <Snackbar
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                open={openSnack}
                autoHideDuration={5000}
                onClose={handleClose}
              >
                <Alert
                  onClose={handleClose}
                  severity="info"
                  sx={{ width: "100%" }}
                >
                  Invalid input!
                </Alert>
              </Snackbar>
              <h1>
                How many unsustainable cotton T-shirt did you buy this year?
              </h1>
              <div className={styles.section_div}>
                <div className={styles.sub_section_div1}>
                  <p>
                    Most T-shirts are cotton, estimate how many that weren't{" "}
                    <br />
                    marked sustainable you purchased?
                  </p>
                </div>
                <div className={styles.sub_section_div3}>
                  <Box
                    component="form"
                    sx={{
                      "& .MuiTextField-root": { m: 1, width: "25ch" },
                    }}
                    noValidate
                    autoComplete="off"
                  >
                    <TextField
                      id="purchased-number"
                      label="Amount"
                      // type="number"
                      error={purchaseCount.length === 0 ? true : false}
                      inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
                      value={purchaseCount}
                      onChange={handleChange}
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                  </Box>
                  <Button
                    variant="contained"
                    color="success"
                    className={styles.button_section_3}
                    onClick={handleClick2}
                  >
                    CONFIRM
                  </Button>
                </div>
              </div>
            </FullpageSection>
          )}
          {isShown2 && (
            <FullpageSection style={SectionStyle1}>
              <div className={styles.back_button2}>
                <KeyboardBackspaceIcon
                  onClick={handleClick2}
                  className={styles.back_icon}
                />
              </div>
              <h1>
                How many unsustainable cotton T-shirt did you buy this year?
              </h1>
              <div className={styles.section_3_hidden}>
                <div>
                  <p>
                    In production those T-shirts require{" "}
                    <b className={styles.litres_text}>{purchaseCount * 2700}</b>{" "}
                    Litres! <br /> That's enough water for the average Victorian
                    to drink for:{" "}
                  </p>
                  <div className={styles.local_drink_container}>
                    <div className={styles.local_drink_icon_group}>
                      <LocalDrinkIcon className={styles.local_drink_icon} />
                      <LocalDrinkIcon className={styles.local_drink_icon} />
                      <LocalDrinkIcon className={styles.local_drink_icon} />
                    </div>
                    <p>
                      <b className={styles.year_text}>
                        {purchaseCount * 2.5} Years!
                      </b>
                    </p>
                  </div>
                </div>
                <div className={styles.fact_card_single}>
                  <FactGroup2 />
                </div>
              </div>
            </FullpageSection>
          )}
        </div>
        <div ref={section4}>
          {!isShown3 && (
            <FullpageSection style={SectionStyle1}>
              <div className={styles.section_text}>
                <h1>Choosing not to Renew is a privilege</h1>
                <p>
                  Renewing compromises of the donating and/or repairing of
                  clothing. <br /> Many low-income countries still have a
                  relatively high rate of clothing renewal with a lesser access
                  to "Fast Fashion". <br /> In such low-income countries
                  clothing renewal is a necessity, as it should be.
                </p>
                <p>
                  When Victoria's Clothing Emissions were lowest this Centuary,{" "}
                  <br />
                  Victorians were regularly repairing and donating clothing
                  items.
                </p>
              </div>
              <h1>
                How many items have you <b>repaired</b> or <b>donated</b> this
                month?
              </h1>
              <div className={styles.sub_section_div1}>
                <p>
                  Select the estimate number of your average monthly renewal
                  count
                </p>
                <Box
                  component="form"
                  sx={{
                    "& .MuiTextField-root": { m: 1, width: "25ch" },
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <TextField
                    id="renew-number"
                    label="Amount"
                    // type="number"
                    error={renewCount.length === 0 ? true : false}
                    inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
                    value={renewCount}
                    onChange={handleChange1}
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </Box>
                <Button
                  variant="contained"
                  color="success"
                  className={styles.button_section_4}
                  onClick={handleClick3}
                >
                  CONFIRM
                </Button>
              </div>
            </FullpageSection>
          )}
          {isShown3 && (
            <FullpageSection style={SectionStyle1}>
              <div className={styles.back_button2}>
                <KeyboardBackspaceIcon
                  onClick={handleClick3}
                  className={styles.back_icon}
                />
              </div>
              <div className={styles.section_text}>
                <h1>Choosing not to Renew is a privilege</h1>
                <p>
                  Renewing compromises of the donating and/or repairing of
                  clothing. <br /> Many low-income countries still have a
                  relatively high rate of clothing renewal with a lesser access
                  to "Fast Fashion". <br /> In such low-income countries
                  clothing renewal is a necessity, as it should be.
                </p>
                <p>
                  When Victoria's Clothing Emissions were lowest this Centuary,{" "}
                  <br />
                  Victorians were regularly repairing and donating clothing
                  items.
                </p>
              </div>
              <h1>
                How many items have you <b>repaired</b> or <b>donated</b> this
                month?
              </h1>
              <div className={styles.fact_group_3}>
                <div className={styles.fact_card_single2}>
                  <FactGroup3 />
                </div>
                <div className={styles.fact_group_3_text}>
                  <p>
                    When Victorian Fashion emissions were lowest this centuary
                    renewal activities were far more common (03-04)
                  </p>
                  <p>
                    Explore the sustainable renewal trends against yours and the
                    average Victorians.
                  </p>
                </div>
              </div>
            </FullpageSection>
          )}
        </div>
        <div ref={section5}>
          {!isShown4 && (
            <FullpageSection style={SectionStyle1}>
              <h1>What percentage of your wardrobe is sustainable?</h1>
              <div className={styles.section_div}>
                <div className={styles.sub_section_div1}>
                  <Box sx={{ m: 3 }} />
                  <Typography gutterBottom>Percentage</Typography>
                  <WearCountSlider5
                    valueLabelDisplay="on"
                    aria-label="percentage"
                    defaultValue={susPercentage}
                    orientation="vertical"
                    onChange={handleSliderChange2}
                    onKeyDown={preventHorizontalKeyboardNavigation}
                  />
                  {/* <Box sx={{ m: 3 }} /> */}
                </div>
                <div className={styles.sub_section_div4}>
                  <p>
                    Use the slider to estimate the percentage of your wardrobe
                  </p>
                  <Button
                    variant="contained"
                    color="success"
                    onClick={handleClick4}
                  >
                    LOCK IT IN
                  </Button>
                </div>
              </div>
            </FullpageSection>
          )}
          {isShown4 && (
            <FullpageSection style={SectionStyle1}>
              <div className={styles.back_button2}>
                <KeyboardBackspaceIcon
                  onClick={handleClick4}
                  className={styles.back_icon}
                />
              </div>
              <h1>What percentage of your wardrobe is sustainable?</h1>
              <div className={styles.section_4_hidden_container}>
                <div className={styles.section_4_hidden_1}>
                  <p>
                    <b>Suggestion:</b> <br /> If you are far less than a
                    sustainable amount,
                    <br /> use the{" "}
                    <a
                      href="http://localhost:3000/materials" // change to live server url upon deployment
                      className={styles.material_checker_text}
                    >
                      <b>Material Checker</b>
                    </a>{" "}
                    to support you!
                  </p>
                </div>
                <div className={styles.fact_card_single3}>
                  <FactGroup4 />
                </div>
              </div>
            </FullpageSection>
          )}
        </div>
        <div ref={section6}>
          {!isShown5 && !isShown6 && (
            <FullpageSection style={SectionStyle1}>
              <div className={styles.section_text}>
                <h1>
                  Have you had any of your clothes <b>Recycled</b> ?
                </h1>
                <p>
                  There are Clothing Recycling opportunities for many popular
                  clothing brands. <br /> Alternatively there are clothing
                  recycling centres all over Victoria.
                </p>
              </div>
              <div className={styles.button_group}>
                <Button
                  variant="contained"
                  color="success"
                  value={1}
                  onClick={(e) => handleClick5(e, 1)}
                >
                  YES
                </Button>
                <Button
                  variant="contained"
                  className={styles.no_button}
                  value={0}
                  onClick={(e) => handleClick5(e, 0)}
                >
                  NO
                </Button>
              </div>
            </FullpageSection>
          )}
          {isShown5 && !isShown6 && (
            <FullpageSection style={SectionStyle1}>
              <div className={styles.back_button2}>
                <KeyboardBackspaceIcon
                  onClick={handleClick5}
                  className={styles.back_icon}
                />
              </div>
              <h1>
                Have you had any of your clothes <b>Recycled</b>?
              </h1>
              <div className={styles.fact_card_group_5}>
                <FactGroup5 />
              </div>
              <div>
                <h1>
                  Want to compare your Ecofash Expected waste against the
                  average Victorians?
                </h1>
                <Button
                  variant="contained"
                  color="success"
                  onClick={handleClick6}
                >
                  LETS SEE
                </Button>
              </div>
            </FullpageSection>
          )}
          {isShown6 && (
            <FullpageSection style={SectionStyle1}>
              <div className={styles.back_button2}>
                <KeyboardBackspaceIcon
                  onClick={handleClick5}
                  className={styles.back_icon}
                />
              </div>
              <div className={styles.section_6_container}>
                <div className={styles.section_6_icon_container}>
                  <h1>EcoFash Expected Waste</h1>
                  <div className={styles.section_6_icon}>
                    <WasteIcon />
                  </div>
                </div>
                <div className={styles.section_6_icon_container}>
                  <h1>Average Victorian Annual Waste</h1>
                  <div className={styles.section_6_icon}>
                    <WasteIcon />
                  </div>
                </div>
              </div>
              <div>
                <h2>Want to reduce your Ecofash waste?</h2>
                <p>
                  Try wear each item at least <b>30 times</b>! Use the Wear
                  Tracker to support you!
                </p>
                <Button
                  variant="contained"
                  color="success"
                  href="http://localhost:3000/clothingtracker" // change to live server url upon deployment
                >
                  WEAR TRACKER
                </Button>
              </div>
            </FullpageSection>
          )}
        </div>
      </FullPageSections>
    </Fullpage>
  )
}

export default FullPageScroll
