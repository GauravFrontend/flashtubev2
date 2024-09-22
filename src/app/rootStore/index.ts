import { configureStore, combineReducers } from "@reduxjs/toolkit";
import authReducer from "./auth.reducer";

const RESET_STATE = "RESET_STATE";

const rootReducer = combineReducers({
  auth: authReducer,
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const appReducer = (state: any, action: any) => {
  if (action.type === RESET_STATE) {
    return rootReducer(undefined, action);
  }
  return rootReducer(state, action);
};

const rootStore = configureStore({
  reducer: appReducer,
});

export type RootState = ReturnType<typeof rootStore.getState>;
export type AppDispatch = typeof rootStore.dispatch;
export default rootStore;
