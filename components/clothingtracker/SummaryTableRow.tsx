import { TableRow, TableCell, Typography } from "@mui/material"
import React from "react"
import { clothingTypes } from "./ClothingTableRow"

import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline"
import HighlightOffIcon from "@mui/icons-material/HighlightOff"
import { isBiodegradable, isSustainable } from "./SummaryTable"

// summary table row for details about each clothing item
export default function SummaryTableRow({ clothingItem }) {
  const getTypeNameById = (value: string) => {
    return clothingTypes.find((x) => x.value === value).name
  }

  return (
    <TableRow>
      <TableCell>
        <Typography sx={{ wordBreak: "break-all" }}>
          {clothingItem.name}
        </Typography>
      </TableCell>
      <TableCell>
        <Typography sx={{ wordBreak: "break-all" }}>
          {getTypeNameById(clothingItem.type)}
        </Typography>
      </TableCell>
      <TableCell sx={{ textAlign: "center" }}>
        <Typography sx={{ fontSize: "1.25em" }}>
          {clothingItem.wearCount}
        </Typography>
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
