// Theme
import { DashboardBox } from "@/themes/components/DashboardBox";
// Interfaces
import { IntTransactions } from "@/interfaces/IntKpis";
// MUI
import { DataGrid, GridCellParams } from "@mui/x-data-grid";
import { Box, useTheme } from "@mui/material";
// Components
import { HeaderBox } from "./HeaderBox";

type Props = {
    dataTransaction: Array<IntTransactions> | undefined;
};

export const IndicatorH = ({ dataTransaction }: Props) => {
    const { palette } = useTheme();
    const transactionColumns = [
        {
            field: "_id",
            headerName: "id",
            flex: 1,
        },
        {
            field: "buyer",
            headerName: "Buyer",
            flex: 0.67,
        },
        {
            field: "amount",
            headerName: "Amount",
            flex: 0.35,
            renderCell: (params: GridCellParams) => `$${params.value}`,
        },
        {
            field: "productIds",
            headerName: "Count",
            flex: 0.1,
            renderCell: (params: GridCellParams) => (params.value as Array<string>).length,
        }
    ];

    return(
        <DashboardBox gridArea="h">
            <HeaderBox
            title="Recent Orders" 
            sideText={`${dataTransaction?.length} lastest transactions`}
            />

            <Box mt="1rem" p="0 0.5rem" height="80%" sx={{
                "& .MuiDataGrid-root": {
                    color: palette.grey[300],
                    border: "none"
                },
                "& .MuiDataGrid-cell": {
                    borderBottom: `1px solid ${palette.grey[800]} !important`
                },
                "& .MuiDataGrid-columnHeaders": {
                    borderBottom: `1px solid ${palette.grey[800]} !important`
                },
                "& .MuiDataGrid-columnSeparator": {
                    visibility: "hidden"
                }
            }}>
                <DataGrid
                columnHeaderHeight={25}
                rowHeight={35}
                hideFooter={true}
                rows={dataTransaction || []}
                columns={transactionColumns}
                />
            </Box>
        </DashboardBox>
    );
}