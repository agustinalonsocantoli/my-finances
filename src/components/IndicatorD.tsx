// Theme
import { DashboardBox } from "@/themes/components/DashboardBox";
// Interfaces
import { IntKpis } from "@/interfaces/IntKpis";

type Props = {
    data: Array<IntKpis> | undefined;
};

export const IndicatorD = ({ data }: Props) => {
    return(
        <DashboardBox gridArea="d">
            D
        </DashboardBox>
    );
}