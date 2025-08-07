import { StoreProvider } from "./ui/StoreProvider";
import {type AppDispatch, createReduxStore } from "./config/store.ts";
import type {ReduxStoreWithManager, StateSchema, ThunkConfig} from "./config/StateSchema.ts";

export {
  StoreProvider,
  createReduxStore
};

export type {
  StateSchema,
  ReduxStoreWithManager,
  AppDispatch,
  ThunkConfig
};
