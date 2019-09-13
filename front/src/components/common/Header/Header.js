import React from 'react'

import styles from './Header.scss';
import classNames from 'classnames/bind';
import { NavLink, Link } from 'react-router-dom'
import Button from 'components/common/Button';
import ic_menu from 'ic/ic_menu.png'
import ic_logo from 'ic/logo_main.png'
import down_arrow from 'ic/ic_down_arrow.png'
import ic_search from 'ic/ic_search.png'


const cx = classNames.bind(styles);


const Header = ({postIx, onRemove, logged, onLogout, error, onSidebarOpen, boards, fixed, onSearchToggle, isSearch, onChange}) => {
  console.log(isSearch);

  const boardList = boards && boards.map(
    (board) => {
      const {name, is_admin, ix, parent_name} = board.toJS();
      if(parent_name === 'etc'){
        const navlist = boards && boards.map(
          (boardlist) => {

            if(name === boardlist.toJS().parent_name){

              let toPath = '/board?board_ix=' + boardlist.toJS().ix
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
          <div className={cx('dropdown')} key={ix}>
            <div className={cx('drop-btn')}>{name}<img src={down_arrow}></img></div>
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
         <NavLink to='/' className={cx('text')} >SOYUNG</NavLink>

         <img onClick={onSidebarOpen} src={ic_menu} className={cx('menu-ic')}/>
       </div>
       { !isSearch &&
         <div className={cx('nav')}>
           {boardList}
           {/*<NavLink
             className={cx('board-nav')}
             to='/admin'
           >
             관리자
           </NavLink>*/}
         </div>
       }
       {
         isSearch &&
           <input className={cx('search-input')} autoFocus placeholder="게시물 검색" onChange={onChange} name="search">

           </input>

       }
       <div className={cx('right')}>

         {!isSearch && (logged ? <Button theme="outline" onClick={onLogout}>로그아웃</Button> : <Button theme="outline" to="/login">로그인</Button>)}
         {!isSearch && logged && <Button theme="outline" to="/editor">새 포스트</Button>}
         <Button theme="outline" onClick={onSearchToggle}><img src={ic_search}></img></Button>
       </div>
      </div>
    </div>
    </header>
  )
}

export default Header
