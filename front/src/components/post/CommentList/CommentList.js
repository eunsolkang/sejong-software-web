import React from 'react'

import styles from './CommentList.scss';
import classNames from 'classnames/bind';
import moment from 'moment';

const cx = classNames.bind(styles)

const Comment = ({body, name, ix, createdAt}) => {
  return (
    <div className={cx('comment')}>
      <div className={cx('user-name')}>
        {name}
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

const CommentList = ({comments}) => {
  const commentList = comments.reverse().map(
    (comment) => {
      const {ix, contents, user_name} = comment.toJS();
      return (
        <Comment
          body={contents}
          name={user_name}
          ix={ix}
          key={ix}
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
