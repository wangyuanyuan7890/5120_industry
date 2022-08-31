import Hero from "@/components/Hero"
import MaterialItem from "@/components/materials/MaterialItem"
import Page from "@/components/Page"
import styles from "@/styles/pages/Materials.module.scss"
import {
  Alert,
  AlertTitle,
  Button,
  Chip,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  Snackbar,
} from "@mui/material"
import { Box } from "@mui/system"
import { useState } from "react"

// TODO: fetch list of materials from database
const materialList = [
  "cotton",
  "organic cotton",
  "cotton woven",
  "polyester",
  "nylon",
  "viscose",
  "lyocell",
  "tencel",
  "silk",
  "wool",
  "linen",
  "hemp",
  "jute",
  "leather",
  "synthetic leather",
]

export default function Materials() {
  const [selectedMaterials, setSelectedMaterials] = useState([])
  const [errorActive, setErrorActive] = useState(false)
  const [errorAlertActive, setErrorAlertActive] = useState(false)
  const [foundMaterials, setFoundMaterials] = useState([])

  const handleSelectionChange = (e) => {
    const v = e.target.value
    setSelectedMaterials(typeof v === "string" ? v.split(",") : v)
    setErrorActive(false)
  }

  const handleSearch = () => {
    setErrorActive(false)
    if (selectedMaterials.length > 0) {
      fetch("/api/material", {
        method: "POST",
        body: JSON.stringify({ materials: selectedMaterials }),
      })
        .then((res) => res.json())
        .then((data) => {
          const { materials } = data
          if (materials) {
            // sort materials by material name
            const sortedMaterials = materials.sort((a, b) => {
              if (a.material < b.material) {
                return -1
              } else if (a.material > b.material) {
                return 1
              }
              return 0
            })
            setFoundMaterials(sortedMaterials)
          }
        })
        .catch((_err) => {})
    } else {
      setErrorAlertActive(true)
      setErrorActive(true)
    }
  }

  const getMaterialName = (material) => {
    return material.charAt(0).toUpperCase() + material.slice(1)
  }

  return (
    <Page title="Materials">
      <Container maxWidth="lg">
        <Hero
          title="Material search"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et felis maximus, blandit tortor et, posuere ante. Donec viverra dictum felis id gravida. Nunc nibh est, tincidunt non accumsan eget, lobortis eget enim."
        />
        <div className={styles.material_search_wrapper}>
          <FormControl
            sx={{ m: 1, width: 600, marginLeft: 0 }}
            error={errorActive}
          >
            <InputLabel>Materials</InputLabel>
            <Select
              multiple
              value={selectedMaterials}
              onChange={handleSelectionChange}
              input={
                <OutlinedInput id="select-multiple-chip" label="Materials" />
              }
              renderValue={(selected) => (
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                  {selected.map((value) => (
                    <Chip key={value} label={getMaterialName(value)} />
                  ))}
                </Box>
              )}
            >
              {materialList.sort().map((material, index) => (
                <MenuItem key={index} value={material}>
                  {getMaterialName(material)}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <Button
            variant="contained"
            className={styles.button}
            onClick={handleSearch}
          >
            Search
          </Button>
        </div>
        <div className={styles.results_wrapper}>
          {foundMaterials.length > 0 && (
            <span className={styles.title}>
              Results ({foundMaterials.length})
            </span>
          )}
          {foundMaterials.map((material, index) => (
            <MaterialItem key={index} material={material} />
          ))}
        </div>
      </Container>
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        open={errorAlertActive}
        autoHideDuration={5000}
        onClose={() => setErrorAlertActive(false)}
      >
        <Alert
          onClose={() => setErrorAlertActive(false)}
          severity="error"
          sx={{ width: "100%" }}
        >
          No materials selected
        </Alert>
      </Snackbar>
    </Page>
  )
}
