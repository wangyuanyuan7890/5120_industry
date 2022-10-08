import React, { Component } from "react"
import LinkButton from "../LinkButton"
import { Box } from "@mui/system"
import { SvgIcon, Typography } from "@mui/material"
import Image from "next/image"
import { useRouter } from "next/router"

// Home page feature template to represent a feature in the website
export default function Feature({ title, description, image, link }) {
  const router = useRouter()
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
      onClick={() => router.push(link)}
    >
      <SvgIcon component={image} viewBox="0 0 48 48" fontSize="large" />
      <Typography variant="h6" className="title">
        {title}
      </Typography>
      <Typography variant="body1">{description}</Typography>
    </Box>
  )
}
