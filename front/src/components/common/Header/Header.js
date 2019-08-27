import React from 'react'

import styles from './Header.scss';
import classNames from 'classnames/bind';
import { NavLink, Link } from 'react-router-dom'
import Button from 'components/common/Button';
import ic_menu from 'ic/ic_menu.png'


const cx = classNames.bind(styles);


const Header = ({postIx, onRemove, logged, onLogout, error, onSidebarOpen}) => {
  return (
    <header className={cx('header')}>
     <div className={cx('header-content')}>
      <div className={cx('brand')}>
        <Link to='/' className={cx('logo')}> SEJONG </Link>
        <img onClick={onSidebarOpen} src={ic_menu}/>
      </div>
      <div className={cx('nav')}>
        <NavLink exact to='?board_ix=1'  className={cx('board-nav')}>게시판1번</NavLink>
        <NavLink exact to='?board_ix=2'  className={cx('board-nav')}>게시판2번</NavLink>
        <NavLink exact to='?board_ix=3'  className={cx('board-nav')}>게시판3번</NavLink>
        <NavLink exact to='?board_ix=4'  className={cx('board-nav')}>게시판4번</NavLink>
      </div>
      <div className={cx('right')}>
        {
          postIx && logged && !error && [
            <Button key="edit" theme="outline" to={`/editor?id=${postIx}`}>수정</Button>,
            <Button key="remove" theme="outline" onClick={onRemove}>삭제</Button>
          ]
        }
        {logged ? <Button theme="outline" onClick={onLogout}>로그아웃</Button> : <Button theme="outline" to="/login">로그인</Button>}
        {logged && <Button theme="outline" to="/editor">새 포스트</Button>}
      </div>
     </div>
    </header>
  )
}

export default Header
