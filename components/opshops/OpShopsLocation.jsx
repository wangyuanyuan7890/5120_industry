import styles from "@/styles/pages/Opshop.module.scss"
import {
  GoogleMap,
  MarkerF,
  Marker,
  InfoWindowF,
  MarkerClusterer,
} from "@react-google-maps/api"
import { useMemo, useState, useEffect, useCallback, useRef } from "react"
import * as React from "react"
import Checkbox from "@mui/material/Checkbox"
import TextField from "@mui/material/TextField"
import { styled } from "@mui/material/styles"
import Dialog from "@mui/material/Dialog"
import DialogTitle from "@mui/material/DialogTitle"
import DialogContent from "@mui/material/DialogContent"
import DialogActions from "@mui/material/DialogActions"
import PropTypes from "prop-types"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import IconButton from "@mui/material/IconButton"
import LoopIcon from "@mui/icons-material/Loop"
import CloseIcon from "@mui/icons-material/Close"
import Autocomplete from "@mui/material/Autocomplete"
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank"
import CheckBoxIcon from "@mui/icons-material/CheckBox"
import mapStyles from "./mapStyles"
import { Alert, Snackbar, ToggleButton, ToggleButtonGroup } from "@mui/material"
import { AddShoppingCart, DeleteOutline, Handyman } from "@mui/icons-material"

// icons for the search bar
const icon = <CheckBoxOutlineBlankIcon fontSize="small" />
const checkedIcon = <CheckBoxIcon fontSize="small" />

// component for the pop up dialog
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}))

// component for the pop up dialog title
const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  )
}

// define pop up dialog prop types
BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
}

// default coordiantes of the map component (Melbourne city)
const center = {
  lat: -37.8132524811935,
  lng: 144.96527232900124,
}

// center radius for user current location
var radius = {
  path: "M-20,0a20,20 0 1,0 40,0a20,20 0 1,0 -40,0",
  fillColor: "#59bfff",
  fillOpacity: 0.3,
  strokeWeight: 0,
  scale: 2,
}

