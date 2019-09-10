import React from 'react'

import classNames from 'classnames/bind';
import styles from './PostInfo.scss'

import { Link } from 'react-router-dom';
import moment from 'moment';
import ic_del from 'ic/ic_del.png'
import ic_edit from 'ic/ic_edit.png'

import Button from 'components/common/Button'

const cx = classNames.bind(styles);

const PostInfo = ({publishedDate, title, userName, error, logged, postIx, onRemove}) => {
  return (
    <div className={cx('post-info')}>
      <div className={cx('info')}>
        {
          error ?
          <h1>ERROR :: 권한없음</h1>
          :
          <div>
            <div className={cx('userName-box')}>
              <div className={cx('userName')}>{userName ? userName : '이름없음'}님이 작성</div>
              <div className={cx('controls')}>
                {
                  logged && !error && [
                    <Button key="edit" theme="outline" to={`/editor?id=${postIx}`}><img className={cx('edit')} src={ic_edit}></img></Button>,
                    <Button key="remove" theme="outline" onClick={onRemove}><img  className={cx('del')} src={ic_del}></img></Button>
                  ]
                }
              </div>


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
