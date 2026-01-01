import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  user: {
    id: number;
    name: string;
    email: string;
  } | null;
  isLoggedIn: boolean;
  loading?: boolean;
  error?: string | null;
}

const initialState: AuthState = {
  user: null,
  isLoggedIn: false,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(
      state,
      action: PayloadAction<{ id: number; name: string; email: string }>
    ) {
      state.user = action.payload;
      state.isLoggedIn = true;
    },
    logout(state) {
      state.user = null;
      state.isLoggedIn = false;
    },
    setLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },
    setError(state, action: PayloadAction<string | null>) {
      state.error = action.payload;
    },
  },
});

export const { login, logout, setLoading, setError } = authSlice.actions;

export default authSlice.reducer;
