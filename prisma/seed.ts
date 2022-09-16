import { PrismaClient } from "@prisma/client"
import materials from "./materials"

const prisma = new PrismaClient()

async function main() {
  console.log(`Start seeding ...`)
  for (const m of materials) {
    const material = await prisma.material.create({
      data: m,
    })
    console.log(
      `Created material with id: ${material.id} and name: ${material.name}`
    )
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
