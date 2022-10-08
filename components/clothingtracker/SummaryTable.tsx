import { fetchClothingItems } from "@/util/clothingtracker"
import {
  TableContainer,
  Table,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
  TableSortLabel,
} from "@mui/material"
import React, { useEffect, useState } from "react"
import SummaryTableRow from "./SummaryTableRow"

interface HeaderCell {
  id: number
  label: string
  index: string
  width: string
  center: boolean
  type: string
}

// header cell values for each column
const headerCells = [
  {
    id: 1,
    label: "Name",
    index: "name",
    width: "30%",
    center: false,
    type: "string",
  },
  {
    id: 2,
    label: "Type",
    index: "type",
    width: "20%",
    center: false,
    type: "string",
  },
  {
    id: 3,
    label: "Materials",
    index: "materials",
    width: "20%",
    center: false,
    type: null,
  },
  {
    id: 4,
    label: "Wear count",
    index: "wearCount",
    width: "15%",
    center: true,
    type: "number",
  },
  {
    id: 5,
    label: "Biodegradable",
    index: "biodegradable",
    width: "10%",
    center: true,
    type: "boolean",
  },
  {
    id: 6,
    label: "Sustainable",
    index: "sustainable",
    width: "10%",
    center: true,
    type: "boolean",
  },
]

type Order = "asc" | "desc"

export default function SummaryTable({ clothingItems }) {
  const [orderBy, setOrderBy] = useState(null)
  const [orderDirection, setOrderDirection] = useState<Order>("asc")

  // sets the sorting direction of a column
  const handleSort = (id: number) => {
    if (orderBy === id) {
      if (orderDirection === "asc") {
        setOrderDirection("desc")
      } else {
        setOrderDirection("asc")
      }
    } else {
      setOrderBy(id)
    }
  }

  // sorts by the selected column
  const sortedRows = (): ClothingItem[] => {
    const items: ClothingItem[] = [...clothingItems]
    let sortedItems: ClothingItem[] = []
    const header: HeaderCell = headerCells.find((x) => x.id === orderBy)
    if (!header) return items
    if (header.type === "string" || header.type === "number") {
      sortedItems = items.sort((x, y) => {
        const a = x[header.index]
        const b = y[header.index]
        if (orderDirection === "asc") {
          if (a < b) return -1
          if (a > b) return 1
          return 0
        } else {
          if (a < b) return 1
          if (a > b) return -1
          return 0
        }
      })
    } else if (header.type === "boolean") {
      sortedItems = items.sort((x, y) => {
        let a: boolean
        let b: boolean
        if (header.index === "biodegradable") {
          a = isBiodegradable(x.materials)
          b = isBiodegradable(y.materials)
        } else if (header.index === "sustainable") {
          a = isSustainable(x.materials)
          b = isSustainable(y.materials)
        }
        if (orderDirection === "asc") {
          return a === b ? 0 : a ? -1 : 1
        } else {
          return a === b ? 0 : a ? 1 : -1
        }
      })
    }
    return sortedItems
  }

  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            {headerCells.map((x) => (
              <TableCell
                key={x.id}
                sx={{ width: x.width, textAlign: x.center && "center" }}
                sortDirection={orderBy === x.id ? orderDirection : false}
              >
                <>
                  {x.type ? (
                    <TableSortLabel
                      active={orderBy === x.id}
                      direction={orderBy === x.id ? orderDirection : "asc"}
                      onClick={() => handleSort(x.id)}
                    >
                      {x.label}
                    </TableSortLabel>
                  ) : (
                    <span>{x.label}</span>
                  )}
                </>
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {sortedRows().map((x: ClothingItem) => (
            <SummaryTableRow key={x.id} clothingItem={x} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export const isBiodegradable = (materials: Material[]): boolean => {
  let biodegradable = true
  materials.map((x) => {
    if (!x.biodegradable) biodegradable = false
  })
  return biodegradable
}

export const isSustainable = (materials: Material[]): boolean => {
  let sustainabilityScore = 0
  materials.map((x) => {
    sustainabilityScore += x.sustainability_score
  })
  sustainabilityScore /= materials.length
  return sustainabilityScore >= 0.6
}
