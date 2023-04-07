// Components
import { DashboardBox } from "@/themes/components/DashboardBox";

type Props = {
    revenueExpenses: {} | undefined;
};

export const IndicatorB = ({ revenueExpenses }: Props) => {

    return(
        <DashboardBox gridArea="b">
            B
        </DashboardBox>
    );
}