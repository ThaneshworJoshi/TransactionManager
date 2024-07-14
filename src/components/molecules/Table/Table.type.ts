export interface TableRow {
  [key: string]: string | number;
}

export interface TableHeader {
  key: string;
  label: string;
}

export interface TableProps {
  headers: TableHeader[];
  data: TableRow[];
  renderAction?: (row: TableRow) => React.ReactNode;
}
