import { configureStore } from '@reduxjs/toolkit'
import authReducer from './features/auth/authSlice'
import transactionReducer from './features/transaction/transactionSlice'
import { authApi } from './services/auth/authService'
import { transactionApi } from './services/transaction/transactionService'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    transaction: transactionReducer,
    [authApi.reducerPath]: authApi.reducer,
    [transactionApi.reducerPath]: transactionApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware).concat(transactionApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
