import { Box, useMediaQuery } from "@mui/material"
import React from "react"
import DisposalOption from "./DisposalOption"

export default function DisposalOptionGroupContainer({ options }) {
  const isMobile = useMediaQuery("(max-width:768px)")

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: !isMobile ? "1fr 1fr 1fr" : "1fr",
        columnGap: "1em",
        rowGap: "1em",
      }}
    >
      {options.map((x: any, index: number) => (
        <DisposalOption
          key={index}
          title={x.title}
          description={x.description}
        />
      ))}
    </Box>
  )
}
