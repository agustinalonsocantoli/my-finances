// Theme
import { DashboardBox } from "@/themes/components/DashboardBox";

type Props = {
    revenueExpenses: {} | undefined;
};

export const IndicatorF = ({ revenueExpenses }: Props) => {
    return(
        <DashboardBox gridArea="f">
            F
        </DashboardBox>
    );
}