// React
import { useMemo } from "react";
// Components
import { Navbar } from "./components/Navbar";
import { Dashboard } from "./pages/Dashboard";
import { Predictions } from "./pages/Predictions";
// MUI
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
// Theme
import { themeSettings } from "./themes/theme";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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
              <Route path="/predictions" element={<Predictions />} />
            </Routes>
          </Box>
        </ThemeProvider>
      </Router>
    </div>
  )
}

export default App
