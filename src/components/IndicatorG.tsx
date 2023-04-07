// Theme
import { DashboardBox } from "@/themes/components/DashboardBox";

type Props = {
    revenueExpenses: {} | undefined;
};

export const IndicatorG = ({ revenueExpenses }: Props) => {
    return(
        <DashboardBox gridArea="g">
            G
        </DashboardBox>
    );
}