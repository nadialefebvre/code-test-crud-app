import React from "react"
import Chip from "@mui/material/Chip"

interface Props {
  color:
    | "default"
    | "primary"
    | "secondary"
    | "error"
    | "info"
    | "success"
    | "warning"
    | undefined
  label: string
  size?: "small" | "medium" | undefined
  variant: "filled" | "outlined" | undefined
  onClickFunction?: () => void
}

const FeelingChip = ({
  color,
  label,
  size,
  variant,
  onClickFunction,
}: Props) => {
  return (
    <Chip
      color={color}
      label={label}
      size={size}
      variant={variant}
      onClick={onClickFunction}
    />
  )
}

export default FeelingChip
