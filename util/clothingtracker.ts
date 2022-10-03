export const CLOTHING_ITEMS_KEY = "clothing-data"

export function fetchClothingItems(id?: string | null): ClothingItem[] {
  const json = localStorage.getItem(CLOTHING_ITEMS_KEY)
  if (!json) return []
  const parsedJson = JSON.parse(json)
  if (!id) return parsedJson
  return parsedJson.filter((x: ClothingItem) => x.id === id)
}

export function saveClothingItems(items: ClothingItem[]): void {
  localStorage.setItem(CLOTHING_ITEMS_KEY, JSON.stringify(items))
}

export function removeClothingItems(): void {
  localStorage.removeItem(CLOTHING_ITEMS_KEY)
}
