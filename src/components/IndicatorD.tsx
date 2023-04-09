// React
import { useMemo } from "react";
// Theme
import { DashboardBox } from "@/themes/components/DashboardBox";
import { useTheme } from "@mui/material";
// Interfaces
import { IntKpis } from "@/interfaces/IntKpis";
// Recharts
import { ResponsiveContainer, LineChart, XAxis, YAxis, Tooltip, Line, CartesianGrid } from "recharts";
// Components
import { HeaderBox } from "./HeaderBox";

type Props = {
    dataKpis: Array<IntKpis> | undefined;
};

export const IndicatorD = ({ dataKpis }: Props) => {
    const { palette } = useTheme();

    const operationalExpenses = useMemo(() => {
        return(
            dataKpis && 
            dataKpis[0].monthlyData.map(({ month, operationalExpenses, nonOperationalExpenses }) => {
                return {
                    name: month.substring(0, 3),
                    "Operational Expenses": operationalExpenses,
                    "Non Operational Expenses": nonOperationalExpenses
                }
            })
        );
    }, [dataKpis]);

    return(
        <DashboardBox gridArea="d">
            <HeaderBox 
            title="Operational vs Non-Operational Expenses"
            sideText="+4%"
            />

            <ResponsiveContainer width="100%" height="100%">
                <LineChart data={operationalExpenses} margin={{
                    top: 20,
                    right: 0,
                    left: -10,
                    bottom: 55,
                }}
                >
                    <CartesianGrid vertical={false} stroke={palette.grey[800]} />
                    <XAxis dataKey="name" tickLine={false} style={{ fontSize: "10px" }}/>
                    <YAxis yAxisId="left" orientation="left" tickLine={false} axisLine={false} style={{ fontSize: "10px" }} />
                    <YAxis yAxisId="right" orientation="right" tickLine={false} axisLine={false} style={{ fontSize: "10px" }} />
                    <Tooltip />
                    <Line yAxisId="left" type="monotone" dataKey="Non Operational Expenses" stroke={palette.tertiary[500]} />
                    <Line yAxisId="right" type="monotone" dataKey="Operational Expenses" stroke={palette.primary.main} />
                </LineChart>
            </ResponsiveContainer>
        </DashboardBox>
    );
}