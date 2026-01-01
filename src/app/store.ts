import todoReducer from '../feature/todoReducer';
import authReducer from '../feature/authReducer';
import uiReducer from '../feature/uiReducer';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    todo: todoReducer,
    auth: authReducer,
    ui: uiReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
