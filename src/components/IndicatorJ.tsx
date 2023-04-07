// Theme
import { DashboardBox } from "@/themes/components/DashboardBox";
// Interfaces
import { IntKpis } from "@/interfaces/IntKpis";

type Props = {
    data: Array<IntKpis> | undefined;
};

export const IndicatorJ = ({ data }: Props) => {
    return(
        <DashboardBox gridArea="j">
            J
        </DashboardBox>
    );
}