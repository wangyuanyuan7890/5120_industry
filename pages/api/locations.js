import path from 'path';
import { promises as fs } from 'fs';
import { PrismaClient } from "@/prisma/client"

const prisma = new PrismaClient()

export default async function handler(req, res) {
if (req.method !== "GET") {
    res.status(405).end()
}

const foundLocations = await prisma.location.findMany()

if (foundLocations?.length>0){
    res.status(200).json({locations: foundLocations})
} else {
    res.status(204).end()
}

//   //Find the absolute path of the json directory
//   const jsonDirectory = path.join(process.cwd(), 'json');
//   //Read the json data file data.json
//   const fileContents = await fs.readFile(jsonDirectory + '/data.json', 'utf8');
//   //Return the content of the data file in json format
//   res.status(200).json(fileContents);
}