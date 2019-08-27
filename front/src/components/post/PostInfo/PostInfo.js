import React from 'react'

import classNames from 'classnames/bind';
import styles from './PostInfo.scss'

import { Link } from 'react-router-dom';
import moment from 'moment';

const cx = classNames.bind(styles);

const PostInfo = ({publishedDate, title, userName, error}) => {
  return (
    <div className={cx('post-info')}>
      <div className={cx('info')}>
        {
          error ?
          <h1>ERROR :: 권한없음</h1>
          :
          <div>
            <div className={cx('userName')}>
              {userName ? userName : '이름없음'}님이 작성
            </div>
            <h1>{title}</h1>

            <div className={cx('date')}>
              {moment(publishedDate).format('ll')}
            </div>
          </div>
      }
      </div>
    </div>
  )
}

export default PostInfo;
