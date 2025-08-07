import type {StateSchema} from "@/app/providers/store-provider";

export const getNewsTotal = (state: StateSchema) => state.news?.total;
