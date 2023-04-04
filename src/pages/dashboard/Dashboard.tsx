// React

// MUI
import { Box, useMediaQuery } from "@mui/material";
// Theme
import { gridTemplateLargeScreens, gridTemplateSmallScreens } from "@/themes/grid-areas";
import { DashboardBox } from "@/themes/components/DashboardBox";
// Redux
import { useGetKpisQuery } from "@/state/api";

export const Dashboard = () => {
    const isMediumScreens = useMediaQuery("(min-width: 1200px)")
    const { data } = useGetKpisQuery();

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

            <DashboardBox gridArea="a"></DashboardBox>
            <DashboardBox gridArea="b"></DashboardBox>
            <DashboardBox gridArea="c"></DashboardBox>
            <DashboardBox gridArea="d"></DashboardBox>
            <DashboardBox gridArea="e"></DashboardBox>
            <DashboardBox gridArea="f"></DashboardBox>
            <DashboardBox gridArea="g"></DashboardBox>
            <DashboardBox gridArea="h"></DashboardBox>
            <DashboardBox gridArea="i"></DashboardBox>
            <DashboardBox gridArea="j"></DashboardBox>

        </Box>
    );
}