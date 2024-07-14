import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import { PaginationProps } from './Pagination.type';
import useWindowSize from '../../../hooks/useWindowSize';

const Pagination = ({ total, size = 'medium', currentPage, onPageChange }: PaginationProps) => {
  const { width } = useWindowSize();
  let isLessThe600 = width;

  const handlePageChange = (page: number) => {
    onPageChange(page);
  };

  const getPageNumbers = () => {
    const pageNumbers = [];
    const maxPageNumbers = width < isLessThe600 ? 3 : 5; // You can adjust this number as needed
    const halfWay = Math.ceil(maxPageNumbers / 2);
    const isStart = currentPage <= halfWay;
    const isEnd = total - halfWay <= currentPage;

    let ellipsesLeft = false;
    let ellipsesRight = false;

    for (let i = 1; i <= total; i++) {
      if (i === 1 || i === total) {
        pageNumbers.push(i);
      } else if (i >= currentPage - 1 && i <= currentPage + 1) {
        pageNumbers.push(i);
      } else if (isStart && i <= maxPageNumbers) {
        pageNumbers.push(i);
      } else if (isEnd && i >= total - maxPageNumbers + 1) {
        pageNumbers.push(i);
      } else if (i < currentPage && !ellipsesLeft) {
        pageNumbers.push('...');
        ellipsesLeft = true;
      } else if (i > currentPage && !ellipsesRight) {
        pageNumbers.push('...');
        ellipsesRight = true;
      }
    }

    return pageNumbers;
  };

  const pages = getPageNumbers();

  const sizeClasses = {
    small: 'px-3 py-1 text-xs h-8',
    medium: 'px-4 py-2 text-sm h-10',
    large: 'px-4 py-3 text-md h-12',
  };



  return (
    <nav className="flex justify-center  mt-4">
      <ul className="flex list-none p-0 ">
        <li className="mx-1">
          <button
            className={`border rounded text- ${sizeClasses[size]} ${currentPage === 1 ? 'bg-gray-200 cursor-not-allowed' : 'bg-white'} hover:${currentPage === 1 ? 'bg-gray-200' : 'bg-[#9B8DF5]'}`}
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            <FaAngleLeft />
          </button>

        </li>
        <li className="hidden sm:flex">
          {pages.map((page, index) => (
            <li key={index} className="mx-1">
              {typeof page === 'number' ? (
                <button
                  className={`leading-tight border rounded ${sizeClasses[size]} ${page === currentPage ? 'bg-[#9B8DF5] text-white' : 'bg-white text-black'} hover:bg-[#9B8DF5]`}
                  onClick={() => handlePageChange(page)}
                >
                  {page}
                </button>
              ) : (
                <span className={`${sizeClasses[size]} px-4 py-2`}>...</span>
              )}
            </li>
          ))}
        </li>
        <li className="mx-1">
          <button
            className={`leading-tight border rounded ${sizeClasses[size]} ${currentPage === total ? 'bg-gray-200 cursor-not-allowed' : 'bg-white'} hover:${currentPage === total ? 'bg-gray-200' : 'bg-[#9B8DF5]'}`}
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === total}
          >
            <FaAngleRight />
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
