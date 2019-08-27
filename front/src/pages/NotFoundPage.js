import React from 'react'

import NotFound from 'components/common/NotFound'


const NotFoundPage = ({history}) => {
  let type_not = "존재하지않는 페이지입니다."
  return (
    <NotFound onGoBack={history.goBack} type={type_not}/>
  )
}

export default NotFoundPage
