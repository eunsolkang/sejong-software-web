import React from 'react'
import PropTypes from 'prop-types'
import PageTemplate from 'components/common/PageTemplate'
import ListWapper from 'components/list/ListWapper';
import ListContainer from 'containers/list/ListContainer'

const ListPage = () => {
  return (
    <PageTemplate>
      <ListWapper>
        <ListContainer/>
      </ListWapper>
    </PageTemplate>
  )
}

export default ListPage
