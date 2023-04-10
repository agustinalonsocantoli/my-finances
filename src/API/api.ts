import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IntKpis, IntProducts, IntTransactions } from "@/interfaces/IntKpis";

export const api = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL }),
    reducerPath: "main",
    tagTypes: ["Kpis", "Products", "Transactions"],
    endpoints: (build) => ({
        getKpis: build.query<Array<IntKpis>, void>({
            query: () => "kpi/kpis/",
            providesTags: ["Kpis"],
        }),
        getProducts: build.query<Array<IntProducts>, void>({
            query: () => "product/products/",
            providesTags: ["Products"]
        }),
        getTransactions: build.query<Array<IntTransactions>, void>({
            query: () => "transaction/transactions/",
            providesTags: ["Transactions"]
        }),
    })
});

export const { useGetKpisQuery, useGetProductsQuery, useGetTransactionsQuery } = api;