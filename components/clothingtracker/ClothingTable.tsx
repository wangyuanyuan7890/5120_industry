import {
  Alert,
  Button,
  Snackbar,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material"
import React, { useEffect, useState } from "react"
import styles from "@/styles/components/clothingtracker/ClothingTable.module.scss"
import ClothingImage from "@/public/clothingtracker/clothing.svg"
import ClothingTableRow from "./ClothingTableRow"
import {
  fetchClothingItems,
  removeClothingItems,
  saveClothingItems,
} from "@/util/clothingtracker"
import ConfirmModal from "../ConfirmModal"

type Props = {
  clothingItems: ClothingItem[]
  setClothingItems: Function
}

// column header values
const headCells: any[] = [
  { id: 1, label: "Name", width: 30 },
  { id: 2, label: "Type", width: 25 },
  { id: 3, label: "Materials", width: 20 },
  { id: 4, label: "Total wear count", width: 12.5, align: "center" },
]

// handles all of the clothing records
export default function ClothingTable({
  clothingItems,
  setClothingItems,
}: Props) {
  const [isAddingItem, setIsAddingItem] = useState<boolean>(false)
  const [materials, setMaterials] = useState<Material[]>([])
  const [openClearAllModal, setOpenClearAllModal] = useState<boolean>(false)
  const [openUpdateError, setOpenUpdateError] = useState<boolean>(false)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  const handleShowError = (message: string | null) => {
    setErrorMessage(message)
    setOpenUpdateError(true)
  }

  // fetches clothing from local storage and also queries material API for data
  useEffect(() => {
    const items = fetchClothingItems()
    setClothingItems(items)
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
          setMaterials(sortedMaterials)
        }
      })
      .catch((_err) => {})
  }, [])

  const handleClear = () => {
    setIsAddingItem(false)
    setClothingItems([])
    removeClothingItems()
  }

  const handleAdd = () => {
    setIsAddingItem(true)
  }

  // add clothing item
  const handleAddClothingItem = (clothingItem: ClothingItem) => {
    const items: ClothingItem[] = [...clothingItems, clothingItem]
    setClothingItems(items)
    saveClothingItemsInStorage(items)
    setIsAddingItem(false)
  }

  const checkDuplicateName = (id: string, name: string): boolean => {
    const index = clothingItems.findIndex((x) => x.name === name && x.id !== id)
    if (index === -1) {
      return false
    } else {
      return true
    }
  }

  // update clothing item
  const handleSetClothingItem = (clothingItem: ClothingItem) => {
    const items = [...clothingItems]

    const index = items.findIndex((x) => x.id === clothingItem.id)
    if (index === -1) {
      handleAddClothingItem(clothingItem)
      return
    }
    items[index] = clothingItem
    setClothingItems(items)
    saveClothingItemsInStorage(items)
  }

  const handleDeleteClothingItem = (clothingItem: ClothingItem) => {
    const items = clothingItems.filter((x) => x.id !== clothingItem.id)
    setClothingItems(items)
    saveClothingItemsInStorage(items)
  }

  const saveClothingItemsInStorage = (items: ClothingItem[]) => {
    saveClothingItems(items)
  }

  const getReversedClothingItems = () => {
    return [...clothingItems].reverse()
  }

  const handleClearAllModalConfirm = (value?: boolean) => {
    if (value) handleClear()
  }

  if (!isAddingItem && clothingItems.length <= 0) {
    return (
      <div className={styles.notfound_container}>
        <ClothingImage className={styles.image} />
        <span className={styles.title}>No clothing items found</span>
        <Button
          variant="contained"
          className={styles.button}
          onClick={handleAdd}
        >
          Add clothing item
        </Button>
      </div>
    )
  } else {
    return (
      <>
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
                <TableCell sx={{ width: "12.5%" }}>
                  <div className={styles.toolbar}>
                    <Button
                      variant="text"
                      color="success"
                      onClick={() => setOpenClearAllModal(true)}
                    >
                      Clear
                    </Button>
                    <Button
                      disabled={isAddingItem}
                      variant="contained"
                      onClick={handleAdd}
                      color="success"
                    >
                      Add
                    </Button>
                  </div>
                  <ConfirmModal
                    open={openClearAllModal}
                    setOpen={setOpenClearAllModal}
                    onConfirm={handleClearAllModalConfirm}
                    text="Are you sure you want to clear all clothing items?"
                  />
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {isAddingItem && (
                <ClothingTableRow
                  setIsAddingItem={setIsAddingItem}
                  updateClothingItem={handleSetClothingItem}
                  deleteClothingItem={handleDeleteClothingItem}
                  materials={materials}
                  handleShowError={handleShowError}
                  checkDuplicateName={checkDuplicateName}
                />
              )}
              {clothingItems.length > 0 &&
                getReversedClothingItems().map((x, index) => (
                  <ClothingTableRow
                    key={x.id}
                    index={index}
                    clothingItem={x}
                    updateClothingItem={handleSetClothingItem}
                    deleteClothingItem={handleDeleteClothingItem}
                    materials={materials}
                    handleShowError={handleShowError}
                    checkDuplicateName={checkDuplicateName}
                  />
                ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Snackbar
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          open={openUpdateError}
          autoHideDuration={5000}
          onClose={() => setOpenUpdateError(false)}
        >
          <Alert onClose={() => setOpenUpdateError(false)} severity="error">
            {errorMessage
              ? errorMessage
              : "There was an issue while updating that record"}
          </Alert>
        </Snackbar>
      </>
    )
  }
}
