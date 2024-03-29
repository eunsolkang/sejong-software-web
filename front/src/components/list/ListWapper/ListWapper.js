import React from 'react'

import styles from './ListWapper.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

const ListWapper = ({children}) => {
  return (
    <div className={cx('list-box')}>
      <div className={cx('list-wapper')} >
        {children}
      </div>

    </div>
  )
}

export default ListWapper
