import React from 'react'
import queryString from 'query-string';

import PageTemplate from 'components/common/PageTemplate'
import ListWapper from 'components/list/ListWapper';
import ListContainer from 'containers/list/ListContainer'
import SidebarContainer from 'containers/common/SidebarContainer'
const ListPage = ({location, match}) => {
  const { page = 0, board_ix =2} = queryString.parse(location.search)
  return (
    <PageTemplate>
      <ListWapper>
        <ListContainer
          page={parseInt(page, 10)}
          boardIxPath={board_ix}
        />
      </ListWapper>
    </PageTemplate>
  )
}

export default ListPage
