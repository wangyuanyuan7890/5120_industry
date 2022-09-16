import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material"
import React, { useState } from "react"
import styles from "@/styles/components/clothingtracker/ClothingTable.module.scss"
import ClothingImage from "@/public/clothingtracker/clothing.svg"
import ClothingTableRow from "./ClothingTableRow"

type Props = {
  clothingItems: ClothingItem[]
  setClothingItems: Function
}

const headCells: any[] = [
  { id: 1, label: "Name" },
  { id: 2, label: "Type" },
  { id: 3, label: "Materials" },
  { id: 4, label: "Wear count" },
]

export default function ClothingTable({
  clothingItems,
  setClothingItems,
}: Props) {
  const [isAddingItem, setIsAddingItem] = useState<boolean>(false)

  const handleClear = () => {
    setIsAddingItem(false)
  }

  const handleAdd = () => {
    setIsAddingItem(true)
  }

  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            {headCells.map((x) => (
              <TableCell key={x.id}>{x.label}</TableCell>
            ))}
            <TableCell>
              <div className={styles.toolbar}>
                <Button
                  variant="text"
                  className={styles.buttonTransparent}
                  onClick={handleClear}
                >
                  Clear
                </Button>
                <Button
                  variant="contained"
                  className={styles.button}
                  onClick={handleAdd}
                >
                  Add
                </Button>
              </div>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {isAddingItem && <ClothingTableRow editMode={true} />}
          {clothingItems.length > 0 && (
            <>
              {clothingItems.map((x) => (
                <ClothingTableRow clothingItem={x} />
              ))}
            </>
          )}
          {!isAddingItem && clothingItems.length <= 0 && (
            <TableRow>
              <TableCell colSpan={5}>
                <div className={styles.notfound_container}>
                  <ClothingImage className={styles.image} />
                  <span className={styles.title}>No clothing items found</span>
                </div>
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
