import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IntKpis } from "@/interfaces/IntKpis";

export const api = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL }),
    reducerPath: "main",
    tagTypes: ["Kpis"],
    endpoints: (build) => ({
        getKpis: build.query<Array<IntKpis>, void>({
            query: () => "kpi/kpis",
            providesTags: ["Kpis"]
        }),
    })
});

export const { useGetKpisQuery } = api;