export interface PaginationProps {
  total: number;
  currentPage: number;
  size?: 'small' | 'medium' | 'large';
  onPageChange: (page: number) => void;
}
