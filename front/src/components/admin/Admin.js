import React from 'react'
import PropTypes from 'prop-types'
import styles from './Admin.scss';
import classNames from 'classnames/bind';
import Button from 'components/common/Button'
import moment from 'moment';


const cx = classNames.bind(styles);

const Admin = ({boards, onAdd, onRemove, onUpdate, onBoard}) => {

  const boardList = boards && boards.map(
    (board) => {
      const {name, is_admin, ix, createdAt ,parent_name} = board.toJS();
      if(parent_name === 'etc'){
        const navlist = boards && boards.map(
          (boardlist) => {
            if(name === boardlist.toJS().parent_name){
              return (
                <div className={cx('list')} key={boardlist.toJS().ix}>
                  <div className={cx('list-index')}>ㄴ</div>
                  <div className={cx('list-index', 'list-index-name')}>{boardlist.toJS().name}</div>
                  <div className={cx('list-index')}>{moment(boardlist.toJS().createdAt).format('ll')}</div>
                  <div className={cx('list-index')}>{boardlist.toJS().is_admin ? "어드민" : "일반"}</div>
                  <div className={cx('list-index','list-index-btn')}>
                    <Button theme="red" onClick={onRemove} id={boardlist.toJS().ix}>Delete</Button>
                    <Button theme="gray" onClick={onUpdate} id={boardlist.toJS().ix}>Update</Button>
                  </div>
                </div>
              )
            }
          }
        )

      return (
        <div>
          <div className={cx('list')} key={ix}>
            <div className={cx('list-index')}>{ix}</div>
            <div className={cx('list-index', 'list-index-name', 'group')}>{name}</div>
            <div className={cx('list-index')}>{moment(createdAt).format('ll')}</div>
            <div className={cx('list-index')}>{is_admin}</div>
            <div className={cx('list-index','list-index-btn')}>
              <Button theme="red" onClick={onRemove} id={ix}>Delete</Button>
              <Button theme="gray" onClick={onUpdate} id={ix}>Update</Button>
            </div>

          </div>
          {
            navlist
          }
        </div>


      )
    }
  }
  );

  return (

    <div className={cx('list-container')}>
      <div className={cx('title')}>
        <div>
          페이지 리스트
        </div>
        <div>
          <Button theme="gray" onClick={onBoard}>게시판 추가</Button>
          <Button theme="gray" onClick={onAdd}>그룹 추가</Button>
        </div>



      </div>
      <div className={cx('name')}>
        <div className={cx('name-index')}>No</div>
        <div className={cx('name-index', 'name-index-name')}>Name</div>
        <div className={cx('name-index')}>CreateAt</div>
        <div className={cx('name-index')}>Admin</div>
        <div className={cx('name-index')}>Controls</div>
      </div>
      <div className={cx('list-box')}>
        {boardList}
      </div>
    </div>
  )
}

export default Admin;
