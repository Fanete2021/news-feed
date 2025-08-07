import { configureStore, type Reducer, type ReducersMapObject } from "@reduxjs/toolkit";
import type {StateSchema, ThunkExtraArg} from "./StateSchema";
import { createReducerManager } from "./reducerManager";
import {newsReducer} from "@/entities/news";
import {configureApi} from "@/shared/api/api.ts";

export function createReduxStore(
  initialState?: StateSchema,
  asyncReducers?: ReducersMapObject<StateSchema>,
)
{
  const rootReducers: ReducersMapObject<StateSchema> = {
    ...asyncReducers,
    news: newsReducer
  };

  const extraArg: ThunkExtraArg = {};

  const reducerManager = createReducerManager(rootReducers);

  const store = configureStore({
    reducer: reducerManager.reduce as Reducer<StateSchema>,
    preloadedState: initialState,
    middleware: getDefaultMiddleware => getDefaultMiddleware({
      thunk: {
        extraArgument: extraArg
      }
    })
  });

  // @ts-ignore
  store.reducerManager = reducerManager;

  extraArg.api = configureApi();

  return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>["dispatch"];
