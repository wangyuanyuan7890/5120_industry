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
import { Alert, Snackbar, SvgIcon } from "@mui/material"
import bg from "@/public/Image.jpeg"
import FactGroup1 from "./FactGroup1"
import FactGroup2 from "./FactGroup2"
import FactGroup3 from "./FactGroup3"
import FactGroup4 from "./FactGroup4"
import FactGroup5 from "./FactGroup5"
import WasteIcon from "@/public/comparativestory/annual_waste.svg"
import WearScaleChart from "./WearScaleChart"
import LineScaleChart from "./LineScaleChart"
import SustainableScaleChart from "./SustainableScaleChart"
import { RegressionCoefficients } from "../../data/RegressionCoefficients"

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

  // section pages
  const section1 = useRef(null)
  const section2 = useRef(null)
  const section3 = useRef(null)
  const section4 = useRef(null)
  const section5 = useRef(null)
  const section6 = useRef(null)

  // features
  const wears = RegressionCoefficients.find((x) => x.coefs === "wears").value
  const cotton_ts = RegressionCoefficients.find(
    (x) => x.coefs === "cotton_ts"
  ).value
  const renewal = RegressionCoefficients.find(
    (x) => x.coefs === "renewal"
  ).value
  const sustainable = RegressionCoefficients.find(
    (x) => x.coefs === "sustainable"
  ).value
  const recycled = RegressionCoefficients.find(
    (x) => x.coefs === "recycled"
  ).value
  const intercept = RegressionCoefficients.find(
    (x) => x.coefs === "intercept"
  ).value

  // Linear Regression equation
  function Regression(
    wearCount,
    purchaseCount,
    renewCount,
    susPercentage,
    recycleValue
  ) {
    const waste = Math.round(
      Math.ceil(
        Math.floor(
          intercept -
            wears * wearCount +
            cotton_ts * purchaseCount -
            renewal * Math.floor(renewCount) -
            sustainable * (susPercentage / 100) -
            recycled * recycleValue
        )
      )
    )

    return waste < 0 ? 0 : waste
    // return waste
  }

  const ecofash_waste = Regression(
    wearCount,
    purchaseCount,
    renewCount,
    susPercentage,
    recycleValue
  )

  // console.log(ecofash_waste)

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

  // const scaleSVGIcon = styled(SvgIcon)({
  //   transform: `scale(${ecofash_waste} / 0.5)`,
  // })

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
              <h3>
                The Fast Fashion industry has led to these overstuffed closets
                and overflowing landfills.
              </h3>
              <div className={styles.filler_text_section_3}>
                <p>
                  Ever think about the material that makes up the clothes you're
                  wearing?
                </p>
                <p>
                  A growing proportion of Victorian Emissions are due to
                  clothing production. The development of the Fast Fashion
                  industry has disconnection consumers from this issue. A
                  majority of clothing materials utilise unsustainable water and
                  energy in production whilst having ethical concerns regarding
                  environment, animals and labor.
                </p>
                <p>
                  The popular material of Cotton is slowly moving towards
                  sustainable recycled or sustainable development to reduce the
                  drastic water consumption.
                </p>
              </div>
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
                      value={purchaseCount || 0}
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
              <h3>
                The Fast Fashion industry has led to these overstuffed closets
                and overflowing landfills.
              </h3>
              <div className={styles.filler_text_section_3}>
                <p>
                  Ever think about the material that makes up the clothes you're
                  wearing?
                </p>
                <p>
                  A growing proportion of Victorian Emissions are due to
                  clothing production. The development of the Fast Fashion
                  industry has disconnection consumers from this issue. A
                  majority of clothing materials utilise unsustainable water and
                  energy in production whilst having ethical concerns regarding
                  environment, animals and labor.
                </p>
                <p>
                  The popular material of Cotton is slowly moving towards
                  sustainable recycled or sustainable development to reduce the
                  drastic water consumption.
                </p>
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
              <h3>Choosing not to Renew is a privilege</h3>
              <div className={styles.filler_text_section_4}>
                <p>
                  Renewing compromises of the donating and/or repairing of
                  clothing. Many low-income countries still have a relatively
                  high rate of clothing renewal with a lesser access to "Fast
                  Fashion". In such low-income countries clothing renewal is a
                  necessity, as it should be.
                </p>
                <p>
                  When Victoria's Clothing Emissions were lowest this Centuary,
                  Victorians were regularly repairing and donating clothing
                  items.
                </p>
              </div>
              <h1>
                How many items have you <b>repaired</b> or <b>donated</b> over
                the last 3 months?
              </h1>
              <div className={styles.section_4_lower}>
                <p>Select your 3 monthly renewal count estimate</p>
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
                    value={renewCount || 0}
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
              <h3>Choosing not to Renew is a privilege</h3>
              <div className={styles.filler_text_section_4}>
                <p>
                  Renewing compromises of the donating and/or repairing of
                  clothing. Many low-income countries still have a relatively
                  high rate of clothing renewal with a lesser access to "Fast
                  Fashion". In such low-income countries clothing renewal is a
                  necessity, as it should be.
                </p>
                <p>
                  When Victoria's Clothing Emissions were lowest this Centuary,
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
                    This century, when Victorian Fashion emissions were lowest
                    renewal activities were far more common (green).
                  </p>
                  <p>
                    The current average Victorian renewal trends (red) are far
                    less than this low emission period.
                  </p>
                </div>
                <div className={styles.section_4_lower_hidden}>
                  <div>
                    <LineScaleChart />
                  </div>
                  {renewCount > 10 && (
                    <div>
                      <p>
                        <i>
                          You are off renewal activity is the scale. Great
                          sustainable activity.
                        </i>
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </FullpageSection>
          )}
        </div>
        <div ref={section5}>
          {!isShown4 && (
            <FullpageSection style={SectionStyle1}>
              <h3>
                There is no such thing as a 100% sustainable fabric, but some
                are much better than others.
              </h3>
              <div className={styles.filler_text_section_5}>
                <p>
                  A sustainable wardrobe is one that helps to reduce the impact
                  that your clothes have on the planet.
                </p>
                <p>
                  A majority of clothing emissions is due to the unsustainable
                  materials. A couple of the major determining factors when
                  labelling sustainable materials are the amount of resources
                  used to produce the material and the lifecycle analysis of the
                  product.
                </p>
                <p>
                  Dressing sustainably can be affordable and offer you all the
                  choice of clothes that you want.
                </p>
              </div>
              <h1>What percentage of your wardrobe is sustainable?</h1>
              <div className={styles.section_div}>
                <div className={styles.sub_section_div1}>
                  <Typography gutterBottom>Percentage</Typography>
                  <WearCountSlider5
                    valueLabelDisplay="on"
                    aria-label="percentage"
                    defaultValue={susPercentage}
                    orientation="vertical"
                    onChange={handleSliderChange2}
                    onKeyDown={preventHorizontalKeyboardNavigation}
                  />
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
              <h3>
                There is no such thing as a 100% sustainable fabric, but some
                are much better than others.
              </h3>
              <div className={styles.filler_text_section_5}>
                <p>
                  A sustainable wardrobe is one that helps to reduce the impact
                  that your clothes have on the planet.
                </p>
                <p>
                  A majority of clothing emissions is due to the unsustainable
                  materials. A couple of the major determining factors when
                  labelling sustainable materials are the amount of resources
                  used to produce the material and the lifecycle analysis of the
                  product.
                </p>
                <p>
                  Dressing sustainably can be affordable and offer you all the
                  choice of clothes that you want.
                </p>
              </div>
              <h1>What percentage of your wardrobe is sustainable?</h1>
              <div className={styles.section_5_hidden_container}>
                <div>
                  <SustainableScaleChart data={susPercentage} />
                </div>
                <div className={styles.section_5_hidden_text}>
                  <p>
                    <b>Suggestion:</b> <br /> If you are far less than a
                    sustainable amount, use the{" "}
                    <a>
                      <b>Material Checker </b>
                    </a>
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
              <h3>Recycling Clothing can give clothing another life</h3>
              <div className={styles.filler_text_section_6}>
                <p>
                  Just 12 per cent of discarded textiles is recycled, an
                  estimated 800 million kilograms of it winds up in landfill.
                </p>
                <p>
                  Often, our first thought of recycling clothing is to donate to
                  charities and foundations. However, only about 0.1 per cent of
                  recycled clothing collected by charities and take-back
                  programmes is used to make new textile fibers.
                </p>
                <p>
                  Where possible, always try to give unwanted clothes which have
                  reached the end of their life to clothes banks where materials
                  can either be donated or recycled into fabrics or other useful
                  products.
                </p>
              </div>
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
              <h3>Recycling Clothing can give clothing another life</h3>
              <div className={styles.filler_text_section_6}>
                <p>
                  Just 12 per cent of discarded textiles is recycled, an
                  estimated 800 million kilograms of it winds up in landfill.
                </p>
                <p>
                  Often, our first thought of recycling clothing is to donate to
                  charities and foundations. However, only about 0.1 per cent of
                  recycled clothing collected by charities and take-back
                  programmes is used to make new textile fibers.
                </p>
                <p>
                  Where possible, always try to give unwanted clothes which have
                  reached the end of their life to clothes banks where materials
                  can either be donated or recycled into fabrics or other useful
                  products.
                </p>
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
                  <h1>Your EcoFash Expected Waste</h1>
                  <div className={styles.section_6_icon}>
                    <WasteIcon transform="scale(0.8)" />
                  </div>
                  <h1>
                    {Regression(
                      wearCount,
                      purchaseCount,
                      renewCount,
                      susPercentage,
                      recycleValue
                    )}
                    KG
                  </h1>
                </div>
                <div className={styles.section_6_icon_container}>
                  <h1>Average Victorian Annual Waste</h1>
                  <div className={styles.section_6_icon}>
                    <WasteIcon transform="scale(0.8)" />
                  </div>
                  <h1>27KG</h1>
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
