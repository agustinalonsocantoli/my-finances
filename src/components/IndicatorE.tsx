// Theme
import { DashboardBox } from "@/themes/components/DashboardBox";

type Props = {
    revenueExpenses: {} | undefined;
};

export const IndicatorE = ({ revenueExpenses }: Props) => {
    return(
        <DashboardBox gridArea="e">
            E
        </DashboardBox>
    );
}