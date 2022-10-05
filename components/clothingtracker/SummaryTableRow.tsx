import { TableRow, TableCell, Typography, Chip, Box } from "@mui/material"
import React from "react"
import { clothingTypes, formatMaterialName } from "./ClothingTableRow"

import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline"
import HighlightOffIcon from "@mui/icons-material/HighlightOff"
import { isBiodegradable, isSustainable } from "./SummaryTable"
import styles from "@/styles/components/clothingtracker/SummaryTableRow.module.scss"

// summary table row for details about each clothing item
export default function SummaryTableRow({ clothingItem }) {
  const getTypeNameById = (value: string) => {
    return clothingTypes.find((x) => x.value === value).name
  }

  const getTypeColor = (value: string): string => {
    return clothingTypes.find((x) => x.value === value).color
  }

  return (
    <TableRow>
      <TableCell>
        <Typography sx={{ wordBreak: "break-all" }}>
          {clothingItem.name}
        </Typography>
      </TableCell>
      <TableCell>
        <Box sx={{ display: "flex", alignItems: "center", gap: "0.5em" }}>
          <Box
            sx={{
              height: 16,
              width: 16,
              background: getTypeColor(clothingItem.type) + "60",
              border: `1px solid ${getTypeColor(clothingItem.type)}`,
              borderRadius: "50%",
            }}
          ></Box>
          <Typography sx={{ wordBreak: "break-all" }}>
            {getTypeNameById(clothingItem.type)}
          </Typography>
        </Box>
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
