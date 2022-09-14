import styles from "@/styles/pages/Opshop.module.scss"
import { GoogleMap, Marker, InfoWindow } from "@react-google-maps/api"
import { useMemo, useState } from "react"
import * as React from "react"
import Checkbox from "@mui/material/Checkbox"
import TextField from "@mui/material/TextField"
import Autocomplete from "@mui/material/Autocomplete"
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank"
import CheckBoxIcon from "@mui/icons-material/CheckBox"
import mapStyles from "./mapStyles"
import { Alert, Snackbar } from "@mui/material"

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />
const checkedIcon = <CheckBoxIcon fontSize="small" />

const center = {
  lat: -37.8132524811935,
  lng: 144.96527232900124,
}

export default function OpShopsLocation() {
  const [latitude, setLatitude] = useState(-37.8132524811935)
  const [longitude, setLongitude] = useState(144.96527232900124)
  const [responseData, setResponseData] = useState({})
  const [markers, setMarkers] = useState([])
  const [openSnack, setOpenSnack] = useState(false)
  const handleClose = () => {
    setOpenSnack(false)
  }

  // use to display info when user clicks on the marker
  const [selected, setSelected] = useState(null)

  // create a function that will always retain the same value unless props being passed in
  const onMapClick = React.useCallback((event) => {
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
  React.useEffect(() => {
    // using geolocation function to get current position latitude and longitude
    navigator.geolocation.getCurrentPosition((position) => {
      setLatitude(position.coords.latitude)
      setLongitude(position.coords.longitude)
      // console.log(latitude)
      // console.log(longitude)
    })
  }, [])

  // To avoid map re-rendering
  const mapRef = React.useRef()
  const onMapLoad = React.useCallback((map) => {
    mapRef.current = map
  }, [])

  // callBack function to be called when lat lng of a coordinate changes
  const panTo = React.useCallback(({ lat, lng }) => {
    mapRef.current.panTo({ lat, lng })
    mapRef.current.setZoom(14)
  }, [])

  // const center = useMemo(() => ({ lat: latitude, lng: longitude }), [])

  // option use to disable clicking of unrelated icon on map and style map terrain
  const options = useMemo(
    () => ({
      clickableIcons: false,
      disableDefaultUI: true,
      streetViewControl: true,
      zoomControl: true,
      styles: mapStyles,
    }),
    []
  )

  return (
    <div className={styles.container}>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={openSnack}
        autoHideDuration={5000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          Please enable your location!
        </Alert>
      </Snackbar>
      <div className={styles.charities}>
        <Autocomplete
          multiple
          id="checkboxes-tags-demo"
          options={top100Films}
          disableCloseOnSelect
          getOptionLabel={(option) => option.title}
          renderOption={(props, option, { selected }) => (
            <li {...props}>
              <Checkbox
                icon={icon}
                checkedIcon={checkedIcon}
                style={{ marginRight: 8 }}
                checked={selected}
              />
              {option.title}
            </li>
          )}
          style={{ width: 200 }}
          renderInput={(params) => (
            <TextField {...params} label="Search" placeholder="Locations" />
          )}
        />
      </div>

      <div className="map">
        <Locate panTo={panTo} />
        <GoogleMap
          zoom={11}
          center={center}
          mapContainerClassName={styles.map_container}
          options={options}
          onClick={onMapClick}
          onLoad={onMapLoad}
        >
          {markers.map((marker) => (
            <Marker
              key={marker.time?.toISOString()}
              position={{ lat: marker.lat, lng: marker.lng }}
              onClick={() => {
                setSelected(marker) // click event on the marker to set selected to whichever market was clicked
              }}
            />
          ))}

          {selected ? (
            <InfoWindow
              position={{ lat: selected.lat, lng: selected.lng }}
              onCloseClick={() => {
                setSelected(null) // when pop up of marker is closed, set selected marker back to null
              }}
            >
              <div>
                <h3>Salvation Army Melbourne Central</h3>
                <p>Address: 69 Bourke St, Melbourne VIC 3000</p>
              </div>
            </InfoWindow>
          ) : null}
        </GoogleMap>
      </div>
    </div>
  )
}

// function to center user at current location when they click on navigation icon
function Locate({ panTo, setOpenSnack }) {
  return (
    <button
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

const top100Films = [
  { title: "The Shawshank Redemption", year: 1994 },
  { title: "The Godfather", year: 1972 },
  { title: "The Godfather: Part II", year: 1974 },
  { title: "The Dark Knight", year: 2008 },
  { title: "12 Angry Men", year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: "Pulp Fiction", year: 1994 },
  {
    title: "The Lord of the Rings: The Return of the King",
    year: 2003,
  },
  { title: "The Good, the Bad and the Ugly", year: 1966 },
  { title: "Fight Club", year: 1999 },
  {
    title: "The Lord of the Rings: The Fellowship of the Ring",
    year: 2001,
  },
  {
    title: "Star Wars: Episode V - The Empire Strikes Back",
    year: 1980,
  },
  { title: "Forrest Gump", year: 1994 },
  { title: "Inception", year: 2010 },
  {
    title: "The Lord of the Rings: The Two Towers",
    year: 2002,
  },
  { title: "One Flew Over the Cuckoo's Nest", year: 1975 },
  { title: "Goodfellas", year: 1990 },
  { title: "The Matrix", year: 1999 },
  { title: "Seven Samurai", year: 1954 },
  {
    title: "Star Wars: Episode IV - A New Hope",
    year: 1977,
  },
  { title: "City of God", year: 2002 },
  { title: "Se7en", year: 1995 },
  { title: "The Silence of the Lambs", year: 1991 },
  { title: "It's a Wonderful Life", year: 1946 },
  { title: "Life Is Beautiful", year: 1997 },
  { title: "The Usual Suspects", year: 1995 },
  { title: "Léon: The Professional", year: 1994 },
  { title: "Spirited Away", year: 2001 },
  { title: "Saving Private Ryan", year: 1998 },
  { title: "Once Upon a Time in the West", year: 1968 },
  { title: "American History X", year: 1998 },
  { title: "Interstellar", year: 2014 },
]
