// React
import { useMemo } from "react";
// Theme
import { DashboardBox } from "@/themes/components/DashboardBox";
import { useTheme } from "@mui/material";
// Interfaces
import { IntKpis } from "@/interfaces/IntKpis";
// Recharts
import { ResponsiveContainer, BarChart, XAxis, YAxis, Tooltip, Bar, CartesianGrid } from "recharts";
// Components
import { HeaderBox } from "./HeaderBox";


type Props = {
    dataKpis: Array<IntKpis> | undefined;
};

export const IndicatorC = ({ dataKpis }: Props) => {
    const { palette } = useTheme();

    const revenue = useMemo(() => {
        return(
            dataKpis && 
            dataKpis[0].monthlyData.map(({ month, revenue }) => {
                return {
                    name: month.substring(0, 3),
                    revenue: revenue,
                }
            })
        );
    }, [dataKpis]);

    return(
        <DashboardBox gridArea="c">
            <HeaderBox 
            title="Revenue Month by Month"
            subtitle="graph representing the revenue month by month"
            sideText="+4%"
            />

            <ResponsiveContainer width="100%" height="100%">
                <BarChart
                width={500}
                height={300}
                data={revenue}
                margin={{
                    top: 17,
                    right: 15,
                    left: -5,
                    bottom: 58,
                }}
                >   <defs>
                        <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor={palette.primary[300]} stopOpacity={0.8} />
                            <stop offset="95%" stopColor={palette.primary[300]} stopOpacity={0} />
                        </linearGradient>
                    </defs>

                    <CartesianGrid vertical={false} stroke={palette.grey[800]}/>
                    <XAxis dataKey="name" axisLine={false} tickLine={false} style={{fontSize: "10px"}} />
                    <YAxis axisLine={false} tickLine={false} style={{fontSize: "10px"}} />
                    <Tooltip />
                    <Bar dataKey="revenue" fill="url(#colorRevenue)" />
                </BarChart>
            </ResponsiveContainer>
        </DashboardBox>
    );
}