// React
import { useMemo } from "react"
// MUI
import { CssBaseline, ThemeProvider } from "@mui/material"
import { createTheme } from "@mui/material/styles"
// Theme
import { themeSettings } from "./themes/theme"

function App() {
  const theme = useMemo(() => createTheme(themeSettings), [])

  return (
    <div className='app'>
      <ThemeProvider theme={theme}>
        <CssBaseline />
      </ThemeProvider>
    </div>
  )
}

export default App
