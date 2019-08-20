import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames/bind';
import styles from './PostInfo.scss'

import { Link } from 'react-router-dom';
import moment from 'moment';

const cx = classNames.bind(styles);

const PostInfo = ({publishedDate, title}) => {
  return (
    <div className={cx('post-info')}>
      <div className={cx('info')}>
        <h1>{title}</h1>
        <div className={cx('tags')}>

        </div>
        <div className={cx('date')}>
          {moment(publishedDate).format('ll')}
        </div>
      </div>
    </div>
  )
}

export default PostInfo;
