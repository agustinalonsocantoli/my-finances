// Theme
import { DashboardBox } from "@/themes/components/DashboardBox";
// Interfaces
import { IntKpis } from "@/interfaces/IntKpis";

type Props = {
    data: Array<IntKpis> | undefined;
};

export const IndicatorG = ({ data }: Props) => {
    return(
        <DashboardBox gridArea="g">
            G
        </DashboardBox>
    );
}