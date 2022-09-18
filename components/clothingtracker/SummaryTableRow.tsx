import { TableRow, TableCell, Typography } from "@mui/material"
import React from "react"
import { clothingTypes } from "./ClothingTableRow"

import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline"
import HighlightOffIcon from "@mui/icons-material/HighlightOff"
import { isBiodegradable, isSustainable } from "./SummaryTable"

export default function SummaryTableRow({ clothingItem }) {
  const getTypeNameById = (value: string) => {
    return clothingTypes.find((x) => x.value === value).name
  }

  return (
    <TableRow>
      <TableCell>
        <Typography>{clothingItem.name}</Typography>
      </TableCell>
      <TableCell>
        <Typography>{getTypeNameById(clothingItem.type)}</Typography>
      </TableCell>
      <TableCell sx={{ textAlign: "center" }}>
        <Typography variant="h6">{clothingItem.wearCount}</Typography>
      </TableCell>
      <TableCell sx={{ textAlign: "center" }}>
        {isBiodegradable(clothingItem.materials) ? (
          <CheckCircleOutlineIcon color="success" fontSize="large" />
        ) : (
          <HighlightOffIcon color="error" fontSize="large" />
        )}
      </TableCell>
      <TableCell sx={{ textAlign: "center" }}>
        {isSustainable(clothingItem.materials) ? (
          <CheckCircleOutlineIcon color="success" fontSize="large" />
        ) : (
          <HighlightOffIcon color="error" fontSize="large" />
        )}
      </TableCell>
    </TableRow>
  )
}
