export const CLOTHING_ITEMS_KEY = "clothing-data"

export function fetchClothingItems(): ClothingItem[] {
  const json = localStorage.getItem(CLOTHING_ITEMS_KEY)
  if (json) return JSON.parse(json)
  return []
}

export function saveClothingItems(items: ClothingItem[]): void {
  localStorage.setItem(CLOTHING_ITEMS_KEY, JSON.stringify(items))
}

export function removeClothingItems(): void {
  localStorage.removeItem(CLOTHING_ITEMS_KEY)
}