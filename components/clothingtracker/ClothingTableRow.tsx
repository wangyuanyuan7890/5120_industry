import React, { useState } from "react"
import {
  IconButton,
  MenuItem,
  TableCell,
  TableRow,
  TextField,
} from "@mui/material"
import styles from "@/styles/components/clothingtracker/ClothingTableRow.module.scss"

import AddIcon from "@mui/icons-material/Add"
import RemoveIcon from "@mui/icons-material/Remove"

type Props = {
  clothingItem?: ClothingItem
  editMode?: boolean
}

interface ClothingType {
  name: string
  value: number
}

const clothingTypes: ClothingType[] = [
  { name: "Other", value: 0 },
  { name: "Headwear", value: 1 },
  { name: "Shirt", value: 2 },
  { name: "Jacket", value: 3 },
  { name: "Jumper", value: 4 },
  { name: "Pants", value: 5 },
  { name: "Shorts", value: 6 },
  { name: "Shoes", value: 7 },
]

export default function ClothingTableRow({ clothingItem, editMode }: Props) {
  const [modifiedClothingItem, setModifiedClothingItem] = useState({
    ...clothingItem,
  })

  const handleEditClothingItemType = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const item: ClothingItem = { ...modifiedClothingItem }
    item.type = parseInt(e.target.value)
    console.log(item)
    setModifiedClothingItem(item)
  }

  if (clothingItem && !editMode) {
    return (
      <TableRow key={clothingItem.id}>
        <TableCell>{clothingItem.name}</TableCell>
        <TableCell>{clothingItem.type}</TableCell>
        <TableCell>{JSON.stringify(clothingItem.materials)}</TableCell>
        <TableCell>{clothingItem.wearCount}</TableCell>
        <TableCell>Delete</TableCell>
      </TableRow>
    )
  } else {
    return (
      <TableRow>
        <TableCell colSpan={1}>
          <TextField label="Name" variant="standard" />
        </TableCell>
        <TableCell colSpan={1}>
          <TextField
            select
            label="Clothing type"
            variant="standard"
            value={modifiedClothingItem?.type || 0}
            onChange={handleEditClothingItemType}
            className={styles.full_width}
          >
            {clothingTypes.map((x) => (
              <MenuItem key={x.value} value={x.value}>
                {x.name}
              </MenuItem>
            ))}
          </TextField>
        </TableCell>
        <TableCell colSpan={1}>DEF</TableCell>
        <TableCell colSpan={1}>
          {0}
          <IconButton color="success">
            <AddIcon />
          </IconButton>
          <IconButton color="error">
            <RemoveIcon />
          </IconButton>
        </TableCell>
        <TableCell colSpan={1}>Delete</TableCell>
      </TableRow>
    )
  }
}
