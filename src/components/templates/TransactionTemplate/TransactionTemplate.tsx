import AdminLayout from '../AdminLayout/AdminLayout'
import Table from '../../molecules/Table/Table.component'
import Pagination from '../../molecules/Pagination/Pagination.component'
import { useState } from 'react'
import { useGetTransactionsQuery } from '../../../redux/services/transaction/transactionService'
import { transactionTableHeaders, transformToTableData } from '../../../utils/table'
import { ROW_PER_PAGE } from '../../../constants'

const TransactionTemplate = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const perPage = ROW_PER_PAGE;

  const { data: transactionData, error, isLoading, isFetching } = useGetTransactionsQuery({
    page: currentPage,
    perPage: perPage,
  });

  const tableData = transformToTableData(transactionData?.data?.transactions ?? []);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <AdminLayout title='Transactions'>
      <div className="overflow-scroll m-auto rounded-lg overflow-y-auto relative w-full min-h-[400px]">
        <div className='absolute top-0 left-0 right-0 bottom-0' >
          {isLoading || isFetching ? (
            // Loading skeleton or placeholder
            <div className="p-4 animate-pulse bg-gray-100 rounded-lg">
              <div className="mb-4 h-8 bg-gray-200 rounded"></div>
              <div className="mb-4 h-8 bg-gray-200 rounded"></div>
              <div className="mb-4 h-8 bg-gray-200 rounded"></div>
              <div className="mb-4 h-8 bg-gray-200 rounded"></div>
              <div className="mb-4 h-8 bg-gray-200 rounded"></div>
            </div>
          ) : error ? (
            <div className="p-4 bg-red-100 text-red-600 rounded-lg">
              <p className="font-bold">Error retrieving transactions:</p>
            </div>
          ) : (
            <Table headers={transactionTableHeaders} data={tableData} />
          )

          }
        </div>
      </div>
      <Pagination total={transactionData?.data?.pagination?.totalPages ?? 0} currentPage={currentPage} onPageChange={handlePageChange} size='small' />
    </AdminLayout>
  )
}

export default TransactionTemplate
