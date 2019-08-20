import React from 'react'
import PropTypes from 'prop-types'
import PageTemplate from 'components/common/PageTemplate'
import RegisterContainer from 'containers/register/RegisterContainer'

const RegisterPage = (props) => {
  return (
    <PageTemplate>
      <RegisterContainer/>
    </PageTemplate>
  )
}

export default RegisterPage
