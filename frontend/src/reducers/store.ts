import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { tasksReducer } from "./tasks.reducer";
import rootSaga from "../effects/tasks.effects";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
