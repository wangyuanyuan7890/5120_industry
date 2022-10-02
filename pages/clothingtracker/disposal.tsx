import Hero from "@/components/Hero"
import Page from "@/components/Page"
import { fetchClothingItems } from "@/util/clothingtracker"
import {
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

const breadcrumbs = [
  { label: "Tracker", href: "/clothingtracker" },
  { label: "Disposal tool" },
]

// column header values
const headCells: any[] = [
  { id: 1, label: "Name", width: 40 },
  { id: 2, label: "Type", width: 40 },
  { id: 3, label: "Wear count", width: 20, align: "center" },
]

export default function Disposal() {
  const router = useRouter()
  const [clothingItem, setClothingItem] = useState<ClothingItem>(null)

  // checks if a clothing item Id is in the query params otherwise will return to the clothing tracker page
  useEffect(() => {
    if (!router.isReady) return
    const queryId: any = router.query["id"]
    if (!queryId) {
      router.push("/clothingtracker")
      return
    }
    const item = fetchClothingItems(queryId)[0]
    if (!item) {
      router.push("/clothingtracker")
      return
    }
    setClothingItem(item)
  }, [router])

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
                    <span className={styles.text}>{clothingItem.name}</span>
                  </TableCell>
                  <TableCell>
                    <span className={styles.text}>{clothingItem.type}</span>
                  </TableCell>
                  <TableCell>
                    <div className={styles.counter_wrapper}>
                      <span className={styles.text}>
                        {clothingItem.wearCount}
                      </span>
                    </div>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        ) : (
          <span>No content</span>
        )}
      </Container>
    </Page>
  )
}
