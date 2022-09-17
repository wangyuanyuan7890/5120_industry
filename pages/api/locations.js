import path from 'path';
import { promises as fs } from 'fs';
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

// shop location end point to return data of all shop locations from the database
export default async function handler(req, res) {
    if (req.method !== "GET") {
        res.status(405).end() // if request type is not a GET request then throw a method not allowed response
    }

    // const foundShops = await prisma.shop.findMany()
    const foundShopLocations = await prisma.shopLocation.findMany({
        include:{
            shop: true, // include shop within shop location
        },
    })

    // send appropriate response if we found appropriate shop locations or not
    if (foundShopLocations?.length>0){
        res.status(200).json({shopLocations: foundShopLocations})
    } else {
        res.status(204).end()
    }
}