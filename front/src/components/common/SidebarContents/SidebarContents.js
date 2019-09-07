import React from 'react'
import PropTypes from 'prop-types'
import styles from './SidebarContents.scss'
import classNames from 'classnames/bind'
import { NavLink, Link } from 'react-router-dom'

const cx = classNames.bind(styles);



const SidebarContents = ({boards}) => {
  const boardList = boards && boards.map(
    (board) => {
      const {name, is_admin, ix} = board.toJS();
      let toPath = '/?board_ix=' + ix
      return (
        <NavLink
          exact
          to={toPath}
          className={cx('nav')}
          key={ix}
        >
        {name}
      </NavLink>
      )
    }
  );
  return (
    <div className={cx('sidebar-contents')}>
      <NavLink to='/' className={cx('title')}>
        SEJONG
      </NavLink>
      {boardList}
    </div>
  )
}

export default SidebarContents
