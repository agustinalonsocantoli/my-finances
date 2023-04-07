// Theme
import { DashboardBox } from "@/themes/components/DashboardBox";

type Props = {
    revenueExpenses: {} | undefined;
};

export const IndicatorJ = ({ revenueExpenses }: Props) => {
    return(
        <DashboardBox gridArea="j">
            J
        </DashboardBox>
    );
}