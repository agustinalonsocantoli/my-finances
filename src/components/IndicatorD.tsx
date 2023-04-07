// Theme
import { DashboardBox } from "@/themes/components/DashboardBox";

type Props = {
    revenueExpenses: {} | undefined;
};

export const IndicatorD = ({ revenueExpenses }: Props) => {
    return(
        <DashboardBox gridArea="d">
            D
        </DashboardBox>
    );
}