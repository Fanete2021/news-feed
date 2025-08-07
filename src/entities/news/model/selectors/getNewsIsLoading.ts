import type {StateSchema} from "@/app/providers/store-provider";

export const getNewsIsLoading = (state: StateSchema) => state.news?.isLoading;
