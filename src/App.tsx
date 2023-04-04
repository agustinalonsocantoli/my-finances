// React
import { useMemo } from "react"
// Components
import { Navbar } from "./components/navbar/Navbar"
import { Dashboard } from "./pages/dashboard/Dashboard"
// MUI
import { Box, CssBaseline, ThemeProvider } from "@mui/material"
import { createTheme } from "@mui/material/styles"
// Theme
import { themeSettings } from "./themes/theme"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {
  const theme = useMemo(() => createTheme(themeSettings), [])

  return (
    <div className='app'>
      <Router>
        <ThemeProvider theme={theme}>
          <CssBaseline />

          <Box width="100%" height="100%" padding="1rem 2rem 4rem 2rem">
            <Navbar />

            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/predictions" element={<div>Predictions Page</div>} />
            </Routes>
          </Box>
        </ThemeProvider>
      </Router>
    </div>
  )
}

export default App
