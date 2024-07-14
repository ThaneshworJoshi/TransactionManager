import AdminLayout from '../AdminLayout/AdminLayout'
import Table from '../../molecules/Table/Table.component'
import { tableData, tableHeaders } from '../../../mock/tableMock'

const TransactionTemplate = () => {
  return (
    <AdminLayout title='Transactions'>
      <div className="overflow-scroll m-auto bg-white rounded-lg shadow overflow-y-auto relative w-full min-h-[400px]">
        <div className='absolute top-0 left-0 right-0 bottom-0 ' >
          <Table headers={tableHeaders} data={tableData} />
        </div>
      </div>
    </AdminLayout>
  )
}

export default TransactionTemplate
