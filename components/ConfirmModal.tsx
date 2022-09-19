import { Modal, Box, Typography, Button } from "@mui/material"
import React, { useState } from "react"
import styles from "@/styles/components/ConfirmModal.module.scss"

const style = {
  display: "flex",
  flexDirection: "column",
  gap: "1em",
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
}

export default function ConfirmModal({ open, setOpen, onConfirm, text }) {
  const handleConfirm = () => {
    onConfirm(true)
    setOpen(false)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={style}>
        <Typography variant="h6" component="h2">
          {text}
        </Typography>
        <div className={styles.action_group}>
          <Button
            variant="contained"
            className={styles.button}
            onClick={handleConfirm}
          >
            Yes
          </Button>
          <Button
            variant="text"
            className={styles.buttonTransparent}
            onClick={handleClose}
          >
            No
          </Button>
        </div>
      </Box>
    </Modal>
  )
}
