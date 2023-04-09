import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IntKpis, IntProducts } from "@/interfaces/IntKpis";

export const api = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL }),
    reducerPath: "main",
    tagTypes: ["Kpis", "Products"],
    endpoints: (build) => ({
        getKpis: build.query<Array<IntKpis>, void>({
            query: () => "kpi/kpis/",
            providesTags: ["Kpis"],
        }),
        getProducts: build.query<Array<IntProducts>, void>({
            query: () => "product/products/",
            providesTags: ["Products"]
        }),
    })
});

export const { useGetKpisQuery, useGetProductsQuery } = api;