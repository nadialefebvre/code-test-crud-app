import React from "react"
import Box from "@mui/material/Box"
import { ThemeProvider } from "@mui/material/styles"

import Start from "./pages/Start"
import { theme } from "./utils/theme"

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ margin: 4 }}>
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
