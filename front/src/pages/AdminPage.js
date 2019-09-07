import React from 'react'

import PageTemplate from 'components/common/PageTemplate'
import AdminContainer from 'containers/admin/AdminContainer'
import AddBoardModal from 'components/modal/AddBoardModal'

const AdminPage = () => {
  return (
    <PageTemplate>
      <AdminContainer/>
      <AddBoardModal/>
    </PageTemplate>

  )
}

export default AdminPage;
