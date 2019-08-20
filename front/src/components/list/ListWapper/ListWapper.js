import React from 'react'
import PropTypes from 'prop-types'
import styles from './ListWapper.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

const ListWapper = ({children}) => {
  return (
    <div className={cx('list-wapper')}>
      {children}
    </div>
  )
}

export default ListWapper
