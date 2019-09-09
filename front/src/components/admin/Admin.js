import React from 'react'
import PropTypes from 'prop-types'
import styles from './Admin.scss';
import classNames from 'classnames/bind';
import Button from 'components/common/Button'
import moment from 'moment';


const cx = classNames.bind(styles);

const Admin = ({boards, onAdd, onRemove, onUpdate}) => {
  const boardList = boards && boards.map(
    (board) => {
      const {name, is_admin, ix, createdAt} = board.toJS();
      return (
        <div className={cx('list')} key={ix}>
          <div className={cx('list-index')}>{ix}</div>
          <div className={cx('list-index', 'list-index-name')}>{name}</div>
          <div className={cx('list-index')}>{moment(createdAt).format('ll')}</div>
          <div className={cx('list-index')}>{is_admin}</div>
          <div className={cx('list-index','list-index-btn')}>
            <Button theme="red" onClick={onRemove} id={ix}>Delete</Button>
            <Button theme="gray" onClick={onUpdate} id={ix}>Update</Button>
          </div>
        </div>
      )
    }
  );

  return (

    <div className={cx('list-container')}>
      <div className={cx('title')}>
        <div>
          페이지 리스트
        </div>
        <Button theme="gray" onClick={onAdd}>게시판 추가</Button>


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
