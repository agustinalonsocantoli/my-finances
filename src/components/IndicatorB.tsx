// React
import { useMemo } from "react";
// Components
import { DashboardBox } from "@/themes/components/DashboardBox";
import { useTheme } from "@mui/material";
// Recharts
import { ResponsiveContainer, LineChart, XAxis, YAxis, Tooltip, Line, CartesianGrid, Legend } from "recharts";
// Components
import { HeaderBox } from "./HeaderBox";
// Interfaces
import { IntKpis } from "@/interfaces/IntKpis";

type Props = {
    dataKpis: Array<IntKpis> | undefined;
};

export const IndicatorB = ({ dataKpis }: Props) => {
    const { palette } = useTheme();

    const revenueProfit = useMemo(() => {
        return(
            dataKpis && 
            dataKpis[0].monthlyData.map(({ month, revenue, expenses }) => {
                return {
                    name: month.substring(0, 3),
                    revenue: revenue,
                    profit: (revenue - expenses).toFixed(2),
                }
            })
        );
    }, [dataKpis]);

    return(
        <DashboardBox gridArea="b">
            <HeaderBox 
            title="Profit and Revenue"
            subtitle="top line represents revenue, bottom line represents profit"
            sideText="+4%"
            />

            <ResponsiveContainer width="100%" height="100%">
                <LineChart width={500} height={400} data={revenueProfit} margin={{
                    top: 20,
                    right: 0,
                    left: -10,
                    bottom: 55,
                }}
                >
                    <CartesianGrid vertical={false} stroke={palette.grey[800]} />
                    <XAxis dataKey="name" tickLine={false} style={{ fontSize: "10px" }}/>
                    <YAxis yAxisId="left" tickLine={false} axisLine={false} style={{ fontSize: "10px" }} />
                    <YAxis yAxisId="right" orientation="right" tickLine={false} axisLine={false} style={{ fontSize: "10px" }} />
                    <Tooltip />
                    <Legend height={20} wrapperStyle={{
                        margin: "0 0 10px 0"
                    }}
                    />
                    <Line yAxisId="left" type="monotone" dataKey="profit" stroke={palette.tertiary[500]} />
                    <Line yAxisId="right" type="monotone" dataKey="revenue" stroke={palette.primary.main} />
                </LineChart>
            </ResponsiveContainer>
        </DashboardBox>
    );
}