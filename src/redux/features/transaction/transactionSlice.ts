import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ITransactionResponse, ITransactionState } from "../../type";
import { RootState } from "../../store";

// Define your initial state for transactions
const initialState: ITransactionState = {
  loading: false,
  transactions: [],
  pagination: {
    currentPage: 1,
    totalPages: 0,
    perPage: 5,
    totalCount: 0,
  }
};

// Create a slice for transactions
const transactionSlice = createSlice({
  name: 'transactions',
  initialState,
  reducers: {
    fetchTransactionsStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchTransactionsSuccess: (state, action: PayloadAction<ITransactionResponse>) => {
      state.loading = false;
      state.transactions = action.payload.data.transactions;
      state.pagination = action.payload.data.pagination;
      state.error = null;
    },
    fetchTransactionsFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchTransactionsStart, fetchTransactionsSuccess, fetchTransactionsFailure } = transactionSlice.actions;
export const selectTransactions = (state: RootState) => state.transaction;

export default transactionSlice.reducer;
