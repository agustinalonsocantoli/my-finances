// React
import { useMemo } from "react";
// Theme
import { DashboardBox } from "@/themes/components/DashboardBox";
import { useTheme } from "@mui/material";
// Recharts
import { ResponsiveContainer, AreaChart, XAxis, YAxis, Tooltip, Area } from "recharts";
// Components
import { HeaderBox } from "./HeaderBox";
// Interfaces
import { IntKpis } from "@/interfaces/IntKpis";

type Props = {
    dataKpis: Array<IntKpis> | undefined;
};

export const IndicatorA = ({ dataKpis }: Props) => {
    const { palette } = useTheme();

    const revenueExpenses = useMemo(() => {
        return(
            dataKpis && 
            dataKpis[0].monthlyData.map(({ month, revenue, expenses }) => {
                return {
                    name: month.substring(0, 3),
                    revenue: revenue,
                    expenses: expenses,
                }
            })
        );
    }, [dataKpis]);

    return(
        <DashboardBox gridArea="a">
            <HeaderBox 
            title="Revenue and Expenses"
            subtitle="top line represents revenue, bottom line represents expenses"
            sideText="+4%"
            />

            <ResponsiveContainer width="100%" height="100%">
                <AreaChart width={500} height={400} data={revenueExpenses} margin={{
                    top: 15,
                    right: 25,
                    left: -10,
                    bottom: 60,
                }}
                >
                    <defs>
                        <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor={palette.primary[300]} stopOpacity={0.5} />
                            <stop offset="95%" stopColor={palette.primary[300]} stopOpacity={0} />
                        </linearGradient>

                        <linearGradient id="colorExpenses" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor={palette.primary[300]} stopOpacity={0.5} />
                            <stop offset="95%" stopColor={palette.primary[300]} stopOpacity={0} />
                        </linearGradient>
                    </defs>
                    <XAxis dataKey="name" tickLine={false} style={{ fontSize: "10px" }}/>
                    <YAxis tickLine={false} axisLine={{ strokeWidth: "0" }} style={{ fontSize: "10px" }} domain={[8000, 23000]}/>
                    <Tooltip />
                    <Area type="monotone" dataKey="revenue" dot={true} stroke={palette.primary.main} fillOpacity={1} fill="url(#colorRevenue)" />
                    <Area type="monotone" dataKey="expenses" dot={true} stroke={palette.primary.main} fillOpacity={1} fill="url(#colorExpenses)" />
                </AreaChart>
            </ResponsiveContainer>
        </DashboardBox>
    );
}