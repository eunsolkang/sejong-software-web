import React from 'react'
import queryString from 'query-string';

import PageTemplate from 'components/common/PageTemplate'
import ListWapper from 'components/list/ListWapper';
import ListContainer from 'containers/list/ListContainer'

const ListPage = ({location, match}) => {
  const { borad_ix = 0} = queryString.parse(location.search)
  return (
    <PageTemplate>
      <ListWapper>
        <ListContainer
          page={parseInt(page, 10)}
        />
      </ListWapper>
    </PageTemplate>
  )
}

export default ListPage
