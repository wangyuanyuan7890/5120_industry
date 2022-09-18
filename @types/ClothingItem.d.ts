declare interface ClothingItem {
  id: string
  name: string
  type: string
  materials: Material[]
  selectedMaterialIds: number[]
  wearCount: number
  isEditing: boolean
}
