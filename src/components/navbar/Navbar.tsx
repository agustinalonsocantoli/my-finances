// React
import { useState } from "react";
import { Link } from "react-router-dom";
// MUI
import { Box, Typography, useTheme } from "@mui/material";
import WalletIcon from '@mui/icons-material/Wallet';
// Theme
import { FlexBetween } from "@/themes/components/FlexBetween";

export const Navbar = () => {
    const { palette } = useTheme();
    const [ selected, setSelected ] = useState("Dashboard");

    return(
        <FlexBetween mb="0.25rem" p="0.5rem 0rem" color={palette.grey[300]}>
            <FlexBetween gap="0.75rem">
                <WalletIcon sx={{ fontSize: "28px" }} />
                <Typography variant="h4" fontSize="16px">
                    MyFinances
                </Typography>
            </FlexBetween>

            <FlexBetween gap="2rem">
                <Box sx={{ "&:hover": { color: palette.primary[100] } }}>
                    <Link to={"/"} 
                    onClick={() => setSelected("Dashboard")} 
                    style={{
                        color: selected === "Dashboard" ? "inherit" : palette.grey[700],
                        textDecoration: "inherit"
                    }}
                    >
                        Dashboard
                    </Link>
                </Box>

                <Box sx={{ "&:hover": { color: palette.primary[100] } }}>
                    <Link to={"/predictions"} 
                    onClick={() => setSelected("Predictions")} 
                    style={{
                        color: selected === "Predictions" ? "inherit" : palette.grey[700],
                        textDecoration: "inherit"
                    }}
                    >
                        Predictions
                    </Link>
                </Box>
            </FlexBetween>
        </FlexBetween>
    );
}