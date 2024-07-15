
export interface IAuthState {
  loading: boolean;
  isAuthenticated: boolean;
  accessToken: null | string;
  refreshToken: null | string;
  error: null;
}

export interface ILoginResponse {
  success?: boolean;
  accessToken: string;
  refreshToken: string;
  message?: string;
}

export interface ILoginRequest {
  email: string;
  password: string;
  ip_address: string;
}

export interface ITransaction {
  _id: string;
  amount: number;
  date: string;
  type: 'credit' | 'debit';
  status: 'pending' | 'completed' | 'failed';
  description: string;
  __v: number;
}

export interface IPagination {
  currentPage: number;
  totalPages: number;
  perPage: number;
  totalCount: number;
}

export interface ITransactionResponse {
  success: boolean;
  data: {
    transactions: ITransaction[];
    pagination: IPagination;
  };
}

export interface ITransactionState {
  loading: boolean;
  transactions: ITransaction[];
  pagination: IPagination;
  error?: string | null;
}