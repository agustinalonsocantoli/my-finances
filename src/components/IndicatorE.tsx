// Theme
import { DashboardBox } from "@/themes/components/DashboardBox";
// Interfaces
import { IntKpis } from "@/interfaces/IntKpis";

type Props = {
    data: Array<IntKpis> | undefined;
};

export const IndicatorE = ({ data }: Props) => {
    return(
        <DashboardBox gridArea="e">
            E
        </DashboardBox>
    );
}