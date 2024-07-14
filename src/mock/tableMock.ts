import { TableHeader, TableRow } from "../components";

export const tableHeaders: TableHeader[] = [
  { key: 'id', label: 'ID' },
  { key: 'name', label: 'Name' },
  { key: 'age', label: 'Age' },
  { key: 'email', label: 'Email' },
  { key: 'address', label: 'Address' },
  { key: 'action', label: 'Action' },
];

export const tableData: TableRow[] = [
  { id: 1, name: 'John Doe', age: 28, email: 'john@example.com', address: '123 Main St' },
  { id: 2, name: 'Jane Smith', age: 34, email: 'jane@example.com', address: '456 Elm St' },
  { id: 3, name: 'Alice Johnson', age: 23, email: 'alice@example.com', address: '789 Maple St' },
  { id: 4, name: 'Bob Brown', age: 45, email: 'bob@example.com', address: '101 Pine St' },
];