export default function OpShopsLocation() {
  const [latitude, setLatitude] = useState(0)
  const [longitude, setLongitude] = useState(0)
  const [responseData, setResponseData] = useState({})
  const [markers, setMarkers] = useState([])
  const [openSnack, setOpenSnack] = useState(false)
  const [foundShops, setFoundShops] = useState([])
  const [open, setOpen] = useState(false)
  const handleClose = () => {
    setOpenSnack(false)
  }

  const handleClickOpen = () => {
    setOpen(true)
  }
  const handleClickClose = () => {
    setOpen(false)
  }

  const [formats, setFormats] = useState(() => [
    // "opshop",
    // "repair",
    // "donation",
    // "recycling",
  ])

  const [name, setName] = useState([])

  // state use to filter by type of locations selected
  const [filteredShops, setFilteredShops] = useState([])

  const handleFormat = (event, newFormats) => {
    // console.log(newFormats)
    if (newFormats !== null) {
      setFormats(newFormats)
    }
  }

  const handleName = (event, array) => {
    const flatArray = array.map((x) => x.shop.name)
    // console.log(flatArray)
    if (flatArray !== null) {
      setName(flatArray)
    }
  }

  // fetch data from the api
  useEffect(() => {
    fetch("/api/locations", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data)
        const { shopLocations } = data
        if (shopLocations) {
          const finalShopLocations = shopLocations
          // console.log(finalShopLocations)
          setFoundShops(finalShopLocations)
          // console.log(foundShops)
        }
      })
      .catch((_err) => {})
  }, [])

  const [selected, setSelected] = useState(null)
  const [selectedMarker, setSelectedMarker] = useState(null)
  const [selectedShop, setSelectedShop] = useState({})
  const [selectedShopDetails, setSelectedShopDetails] = useState({})

  const finalFilteredMarkers = () => {
    // check if any shop type is selected, if none; return all shops
    if (formats.length <= 0) return foundShops
    // performs the filter by shop type looking into user selected value(s)
    const filteredByType = foundShops.filter(
      (w) => w.shop.types === formats.find((x) => w.shop.types === x)
    )
    if (filteredByType.length <= 0) return [] // if no filtered values then do nothing

    // check if any shop name is selected, if none; then return the filtered shops filtered by type
    if (name.length <= 0) return filteredByType
    // performs the filter by shop name from the multi-select search drop down list
    const filteredByNames = filteredByType.filter(
      (y) => y.shop.name === name.find((z) => y.shop.name === z)
    )
    if (filteredByNames.length <= 0) return []
    return filteredByNames
  }

  // create a function that will always retain the same value unless props being passed in
  const onMapClick = useCallback((event) => {
    setMarkers((current) => [
      ...current,
      {
        lat: event.latLng.lat(),
        lng: event.latLng.lng(),
        time: new Date(),
      },
    ])
  }, [])

  // get current user position
  useEffect(() => {
    // using geolocation function to get current position latitude and longitude
    navigator.geolocation.getCurrentPosition((position) => {
      setLatitude(position.coords.latitude)
      setLongitude(position.coords.longitude)
    })
  }, [])

  // To avoid map re-rendering
  const mapRef = useRef()
  const onMapLoad = useCallback((map) => {
    mapRef.current = map
  }, [])

  // callBack function to be called when lat lng of a coordinate changes
  const panTo = useCallback(({ lat, lng }) => {
    mapRef.current.panTo({ lat, lng })
    mapRef.current.setZoom(14)
  }, [])

  // const center = useMemo(() => ({ lat: latitude, lng: longitude }), [])

  // use to disable clicking of unrelated icon on map and style map terrain
  const options = useMemo(
    () => ({
      clickableIcons: false,
      disableDefaultUI: true,
      streetViewControl: true,
      zoomControl: true,
      styles: mapStyles,
      // mapId: "9e9809c759a6364",
      // heading: 320,
      // title: 47.5,
    }),
    []
  )

  const listFoundShops =
    formats.length >= 0
      ? foundShops.filter(
          (x) => x.shop.types === formats.find((y) => x.shop.types === y)
        )
      : foundShops

  // group the selection dropdown list data and display distinct selection value
  const filtered_options = listFoundShops.filter(
    (value, index, self) =>
      self.findIndex((v) => v.shop.name === value.shop.name) === index
  )

  const options_mov = filtered_options.map((option) => {
    // console.log(option)
    const firstLetter = option.shop["name"][0].toUpperCase()
    // const firstLetter = option.title[0].toUpperCase()
    return {
      firstLetter: /[0-9]/.test(firstLetter) ? "0-9" : firstLetter,
      ...option,
    }
  })

  // const clusterOptions = {
  //   imagePath:
  //     "https://cdn.rawgit.com/googlemaps/js-marker-clusterer/gh-pages/images/m",
  // }

  return (
    <div className={styles.container}>
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        open={openSnack}
        autoHideDuration={5000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity="info" sx={{ width: "100%" }}>
          Please enable your location first!
        </Alert>
      </Snackbar>
      <div className={styles.charities}>
        <h2 className={styles.searchLocation}>Search Location:</h2>
        <Autocomplete
          multiple
          limitTags={3}
          id="checkboxes-tags-demo"
          onChange={handleName}
          options={options_mov.sort(
            (a, b) => -b.firstLetter.localeCompare(a.firstLetter)
          )}
          groupBy={(option) => option.firstLetter} // group list by first letter
          disableCloseOnSelect
          getOptionLabel={(option) => option.shop["name"]}
          renderOption={(props, option, { selected }) => (
            <li {...props}>
              <Checkbox
                icon={icon}
                checkedIcon={checkedIcon}
                style={{ marginRight: 8 }}
                checked={selected}
              />
              {option.shop["name"]}
            </li>
          )}
          style={{ width: 200 }}
          isOptionEqualToValue={(option, value) => option.id === value.id}
          renderInput={(params) => (
            <TextField {...params} label="Search" placeholder="Locations" />
          )}
        />

        <h2 className={styles.filterLocation}>Filter:</h2>
        <ToggleButtonGroup
          value={formats}
          style={{ width: 200 }}
          orientation="vertical"
          onChange={handleFormat}
          aria-label="location filtering"
        >
          <ToggleButton value="opshop" aria-label="op shops">
            <AddShoppingCart className={styles.filterIcon} />
            <p className={styles.filterLabels}>Op Shops</p>
          </ToggleButton>

          <ToggleButton value="repair" aria-label="repair locations">
            <Handyman className={styles.filterIcon} />
            <p className={styles.filterLabels}>Repair Locations</p>
          </ToggleButton>

          <ToggleButton value="donation" aria-label="donation points">
            <DeleteOutline className={styles.filterIcon} />
            <p className={styles.filterLabels}>Donation Points</p>
          </ToggleButton>

          <ToggleButton value="recycling" aria-label="recycling points">
            <LoopIcon className={styles.filterIcon} />
            <p className={styles.filterLabels}>Recycling Points</p>
          </ToggleButton>
        </ToggleButtonGroup>
      </div>
      <div className={styles.map}>
        <Locate panTo={panTo} setOpenSnack={setOpenSnack} />
        <GoogleMap
          zoom={11}
          center={center}
          mapContainerClassName={styles.map_container}
          options={options}
          onClick={onMapClick}
          onLoad={onMapLoad}
        >
          <MarkerF
            position={{ lat: latitude, lng: longitude }}
            icon={radius}
          ></MarkerF>

          <MarkerClusterer
            // imagePath={clusterOptions}
            minimumClusterSize={5}
            maxZoom={20}
          >
            {(clusterer) =>
              finalFilteredMarkers().map((shop) => (
                <Marker
                  key={shop.id}
                  clusterer={clusterer}
                  animation={
                    selectedMarker
                      ? shop.id === selectedMarker.id
                        ? "1"
                        : "0"
                      : "0"
                  }
                  position={{ lat: shop.latitude, lng: shop.longitude }}
                  icon={GetIcon(shop.shop.types)}
                  onClick={() => {
                    setSelectedMarker(shop)
                    setSelectedShop(shop)
                    setSelectedShopDetails(shop.shop)
                  }}
                />
              ))
            }
          </MarkerClusterer>

          {/* {finalFilteredMarkers().map((shop) => (
            <Marker
              key={shop.id}
              // category={shop.shop.name}
              animation={
                selectedMarker
                  ? shop.id === selectedMarker.id
                    ? "1"
                    : "0"
                  : "0"
              }
              position={{ lat: shop.latitude, lng: shop.longitude }}
              icon={{
                url: "/charity/charity.svg",
                scaledSize: new window.google.maps.Size(30, 30),
              }}
              onClick={() => {
                setSelectedMarker(shop)
                setSelectedShop(shop)
                setSelectedShopDetails(shop.shop)
              }}
            />
          ))} */}

          {selectedMarker && (
            <InfoWindowF
              position={{
                lat: selectedMarker.latitude,
                lng: selectedMarker.longitude,
              }}
              options={{
                pixelOffset: new window.google.maps.Size(0, -35),
              }}
              onCloseClick={() => {
                setSelectedMarker(null) // when pop up of marker is closed, set selected marker back to null
              }}
            >
              <div>
                <h3>{selectedMarker.shop.name}</h3>
                <p>{selectedMarker.address}</p>
                <Button
                  className={styles.popUpButton}
                  variant="outlined"
                  onClick={handleClickOpen}
                >
                  View More
                </Button>
              </div>
            </InfoWindowF>
          )}
        </GoogleMap>

        <div>
          <BootstrapDialog
            onClose={handleClickClose}
            aria-labelledby="customized-dialog-title"
            open={open}
          >
            <BootstrapDialogTitle
              id="customized-dialog-title"
              onClose={handleClickClose}
            >
              Shop Details
            </BootstrapDialogTitle>
            <DialogContent dividers>
              <Typography gutterBottom>
                <b>Name: </b> {selectedShopDetails.name}
              </Typography>
              <Typography gutterBottom>
                <b>Suburb: </b> {selectedShop.suburb}
              </Typography>
              <Typography gutterBottom>
                <b>Address: </b> {selectedShop.address}
              </Typography>
              <Typography gutterBottom>
                <b>Description: </b> {selectedShopDetails.description}
              </Typography>
              <Typography gutterBottom>
                <b>Shop Type: </b> {selectedShopDetails.types}
              </Typography>
            </DialogContent>
            <DialogActions>
              <Button autoFocus onClick={handleClickClose}>
                Close
              </Button>
            </DialogActions>
          </BootstrapDialog>
        </div>
      </div>
    </div>
  )
}

// function to center user at current location when they click on navigation icon
function Locate({ panTo, setOpenSnack }) {
  return (
    <button
      title="Pan to current location"
      className={styles.locate}
      onClick={() => {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            panTo({
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            })
          },
          () => {
            setOpenSnack(true)
          }
        )
      }}
    >
      <img src="/navigation/navigator.svg" alt="navigator - locate me" />
    </button>
  )
}

// function to categorise markers into different groups
function GetIcon(shopType) {
  return {
    url: "/charity/" + shopType + ".svg",
    scaledSize: new window.google.maps.Size(30, 30),
  }
}
