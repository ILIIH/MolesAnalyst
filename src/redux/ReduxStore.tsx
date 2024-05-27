import { legacy_createStore, applyMiddleware, compose } from "redux";
import { persistCombineReducers } from "redux-persist";
import createSecureStore from "redux-persist-expo-securestore";
import reducers from "./reducers";

// Secure storage
const storage = createSecureStore();

const config = {
  key: "primary",
  storage,
  whitelist: ["articles"],
};

const store = legacy_createStore(
  persistCombineReducers(config, reducers),
  undefined
);

export default store;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
