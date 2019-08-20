import React from 'react'
import PropTypes from 'prop-types'
import { BrowserRouter } from 'react-router-dom'
import App from 'components/App';
import { Provider } from 'react-redux';
import configure from 'store/configure';

const store = configure();

const Root = (props) => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    </Provider>
  )
}

export default Root
