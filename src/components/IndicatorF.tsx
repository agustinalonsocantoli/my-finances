// React
import { useMemo } from "react";
// Theme
import { DashboardBox } from "@/themes/components/DashboardBox";
import { useTheme } from "@mui/material";
// Interfaces
import { IntProducts } from "@/interfaces/IntKpis";
// Recharts
import { CartesianGrid, ResponsiveContainer, Scatter, ScatterChart, XAxis, YAxis, Tooltip, ZAxis } from "recharts";
// Components
import { HeaderBox } from "./HeaderBox";

type Props = {
    dataProduct: Array<IntProducts> | undefined;
};

export const IndicatorF = ({ dataProduct }: Props) => {
    const { palette } = useTheme();

    const productExpenseData = useMemo(() => {
        return(
            dataProduct && 
            dataProduct.map(({ _id, price, expense }) => {
                return {
                    _id: _id,
                    price: price,
                    expense: expense,
                }
            })
        );
    }, [dataProduct]);

    return(
        <DashboardBox gridArea="f">
            <HeaderBox
            title="Product Prices vs Expenses"
            sideText="+4%"
            />
            <ResponsiveContainer width="100%" height="100%">
                <ScatterChart
                margin={{
                    top: 20,
                    right: 25,
                    bottom: 40,
                    left: 0,
                }}
                >
                <CartesianGrid stroke={palette.grey[800]} />
                <XAxis 
                type="number" 
                dataKey="price" 
                name="price" 
                axisLine={false} 
                tickLine={false} 
                style={{ fontSize: "10px" }} 
                tickFormatter={(v) => `$${v}`} 
                />
                <YAxis 
                type="number" 
                dataKey="expense" 
                name="expense" 
                axisLine={false} 
                tickLine={false} 
                style={{ fontSize: "10px" }}
                tickFormatter={(v) => `$${v}`}
                />
                <ZAxis 
                type="number"
                range={[20]}
                />
                <Tooltip formatter={(v) => `$${v}`} />
                <Scatter name="Product Expense Ratio" data={productExpenseData} fill={palette.tertiary[500]} />
                </ScatterChart>
            </ResponsiveContainer>
        </DashboardBox>
    );
}