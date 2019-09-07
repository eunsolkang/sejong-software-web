import React from 'react'

import styles from './PageTemplate.scss'
import classNames from 'classnames/bind'
import HeaderContainer from 'containers/common/HeaderContainer'
import SidebarContainer from 'containers/common/SidebarContainer'

import Footer from 'components/common/Footer'



const cx = classNames.bind(styles);

const PageTemplate = ({children}) => {
  return (
    <div className={cx('page-template')}>
      <SidebarContainer>
        <HeaderContainer/>
        <main>
          {children}
        </main>
        <Footer></Footer>
      </SidebarContainer>

    </div>
  )
}

export default PageTemplate
