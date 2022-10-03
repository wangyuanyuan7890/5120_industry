import React, { useState } from "react"
import {
  Alert,
  Box,
  Checkbox,
  Chip,
  FormControl,
  IconButton,
  InputLabel,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  OutlinedInput,
  Select,
  Snackbar,
  SvgIcon,
  TableCell,
  TableRow,
  TextField,
  Tooltip,
} from "@mui/material"
import { v4 as uuidv4 } from "uuid"
import styles from "@/styles/components/clothingtracker/ClothingTableRow.module.scss"

import AddIcon from "@mui/icons-material/Add"
import RemoveIcon from "@mui/icons-material/Remove"
import DoneIcon from "@mui/icons-material/Done"
import ClearIcon from "@mui/icons-material/Clear"
import DeleteIcon from "@mui/icons-material/Delete"
import EditIcon from "@mui/icons-material/Edit"
import MoreVertIcon from "@mui/icons-material/MoreVert"
import ConfirmModal from "../ConfirmModal"
import RecyclingIcon from "@/public/clothingtracker/recycling.svg"
import { useRouter } from "next/router"

type Props = {
  index?: number
  clothingItem?: ClothingItem
  updateClothingItem: Function
  deleteClothingItem: Function
  setIsAddingItem?: Function
  materials: Material[]
  handleShowError: Function
}

interface ClothingType {
  name: string
  value: string
}

export const clothingTypes: ClothingType[] = [
  { name: "Headwear", value: "1" },
  { name: "Shirt", value: "2" },
  { name: "Jacket", value: "3" },
  { name: "Jumper", value: "4" },
  { name: "Pants", value: "5" },
  { name: "Shorts", value: "6" },
  { name: "Shoes", value: "7" },
  { name: "Other", value: "8" },
]

const defaultItem = {
  id: "",
  name: "",
  type: "",
  materials: [],
  selectedMaterialIds: [],
  wearCount: 0,
  isEditing: true,
}

