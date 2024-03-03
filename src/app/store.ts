import { configureStore, ThunkAction, PayloadAction } from "@reduxjs/toolkit"; //лучше использовать PayloadAction,  упрощает написание действий с понятной структурой, где данные хранятся в свойстве payload, что делает код более читабельным и понятным.

import categoriesReducer from "../features/categoriesSlice";
import tasksReducer from "../features/tasksSlice";

export const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    tasks: tasksReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  PayloadAction<string>
>;
