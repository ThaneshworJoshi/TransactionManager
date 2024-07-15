import { TableHeader } from "../components";
import { ITransaction } from "../redux/type";

export const transactionTableHeaders: TableHeader[] = [
  { key: 'id', label: 'ID' },
  { key: 'amount', label: 'Amount' },
  { key: 'date', label: 'Date' },
  { key: 'type', label: 'Type' },
  { key: 'status', label: 'Status' },
  { key: 'description', label: 'Description' },
];

/**
 * Function to transform transaction data into a table structure for rendering
 * @param transactions Array of transactions to transform
 * @returns Transformed data suitable for table rendering
 */
export const transformToTableData = (transactions: ITransaction[]) => {
  return transactions.map((transaction) => ({
    id: transaction._id,
    amount: transaction.amount,
    date: new Date(transaction.date).toLocaleDateString(), // Example date formatting
    type: transaction.type,
    status: transaction.status,
    description: transaction.description,
  }));
};
