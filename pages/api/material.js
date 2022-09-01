import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export default async function handler(req, res) {
  // only accept post requests
  if (req.method !== "POST") {
    res.status(405).end()
  }

  const { materials } = JSON.parse(req.body)
  // no materials found
  if (!materials || materials.length === 0) res.status(204).end()

  // find materials where they exist in our list of materials
  const foundMaterials = await prisma.material.findMany({
    where: {
      name: { in: materials },
    },
  })

  // send appropriate response if we found materials or not
  if (foundMaterials.length > 0) {
    res.status(200).json({ materials: foundMaterials })
  } else {
    res.status(204).end()
  }
}
