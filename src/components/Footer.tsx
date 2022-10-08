import React from "react"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import Link from "@mui/material/Link"

const Footer = () => {
  return (
    <Grid item xs={12} mt={2}>
      <Typography
        sx={{ textAlign: "center", fontWeight: 300 }}
        variant="body1"
        color="secondary"
      >
        Simple CRUD app made by{" "}
        <Link
          href="https://nadialefebvre.dev/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Nadia Lefebvre
        </Link>
        <br />
        Source code available on{" "}
        <Link
          href="https://github.com/nadialefebvre/code-test-crud-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </Link>
      </Typography>
    </Grid>
  )
}

export default Footer
