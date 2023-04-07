// Theme
import { DashboardBox } from "@/themes/components/DashboardBox";

type Props = {
    revenueExpenses: {} | undefined;
};

export const IndicatorC = ({ revenueExpenses }: Props) => {
    return(
        <DashboardBox gridArea="c">
            C
        </DashboardBox>
    );
}