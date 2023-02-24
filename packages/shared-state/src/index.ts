import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { preferencesReducer } from "./reducers/preferences/reducer";

const rootReducer = combineReducers({
    preferences: preferencesReducer,
});

const persistConfig = {
    key: "carrot-kpi-shared-state",
    storage,
    whitelist: ["preferences"],
};

const persistedRootReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({ reducer: persistedRootReducer });

export type State = ReturnType<typeof rootReducer>;
export type Dispatch = typeof store.dispatch;

export * from "./reducers";
export * from "./connectors";