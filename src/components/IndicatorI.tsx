// Theme
import { DashboardBox } from "@/themes/components/DashboardBox";

type Props = {
    revenueExpenses: {} | undefined;
};

export const IndicatorI = ({ revenueExpenses }: Props) => {
    return(
        <DashboardBox gridArea="i">
            I
        </DashboardBox>
    );
}