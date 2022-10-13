import Hero from "@/components/Hero"
import Page from "@/components/Page"
import { fetchClothingItems } from "@/util/clothingtracker"
import {
  Chip,
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material"
import { useRouter } from "next/router"
import React, { useEffect, useState } from "react"
import styles from "@/styles/pages/clothingtracker/Disposal.module.scss"
import DisposalOptionGroup from "@/components/clothingtracker/DisposalOptionGroup"
import {
  isBiodegradable,
  isSustainable,
} from "@/components/clothingtracker/SummaryTable"
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline"
import HighlightOffIcon from "@mui/icons-material/HighlightOff"
import {
  clothingTypes,
  formatMaterialName,
} from "@/components/clothingtracker/ClothingTableRow"

const breadcrumbs = [
  { label: "Wardrobe", href: "/clothingtracker" },
  { label: "Disposal tool" },
]

// column header values
const headCells: any[] = [
  { id: 1, label: "Name", width: 30 },
  { id: 2, label: "Type", width: 15 },
  { id: 3, label: "Materials", width: 20 },
  { id: 4, label: "Total wear count", width: 15, align: "center" },
  { id: 5, label: "Biodegradable", width: 10, align: "center" },
  { id: 6, label: "Sustainable", width: 10, align: "center" },
]

export default function Disposal() {
  const router = useRouter()
  const [clothingItem, setClothingItem] = useState<any>(null)

  // checks if a clothing item Id is in the query params otherwise will return to the clothing tracker page
  useEffect(() => {
    if (!router.isReady) return
    const queryId: any = router.query["id"]
    if (!queryId) {
      router.push("/clothingtracker")
      return
    }
    const item: any = fetchClothingItems(queryId)[0]
    if (!item) {
      router.push("/clothingtracker")
      return
    }
    item.isBiodegradable = isBiodegradable(item.materials)
    item.isSustainable = isSustainable(item.materials)
    setClothingItem(item)
  }, [router])

  const getTypeNameFromId = (value: string) => {
    const foundType = clothingTypes.find((x) => x.value === value)
    if (!foundType) return ""
    return foundType.name
  }

  return (
    <Page title="Clothing Disposal Tool">
      <Container maxWidth="lg">
        <Hero
          title="Clothing Disposal Tool"
          description="Helping you make sustainable decisions when disposing of clothing."
          breadcrumbs={breadcrumbs}
        ></Hero>
      </Container>
      <Container maxWidth="lg">
        {clothingItem ? (
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  {headCells.map((x) => (
                    <TableCell
                      key={x.id}
                      sx={{
                        width: `${x.width}%`,
                        maxWidth: `${x.width}%`,
                        textAlign: `${x.align || "left"}`,
                      }}
                    >
                      {x.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <span className={styles.text}>
                      {formatMaterialName(clothingItem.name)}
                    </span>
                  </TableCell>
                  <TableCell>
                    <span className={styles.text}>
                      {getTypeNameFromId(clothingItem.type)}
                    </span>
                  </TableCell>
                  <TableCell>
                    <div className={styles.materials_container}>
                      {clothingItem.materials.map((x: Material) => (
                        <Chip
                          key={x.id}
                          size="small"
                          label={formatMaterialName(x.name)}
                          color="success"
                        />
                      ))}
                    </div>
                  </TableCell>
                  <TableCell sx={{ textAlign: "center" }}>
                    <span className={styles.count_text}>
                      {clothingItem.wearCount}
                    </span>
                  </TableCell>
                  <TableCell sx={{ textAlign: "center" }}>
                    {clothingItem.isBiodegradable ? (
                      <CheckCircleOutlineIcon
                        color="success"
                        fontSize="large"
                      />
                    ) : (
                      <HighlightOffIcon color="error" fontSize="large" />
                    )}
                  </TableCell>
                  <TableCell sx={{ textAlign: "center" }}>
                    {clothingItem.isSustainable ? (
                      <CheckCircleOutlineIcon
                        color="success"
                        fontSize="large"
                      />
                    ) : (
                      <HighlightOffIcon color="error" fontSize="large" />
                    )}
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        ) : (
          <span>No content</span>
        )}
      </Container>
      <Container maxWidth="lg">
        <span className={styles.option_title}>What are your options?</span>
        {clothingItem && <DisposalOptionGroup clothingItem={clothingItem} />}
      </Container>
    </Page>
  )
}
