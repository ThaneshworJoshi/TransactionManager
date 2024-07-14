import AdminLayout from '../AdminLayout/AdminLayout'
import Table from '../../molecules/Table/Table.component'
import { tableData, tableHeaders } from '../../../mock/tableMock'

const TransactionTemplate = () => {
  return (
    <AdminLayout title='Transactions'>
      <Table headers={tableHeaders} data={tableData} />
    </AdminLayout>
  )
}

export default TransactionTemplate
