import React from 'react'

import PageTemplate from 'components/common/PageTemplate'
import AdminContainer from 'containers/admin/AdminContainer'
import AddBoardModalContainer from 'containers/modal/AddBoardModalContainer'
import AskRemoveModalContainer from 'containers/modal/AskRemoveModalContainer'

const AdminPage = () => {
  return (
    <PageTemplate>
      <AdminContainer/>
      <AddBoardModalContainer/>
      <AskRemoveModalContainer/>
    </PageTemplate>

  )
}

export default AdminPage;
