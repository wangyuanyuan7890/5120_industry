import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

// Material endpoint to return data about the materials searched
export default async function handler(req, res) {
  // only accept post requests
  if (req.method !== "GET") {
    res.status(405).end()
  }

  const foundMaterials = await prisma.material.findMany()

  // send appropriate response if we found materials or not
  if (foundMaterials?.length > 0) {
    res.status(200).json({
      materials: foundMaterials,
    })
  } else {
    res.status(204).end()
  }
}
