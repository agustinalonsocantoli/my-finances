// Theme
import { DashboardBox } from "@/themes/components/DashboardBox";
// Interfaces
import { IntProducts } from "@/interfaces/IntKpis";
// MUI
import { DataGrid, GridCellParams } from "@mui/x-data-grid";
import { Box, useTheme } from "@mui/material";
// Components
import { HeaderBox } from "./HeaderBox";


type Props = {
    dataProduct: Array<IntProducts> | undefined;
};

export const IndicatorG = ({ dataProduct }: Props) => {
    const { palette } = useTheme();
    const productColumns = [
        {
            field: "_id",
            headerName: "id",
            flex: 1,
        },
        {
            field: "expense",
            headerName: "Expense",
            flex: 0.5,
            renderCell: (params: GridCellParams) => `$${params.value}`,
        },
        {
            field: "price",
            headerName: "Price",
            flex: 0.5,
            renderCell: (params: GridCellParams) => `$${params.value}`,
        }
    ];

    return(
        <DashboardBox gridArea="g">
            <HeaderBox
            title="List of Products" 
            sideText={`${dataProduct?.length} products`}
            />

            <Box mt="0.5rem" p="0 0.5rem" height="75%" sx={{
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
                rows={dataProduct || []}
                columns={productColumns}
                />
            </Box>
        </DashboardBox>
    );
}