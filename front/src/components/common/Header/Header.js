import React from 'react'

import styles from './Header.scss';
import classNames from 'classnames/bind';
import { NavLink, Link } from 'react-router-dom'
import Button from 'components/common/Button';
import ic_menu from 'ic/ic_menu.png'
import ic_logo from 'ic/logo_main.png'


const cx = classNames.bind(styles);


const Header = ({postIx, onRemove, logged, onLogout, error, onSidebarOpen, boards, fixed}) => {
  console.log(fixed);

  const boardList = boards && boards.map(
    (board) => {
      const {name, is_admin, ix, parent_name} = board.toJS();
      if(parent_name === 'etc'){
        const navlist = boards && boards.map(
          (boardlist) => {

            if(name === boardlist.toJS().parent_name){

              let toPath = '/?board_ix=' + boardlist.toJS().ix
              return (
                <NavLink
                  exact
                  to={toPath}
                  className={cx('dropdown-content-index')}
                  key={boardlist.toJS().ix}
                >
                {boardlist.toJS().name}
              </NavLink>
              )
            }
          }
        )

        return (
          <div className={cx('dropdown')}>
            <div className={cx('drop-btn')}>{name}</div>
            <div className={cx('dropdown-content')}>
              {navlist}
            </div>
          </div>
        )
      }

    }
  );
  return (
    <header className={cx('header')}>
    <div className={cx('header-box')}>
      <div className={cx('header-content')}>
       <div className={cx('brand')}>
         <NavLink to='/' className={cx('text')} >SEJONG</NavLink>

         <img onClick={onSidebarOpen} src={ic_menu} className={cx('menu-ic')}/>
       </div>
       <div className={cx('nav')}>
         {boardList}
         <NavLink
           className={cx('board-nav')}
           to='/admin'
         >
           관리자
         </NavLink>
       </div>
       <div className={cx('right')}>
         {/*
           postIx && logged && !error && [
             <Button key="edit" theme="outline" to={`/editor?id=${postIx}`}>수정</Button>,
             <Button key="remove" theme="outline" onClick={onRemove}>삭제</Button>
           ]*/
         }
         {logged ? <Button theme="outline" onClick={onLogout}>로그아웃</Button> : <Button theme="outline" to="/login">로그인</Button>}
         {logged && <Button theme="outline" to="/editor">새 포스트</Button>}
       </div>
      </div>
    </div>
    </header>
  )
}

export default Header
