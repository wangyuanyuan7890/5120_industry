import React from "react"
import styles from "@/styles/components/clothingtracker/DisposalOption.module.scss"
import { Box, Typography } from "@mui/material"

export default function DisposalOption({ title, description }) {
  return (
    <Box
      sx={{
        textAlign: "center",
        backgroundColor: "white",
        borderRadius: "0.5em",
        boxShadow: "1px 1px 2px 1px #888888",
        padding: "0.75em",
        cursor: "pointer",
        transition: "all 200ms ease",
        "&:hover": {
          color: "white",
          backgroundColor: "black",
          boxShadow: "1px 1px 2px 1px #2c2c2c",
          ".title": {
            color: "#0ac05e",
          },
        },
      }}
    >
      <Typography variant="h6" className="title">
        {title}
      </Typography>
      <Typography variant="body1">{description}</Typography>
    </Box>
  )
}
