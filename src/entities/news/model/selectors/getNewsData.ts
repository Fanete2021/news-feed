import type {StateSchema} from "@/app/providers/store-provider";

export const getNewsData = (state: StateSchema) => state.news?.data;
