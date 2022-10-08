import Scene from "@/components/home/SplineScene"
import { Box, CircularProgress, Typography } from "@mui/material"
import { OrbitControls } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { Suspense, useState } from "react"

import styles from "@/styles/components/home/SplineContainer.module.scss"

const items = {
  tracker: {
    name: "Clothing tracker",
    description: "Keep track of your clothing and see how sustainable you are.",
    link: "/clothingtracker",
  },
  materialRack: {
    name: "Material checker",
    description: "See information and advice about clothing materials.",
    link: "/materials",
  },
  lifecycle: {
    name: "Lifecycle",
    description:
      "Take a look at the clothing lifecycle and what you should do at each stage.",
    link: "/lifecycle",
  },
  map: {
    name: "Sustainable locations",
    description:
      "See a map showing op shops, repair locations, donation and recycling points.",
    link: "/sustainablelocations",
  },
  story: {
    name: "Comparative story",
    description: "See how your clothing impact compares to statistical data.",
    link: "/trends",
  },
}

export default function SplineContainer({ target }) {
  const [hoveredItem, setHoveredItem] = useState(null)
  return (
    <Suspense
      fallback={
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            gap: "0.5em",
            height: "100%",
          }}
        >
          <CircularProgress color="success" size={60} thickness={4} />
          <Typography variant="h6">Loading scene...</Typography>
        </Box>
      }
    >
      <div className={styles.scene_container}>
        {hoveredItem && (
          <div className={styles.overlay}>
            <Typography variant="h6">{hoveredItem.name}</Typography>
            <Typography variant="body1" sx={{ fontSize: "1.1em" }}>
              {hoveredItem.description}
            </Typography>
          </div>
        )}
        <Canvas
          shadows
          flat
          linear
          onCreated={(state) => state.events.connect(target.current)}
        >
          <Scene
            items={items}
            hoveredItem={hoveredItem}
            setHoveredItem={setHoveredItem}
          />
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            minPolarAngle={Math.PI / 2 - 0.4}
            maxPolarAngle={Math.PI / 2 + 0.5}
            minAzimuthAngle={Math.PI / 2 + 0.1}
            maxAzimuthAngle={Math.PI - 0.5}
          />
        </Canvas>
      </div>
    </Suspense>
  )
}
