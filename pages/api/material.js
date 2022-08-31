export default function handler(req, res) {
  // only accept post requests
  if (req.method !== "POST") {
    res.status(405).end()
  }

  const { materials } = JSON.parse(req.body)
  // no materials found
  if (!materials || materials.length === 0) res.status(204).end()

  // setup prisma to take from here
  const foundMaterials = db.filter((x) => {
    if (materials.includes(x.material)) return x
  })

  if (foundMaterials.length > 0) {
    res.status(200).json({ materials: foundMaterials })
  } else {
    res.status(204).end()
  }
}

const db = [
  {
    material: "polyester",
    ethical_sustainability: 0.76,
    description:
      "Require little energy emissions in production and maintainance. Not hugely biodegradable with prominent microplastics",
    suggestion:
      "Seek recycling options. Many stores will attempt to recycle polyester",
    biodegradable: false,
  },
  {
    material: "cotton",
    ethical_sustainability: 0.42,
    description:
      "Cotton production and treatment requires large water consumption in a dry environment. ",
    suggestion:
      "Ask about the cotton sourcing, Natural and Organic Cotton is great!",
    biodegradable: true,
  },
  {
    material: "linen",
    ethical_sustainability: 0.75,
    description:
      "Grown from the natural product, flax. Highly biodegradable if not bleached or dyed.",
    suggestion: "Check whether the linen is bleached or dyed",
    biodegradable: true,
  },
  {
    material: "leather",
    ethical_sustainability: 0.0,
    description:
      "Leather is commonly detrimental to the environment. Neither Biodergadable or ethically sustainable. ",
    suggestion: "Seek synthetic or natural options. Avoid tanned leather.",
    biodegradable: true,
  },
  {
    material: "wool",
    ethical_sustainability: 0.49,
    description:
      "A highly biodegradable material. Assosiated with many ethical issues regarding animal treatment. ",
    suggestion:
      "Ask about the sourcing process. Some great Ethically Sustainable wool options available",
    biodegradable: true,
  },
  {
    material: "silk",
    ethical_sustainability: 0.19,
    description:
      "Highly biodegradable material which requires little water to produce. Often requires environmentally harmful chemical, assosiated with labor and animal issues. ",
    suggestion: "Seek other options than silk.",
    biodegradable: true,
  },
]
