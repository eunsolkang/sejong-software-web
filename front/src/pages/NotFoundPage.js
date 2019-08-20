import React from 'react'
import PropTypes from 'prop-types'
import NotFound from 'components/common/NotFound'


const NotFoundPage = ({history}) => {
  return (
    <NotFound onGoBack={history.goBack}/>
  )
}

export default NotFoundPage
