import Hero from "@/components/Hero"
import MaterialItem from "@/components/materials/MaterialItem"
import MaterialSummary from "@/components/materials/MaterialSummary"
import Page from "@/components/Page"
import styles from "@/styles/pages/Materials.module.scss"
import { Chip, Container } from "@mui/material"
import { useEffect, useState } from "react"

// Material page that allows you to select materials and receive results
export default function Materials() {
  const [foundMaterials, setFoundMaterials] = useState([])
  const [selectedMaterials, setSelectedMaterials] = useState([])

  useEffect(() => {
    // query material api
    fetch("/api/material", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        const { materials } = data
        if (materials) {
          // sort materials by material name
          const sortedMaterials = materials.sort((a, b) => {
            if (a.name < b.name) {
              return -1
            } else if (a.name > b.name) {
              return 1
            }
            return 0
          })
          sortedMaterials.forEach((x) => {
            x.active = false
          })
          setFoundMaterials(sortedMaterials)
        }
      })
      .catch((_err) => {})
  }, [])

  // updates stored data when selection has been made
  const handleSelection = (id) => {
    const materials = [...foundMaterials]
    const index = materials.findIndex((x) => x.id === id)
    materials[index].active = !materials[index].active
    setFoundMaterials(materials)
    setSelectedMaterials(materials.filter((x) => x.active))
  }

  // gets the material name where the first letter is a capital
  const getMaterialName = (name) => {
    if (!name) return
    return name.charAt(0).toUpperCase() + name.slice(1)
  }

  return (
    <Page title="Materials">
      <Container maxWidth="lg">
        <Hero
          title="Material Checker"
          description="Unsure of the sustainability or biodegradability of your garment material composition? Worry not! Material search feature offers you the option to look up multiple materials at once and learn more about each of their environmental impacts. If you are hesistant about actions that you can take, be sure to check out suggestions of each material to help you with better decision making!"
        />
        <span className={styles.material_title}>Select clothing materials</span>
        <div className={styles.material_search_wrapper}>
          {foundMaterials.map((material) => {
            if (!material.active) {
              return (
                <Chip
                  key={material.id}
                  label={getMaterialName(material.name)}
                  onClick={() => handleSelection(material.id)}
                />
              )
            } else {
              return (
                <Chip
                  key={material.id}
                  label={getMaterialName(material.name)}
                  onClick={() => handleSelection(material.id)}
                  color="success"
                />
              )
            }
          })}
        </div>
        {selectedMaterials.length > 0 && (
          <>
            <MaterialSummary materials={selectedMaterials} />
            <div className={styles.results_wrapper}>
              <span className={styles.title}>
                Material information ({selectedMaterials.length})
              </span>
              {selectedMaterials.map((material, index) => (
                <MaterialItem key={index} material={material} />
              ))}
            </div>
          </>
        )}
      </Container>
    </Page>
  )
}
