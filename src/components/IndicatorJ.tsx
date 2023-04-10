// Theme
import { DashboardBox } from "@/themes/components/DashboardBox";
// Interfaces
import { IntKpis } from "@/interfaces/IntKpis";
// Components
import { HeaderBox } from "./HeaderBox";
// Mui and Theme
import { Box, Typography, useTheme } from "@mui/material";

type Props = {
    data: Array<IntKpis> | undefined;
};

export const IndicatorJ = ({ data }: Props) => {
    const { palette } = useTheme();
    return(
        <DashboardBox gridArea="j">
            <HeaderBox
            title="Overall Summary and Explanation Data" 
            sideText="+15%"
            />

            <Box height="15px" margin="1.25rem 1rem 0.4rem 1rem" bgcolor={palette.primary[800]} borderRadius="1rem">
                <Box  height="15px" bgcolor={palette.primary[600]} borderRadius="1rem" width="40%">

                </Box>
            </Box>
            
            <Typography margin="0 1rem" variant="h6">
                Orci aliquam enim vel diam. Venenatis euismod id donec mus lorem etiam
                ullamcorper odio sed. Ipsum non sed gravida etiam urna egestas
                molestie volutpat et. Malesuada quis pretium aliquet lacinia ornare
                sed. In volutpat nullam at est id cum pulvinar nunc.
            </Typography>
        </DashboardBox>
    );
}