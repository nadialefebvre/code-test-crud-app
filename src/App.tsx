import React from "react"

import Box from "@mui/material/Box"
import { ThemeProvider } from "@mui/material/styles"

import { theme } from "./utils/theme"

import Start from "./pages/Start"

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          flexGrow: 1,
          margin: 10,
        }}
      >
        <Box
          sx={{
            maxWidth: 900,
            mt: 0,
            mb: 0,
            ml: "auto",
            mr: "auto",
          }}
        >
          <Start />
        </Box>
      </Box>
    </ThemeProvider>
  )
}

export default App
