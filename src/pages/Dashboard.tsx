// Components
import { IndicatorA } from "@/components/IndicatorA";
import { IndicatorB } from "@/components/IndicatorB";
import { IndicatorC } from "@/components/IndicatorC";
import { IndicatorD } from "@/components/IndicatorD";
import { IndicatorE } from "@/components/IndicatorE";
import { IndicatorF } from "@/components/IndicatorF";
import { IndicatorG } from "@/components/IndicatorG";
import { IndicatorH } from "@/components/IndicatorH";
import { IndicatorI } from "@/components/IndicatorI";
import { IndicatorJ } from "@/components/IndicatorJ";
// MUI
import { Box, useMediaQuery } from "@mui/material";
// Theme
import { gridTemplateLargeScreens, gridTemplateSmallScreens } from "@/themes/grid-areas";

export const Dashboard = () => {
    const isMediumScreens = useMediaQuery("(min-width: 1200px)")
    

    return(
        <Box width="100%" height="100%" display="grid" gap="1.5rem" sx={ isMediumScreens ? {
            gridTemplateColumns: "repeat(3, minmax(370px, 1fr))",
            gridTemplateRows: "repeat(10, minmax(60px, 1fr))",
            gridTemplateAreas: gridTemplateLargeScreens,
        } : 
        {
            gridAutoColumns: "1fr",
            gridAutoRows: "80px",
            gridTemplateAreas: gridTemplateSmallScreens,
        }
        }>

            <IndicatorA />
            <IndicatorB />
            <IndicatorC />
            <IndicatorD />
            <IndicatorE />
            <IndicatorF />
            <IndicatorG />
            <IndicatorH />
            <IndicatorI />
            <IndicatorJ />

        </Box>
    );
}