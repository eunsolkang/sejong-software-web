import React from 'react'
import PropTypes from 'prop-types'
import { BrowserRouter } from 'react-router-dom'
import App from 'components/App';
import { Provider } from 'react-redux';
import configure from 'store/configure';
import { CookiesProvider } from 'react-cookie';

const store = configure();

const Root = (props) => {
  return (
    <CookiesProvider>
      <Provider store={store}>
        <BrowserRouter>
          <App/>
        </BrowserRouter>
      </Provider>
    </CookiesProvider>

  )
}

export default Root
