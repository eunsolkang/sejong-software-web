import React from 'react'
import PropTypes from 'prop-types'
import styles from './Header.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom'
import Button from 'components/common/Button';


const cx = classNames.bind(styles);


const Header = ({postIx, onRemove}) => {
  return (
    <header className={cx('header')}>
     <div className={cx('header-content')}>
      <div className={cx('brand')}>
        <Link to="/">sejong</Link>
      </div>
      <div className={cx('right')}>
        {
          postIx && [
            <Button key="edit" theme="outline" to={`/editor?id=${postIx}`}>수정</Button>,
            <Button key="remove" theme="outline" onClick={onRemove}>삭제</Button>
          ]
        }
        <Button theme="outline" to="/login">로그인</Button>
        <Button theme="outline" to="/editor">새 포스트</Button>
      </div>
     </div>
    </header>
  )
}

export default Header
