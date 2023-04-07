// Theme
import { DashboardBox } from "@/themes/components/DashboardBox";

type Props = {
    revenueExpenses: {} | undefined;
};

export const IndicatorH = ({ revenueExpenses }: Props) => {
    return(
        <DashboardBox gridArea="h">
            H
        </DashboardBox>
    );
}