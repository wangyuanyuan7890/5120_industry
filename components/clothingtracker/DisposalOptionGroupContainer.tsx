import { Box, useMediaQuery } from "@mui/material"
import React from "react"
import DisposalOption from "./DisposalOption"

export default function DisposalOptionGroupContainer({ options }) {
  return options.map((x: any, index: number) => (
    <DisposalOption key={index} title={x.title} description={x.description} />
  ))
}
