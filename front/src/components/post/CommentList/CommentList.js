import React from 'react'

import styles from './CommentList.scss';
import classNames from 'classnames/bind';
import moment from 'moment';
import ic_del from 'ic/ic_del_black.png'

import Button from 'components/common/Button'
const cx = classNames.bind(styles)

const Comment = ({body, name, ix, createdAt, onRemove}) => {
  return (
    <div className={cx('comment')}>
      <div className={cx('user-box')}>
        <div className={cx('user-name')}>{name}</div>
        <Button key={ix} name={ix} theme="outline" onClick={onRemove}><img  name={ix} className={cx('del')} src={ic_del}></img></Button>
      </div>
      <div className={cx('comment-index')}>
        {body}
      </div>
      <div className={cx('comment-date')}>
        {moment(createdAt).format('ll')}
      </div>
    </div>
  )
}

const CommentList = ({comments, onRemove}) => {
  const commentList = comments.reverse().map(
    (comment) => {
      const {ix, contents, user_name} = comment.toJS();
      return (
        <Comment
          body={contents}
          name={user_name}
          ix={ix}
          key={ix}
          onRemove={onRemove}
        />
      )
    }
  );
  return (
    <div className={cx('comment-list')}>
      {commentList}
    </div>
  );
}

export default CommentList
