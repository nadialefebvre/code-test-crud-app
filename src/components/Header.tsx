import React from "react"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"

const Header = () => {
  return (
    <Grid item xs={12}>
      <Typography
        sx={{
          fontFamily: "Monoton",
          letterSpacing: "8px",
          fontSize: 60,
          textAlign: "center",
        }}
        variant="h1"
        color="secondary"
      >
        • Well Done •
      </Typography>
      <Typography
        sx={{ textAlign: "center", fontWeight: 300 }}
        variant="h5"
        color="text.secondary"
      >
        Find some motivation: list what you've done with how it made you feel.
        <br />
        Warning! This lists disappears after 24hrs!
      </Typography>
    </Grid>
  )
}

export default Header