// shows a clothing record in the clothing tracker
export default function ClothingTableRow({
  index,
  clothingItem,
  setIsAddingItem,
  updateClothingItem,
  deleteClothingItem,
  materials,
  handleShowError,
}: Props) {
  const router = useRouter()
  const [modifiedClothingItem, setModifiedClothingItem] = useState(
    clothingItem ? { ...clothingItem } : { ...defaultItem }
  )
  const [openDeleteModal, setOpenDeleteModal] = useState<boolean>(false)
  const [dirtyName, setDirtyName] = useState<boolean>(false)
  const [dirtyType, setDirtyType] = useState<boolean>(false)
  const [dirtyMaterial, setDirtyMaterial] = useState<boolean>(false)
  const [menuAnchor, setMenuAnchor] = useState<null | HTMLElement>(null)
  const menuOpen = Boolean(menuAnchor)

  const handleMenuClick = (event: React.MouseEvent<HTMLElement>) => {
    setMenuAnchor(event.currentTarget)
  }
  const handleMenuClose = () => {
    setMenuAnchor(null)
  }

  const handleEditName = (e: React.ChangeEvent<HTMLInputElement>) => {
    const item: ClothingItem = { ...modifiedClothingItem }
    item.name = e.target.value
    setModifiedClothingItem(item)
    setDirtyName(true)
  }

  const handleEditType = (e: React.ChangeEvent<HTMLInputElement>) => {
    const item: ClothingItem = { ...modifiedClothingItem }
    item.type = e.target.value
    setModifiedClothingItem(item)
    setDirtyType(true)
  }

  const handleEditMaterials = (e: any) => {
    const item: ClothingItem = { ...modifiedClothingItem }
    const materialIds = e.target.value
    item.selectedMaterialIds = materialIds
    item.materials = []
    item.selectedMaterialIds.forEach((id: number) => {
      const foundMaterial: Material = materials.find((x) => x.id === id)
      item.materials.push(foundMaterial)
    })
    setModifiedClothingItem(item)
    setDirtyMaterial(true)
  }

  const handleEditWearCount = (e: React.ChangeEvent<HTMLInputElement>) => {
    const item: ClothingItem = { ...modifiedClothingItem }
    item.wearCount = parseInt(e.target.value)
    setModifiedClothingItem(item)
    setDirtyType(true)
  }

  const handleAddCount = () => {
    const item: ClothingItem = { ...modifiedClothingItem }
    item.wearCount = item.wearCount + 1
    setModifiedClothingItem(item)
    if (!modifiedClothingItem.isEditing && index !== undefined) {
      updateClothingItem(item)
    }
  }

  const handleReduceCount = () => {
    const item: ClothingItem = { ...modifiedClothingItem }
    if (item.wearCount === 0) return
    item.wearCount = item.wearCount - 1
    setModifiedClothingItem(item)
    if (!modifiedClothingItem.isEditing && index !== undefined) {
      updateClothingItem(item)
    }
  }

  const setDirtyState = (value: boolean) => {
    setDirtyName(value)
    setDirtyType(value)
    setDirtyMaterial(value)
  }

  const handleConfirm = () => {
    setMenuAnchor(null)
    let item: ClothingItem = { ...modifiedClothingItem }
    if (
      modifiedClothingItem.isEditing &&
      (invalidName(item.name) ||
        invalidType(item.type) ||
        invalidMaterialSelection(item.selectedMaterialIds))
    ) {
      // show popup error
      if (item.name.length > 30) {
        handleShowError("Name must be less than 30 characters")
      } else {
        handleShowError(null)
      }
      setDirtyState(true)
      return
    } else {
      if (index === undefined) {
        setIsAddingItem(false)
      }
      if (item.id === "") item.id = uuidv4()
      item.isEditing = false
      setModifiedClothingItem(item)
      updateClothingItem(item)
      setDirtyState(false)
      return
    }
  }

  const handleCancel = () => {
    setMenuAnchor(null)
    const item: ClothingItem = { ...clothingItem }
    if (index === undefined) {
      setIsAddingItem(false)
    } else {
      item.isEditing = false
      setModifiedClothingItem(item)
    }
    setDirtyState(false)
  }

  const handleEdit = () => {
    const item: ClothingItem = { ...modifiedClothingItem }
    item.isEditing = true
    setModifiedClothingItem(item)
  }

  const handleDelete = () => {
    deleteClothingItem(clothingItem)
  }

  const getMaterialNameFromId = (id: number) => {
    const foundMaterial = materials.find((x) => x.id === id)
    if (!foundMaterial) return ""
    return formatName(foundMaterial.name)
  }

  const formatName = (name: string) => {
    return name.charAt(0).toUpperCase() + name.slice(1)
  }

  const getTypeNameFromId = (value: string) => {
    const foundType = clothingTypes.find((x) => x.value === value)
    if (!foundType) return ""
    return foundType.name
  }

  const handleDeleteModalConfirm = (value?: boolean) => {
    if (value) handleDelete()
  }

  // checks for invalid names
  const invalidName = (name: string) => {
    if (!name || name === "") return true
    if (name.length > 30) return true
    return false
  }

  // checks for invalid types
  const invalidType = (type: string) => {
    if (!type || type === "") return true
    return false
  }

  // checks for invalid materials
  const invalidMaterialSelection = (materialIds: number[]) => {
    if (!materialIds || !(materialIds.length > 0)) return true
    return false
  }

  const invalidWearCount = (count: number) => {
    if (count < 0) return true
    return false
  }

  const handleRecycleItem = () => {
    const item: ClothingItem = { ...clothingItem }
    router.push({
      pathname: "/clothingtracker/disposal",
      query: {
        id: item.id,
      },
    })
  }

  return (
    <>
      <TableRow
        sx={{
          backgroundColor:
            (index === undefined && "#003d6321") ||
            (modifiedClothingItem.isEditing && "#63000021"),
        }}
      >
        <TableCell sx={{ textAlign: "center" }}>
          <Chip
            label={
              index !== undefined
                ? modifiedClothingItem.isEditing
                  ? "Editing"
                  : "Saved"
                : "New"
            }
            color={
              index !== undefined
                ? modifiedClothingItem.isEditing
                  ? "error"
                  : "success"
                : "info"
            }
          ></Chip>
        </TableCell>
        <TableCell>
          {modifiedClothingItem.isEditing ? (
            <TextField
              error={dirtyName && invalidName(modifiedClothingItem.name)}
              label="Name"
              value={modifiedClothingItem?.name || ""}
              onChange={handleEditName}
              sx={{ maxWidth: "100%" }}
            />
          ) : (
            <Box sx={{ width: "100%" }}>
              <span className={styles.text}>{modifiedClothingItem.name}</span>
            </Box>
          )}
        </TableCell>
        <TableCell>
          {modifiedClothingItem.isEditing ? (
            <TextField
              select
              label="Clothing type"
              value={modifiedClothingItem?.type || ""}
              onChange={handleEditType}
              sx={{ width: "100%" }}
              error={dirtyType && invalidType(modifiedClothingItem.type)}
            >
              <MenuItem value="">None</MenuItem>
              {clothingTypes.map((x) => (
                <MenuItem key={x.value} value={x.value}>
                  {x.name}
                </MenuItem>
              ))}
            </TextField>
          ) : (
            <span className={styles.text}>
              {getTypeNameFromId(modifiedClothingItem.type)}
            </span>
          )}
        </TableCell>
        <TableCell>
          {modifiedClothingItem.isEditing ? (
            <FormControl
              sx={{ width: "100%" }}
              error={
                dirtyMaterial &&
                invalidMaterialSelection(
                  modifiedClothingItem.selectedMaterialIds
                )
              }
            >
              <InputLabel>Materials</InputLabel>
              <Select
                multiple
                value={modifiedClothingItem?.selectedMaterialIds || []}
                onChange={handleEditMaterials}
                input={<OutlinedInput label="Materials" />}
                renderValue={(selected) => (
                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                    {selected.map((value) => (
                      <Chip
                        key={value}
                        size="small"
                        label={getMaterialNameFromId(value)}
                        color="success"
                      />
                    ))}
                  </Box>
                )}
              >
                {materials.sort().map((material: Material) => (
                  <MenuItem
                    key={material.id}
                    value={material.id}
                    sx={{
                      "&.Mui-selected": {
                        backgroundColor: "#7aae92",
                        "&:hover": {
                          backgroundColor: "#8ebaa2",
                        },
                      },
                    }}
                  >
                    <Checkbox
                      checked={
                        modifiedClothingItem?.selectedMaterialIds?.indexOf(
                          material.id
                        ) > -1
                      }
                      color="success"
                    />
                    <ListItemText primary={formatName(material.name)} />
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          ) : (
            <div className={styles.materials_container}>
              {modifiedClothingItem.materials.map((x: Material) => (
                <Chip
                  key={x.id}
                  size="small"
                  label={formatName(x.name)}
                  color="success"
                />
              ))}
            </div>
          )}
        </TableCell>
        <TableCell sx={{ padding: 0 }}>
          <div className={styles.counter_container}>
            {modifiedClothingItem.isEditing ? (
              <TextField
                label="Wears"
                type="number"
                InputLabelProps={{
                  shrink: true,
                }}
                onChange={handleEditWearCount}
                value={modifiedClothingItem?.wearCount || "0"}
                sx={{ width: "100%" }}
                error={
                  dirtyType && invalidWearCount(modifiedClothingItem.wearCount)
                }
              />
            ) : (
              <>
                <IconButton
                  color="error"
                  size="small"
                  onClick={() => handleReduceCount()}
                >
                  <RemoveIcon />
                </IconButton>
                <span className={styles.counter}>
                  {modifiedClothingItem?.wearCount || 0}
                </span>
                <IconButton
                  color="success"
                  size="small"
                  onClick={() => handleAddCount()}
                >
                  <AddIcon />
                </IconButton>
              </>
            )}
          </div>
        </TableCell>
        <TableCell sx={{ padding: 0 }}>
          <div className={styles.center_group}>
            {modifiedClothingItem.isEditing ? (
              <>
                <IconButton color="success" onClick={() => handleConfirm()}>
                  <DoneIcon />
                </IconButton>
                <IconButton color="error" onClick={() => handleCancel()}>
                  <ClearIcon />
                </IconButton>
              </>
            ) : (
              <>
                <Tooltip title="Disposal tool" className={styles.recycle_hover}>
                  <IconButton onClick={handleRecycleItem}>
                    <SvgIcon component={RecyclingIcon} viewBox="3 2 42 42" />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Options">
                  <IconButton onClick={handleMenuClick}>
                    <MoreVertIcon />
                  </IconButton>
                </Tooltip>
                <Menu
                  open={menuOpen}
                  anchorEl={menuAnchor}
                  onClose={handleMenuClose}
                >
                  <MenuItem onClick={() => handleEdit()}>
                    <ListItemIcon>
                      <EditIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText>Edit</ListItemText>
                  </MenuItem>
                  <MenuItem onClick={() => setOpenDeleteModal(true)}>
                    <ListItemIcon>
                      <DeleteIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText>Delete</ListItemText>
                  </MenuItem>
                </Menu>
                <ConfirmModal
                  open={openDeleteModal}
                  setOpen={setOpenDeleteModal}
                  onConfirm={handleDeleteModalConfirm}
                  text="Are you sure you want to delete this item?"
                />
              </>
            )}
          </div>
        </TableCell>
      </TableRow>
    </>
  )
}
