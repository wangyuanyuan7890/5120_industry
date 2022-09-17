import { PrismaClient } from "@prisma/client"
import materials from "./materials"
import shopLocations from "./shopLocations"
import shops from "./shops"

const prisma = new PrismaClient()

async function main() {
  console.log(`Start seeding ...`)
  // materials
  console.log(`\nCreating materials [1/2] 🦖`)
  for (const m of materials) {
    const material = await prisma.material.create({
      data: m,
    })
    console.log(
      `Created material with id: ${material.id} and name: ${material.name}`
    )
  }
  // shops
  console.log(`\nCreating shops [2/2] 🦖`)
  for (const s of shops) {
    const locations = shopLocations.filter((x) => x.shopId === s.id)
    const shop = await prisma.shop.create({
      data: s,
    })
    console.log(`Created shop with id: ${shop.id} and name: ${shop.name}`)
    for (const l of locations) {
      const shopLocation = await prisma.shopLocation.create({
        data: l,
      })
      console.log(`\tCreated shop location with address: ${l.address}`)
    }
  }
  console.log(`Seeding finished.`)
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
