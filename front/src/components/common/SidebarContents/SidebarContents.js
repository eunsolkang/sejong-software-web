import React from 'react'
import PropTypes from 'prop-types'
import styles from './SidebarContents.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles);

const SidebarContents = (props) => {
  return (
    <div className={cx('sidebar-contents')}>
      <div>
       사이드바 컨텐츠
      </div>
    </div>
  )
}

export default SidebarContents
