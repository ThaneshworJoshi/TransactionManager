import AdminLayout from '../AdminLayout/AdminLayout'
import Table from '../../molecules/Table/Table.component'
import { tableData, tableHeaders } from '../../../mock/tableMock'
import Pagination from '../../molecules/Pagination/Pagination.component'
import { useState } from 'react'

const TransactionTemplate = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const total = 20; // Total number of pages

  const handlePageChange = (page: number) => {
    console.log('Page changed to:', page);
    setCurrentPage(page);
  };

  return (
    <AdminLayout title='Transactions'>
      <div className="overflow-scroll m-auto rounded-lg overflow-y-auto relative w-full min-h-[400px]">
        <div className='absolute top-0 left-0 right-0 bottom-0' >
          <Table headers={tableHeaders} data={tableData} />
          <div >
          </div>
        </div>
      </div>
          <Pagination total={total} currentPage={currentPage} onPageChange={handlePageChange} size='small'/>
    </AdminLayout>
  )
}

export default TransactionTemplate
