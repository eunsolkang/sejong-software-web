import React from 'react'
import PropTypes from 'prop-types'
import styles from './SidebarContents.scss'
import classNames from 'classnames/bind'
import { NavLink, Link } from 'react-router-dom'
import down_arrow from 'ic/ic_down_arrow.png'

const cx = classNames.bind(styles);


class SidebarContents extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openMenu : false
    };
    this.onOpen = this.onOpen.bind(this);
  }
  onOpen(){
    const { openMenu } = this.state;
    this.setState({
      openMenu : !openMenu
    })
  }
  render () {
    const { boards } = this.props;
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
            <div
        
              className={cx('nav')}
              key={ix}
            >
              <div className={cx('nav-title')}>
                {name} <img src={down_arrow}></img>
              </div>
              <div className={cx('nav-list', 'open-nav-list')}>
                {navlist}
              </div>
            </div>
          )
        }

      }
    );
    return (
      <div className={cx('sidebar-contents')}>
        <NavLink to='/' className={cx('title')}>
          SOYUNG
        </NavLink>
        {boardList}
      </div>
    )
  }
}

export default SidebarContents  ;
