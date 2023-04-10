// React
import { useMemo } from "react";
// Theme
import { DashboardBox } from "@/themes/components/DashboardBox";
import { FlexBetween } from "@/themes/components/FlexBetween";
import { Box, Typography, useTheme } from "@mui/material";
// Recharts
import { Cell, Pie, PieChart } from "recharts";
// Components
import { HeaderBox } from "./HeaderBox";
// Data
import { useGetKpisQuery } from "@/API/api";

export const IndicatorI = () => {
    const { data: dataKpis } = useGetKpisQuery();

    const { palette } = useTheme();
    const pieColors = [palette.primary[800], palette.primary[500]]

    const pieChartData = useMemo(() => {
        
        if(dataKpis) {
            const totalExpenses = dataKpis[0].totalExpenses;

            return dataKpis[0].expensesByCategory && 
            Object.entries(dataKpis[0].expensesByCategory).map(
                ([key, value]) => {
                    return [
                        {
                            name: key,
                            value: value,
                        },
                        {
                            name: `${key} of Total`,
                            value: totalExpenses - value,
                        },
                    ];
                }
            );
        }
    }, [dataKpis])

    return(
        <DashboardBox gridArea="i">
            <HeaderBox
            title="Expense Breakdown By Category" 
            sideText="+4%"
            />

            <FlexBetween mt="0.5rem" gap="0.5rem" p="0 1rem" textAlign="center">
            {pieChartData?.map((data, index) => (
                <Box key={`${data[0].name}-${index}`}>
                    <PieChart width={100} height={77}>
                        <Pie
                        stroke="none"
                        data={data}
                        innerRadius={18}
                        outerRadius={35}
                        paddingAngle={2}
                        dataKey="value"
                        >
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={pieColors[index]} />
                            ))}
                        </Pie>
                    </PieChart>

                    <Typography variant="h5" sx={{textTransform: 'capitalize'}}>
                        {data[0].name}
                    </Typography>
                </Box>
            ))}
            </FlexBetween>
        </DashboardBox>
    );
}