import React from 'react'
import PropTypes from 'prop-types'
import styles from './PostList.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import moment from 'moment';
import removeMd from 'remove-markdown';


const cx = classNames.bind(styles);

const PostItem = ({title, ix}) => {
  return (
      <div className={cx('post-item')}>
        <h2><Link to={`/post/${ix}`}>{title}</Link></h2>
        <div className={cx('date')}>dkdk</div>
      </div>
  )
}
const PostList = ({posts}) => {
  const postList = posts.map(
    (post) => {
      const {ix, title} = post.toJS();
      return (
        <PostItem
          title={title}
          key={ix}
          ix={ix}
        />
      )
    }
  );
  return (
    <div className={cx('post-list')}>
      {postList}
    </div>
  );
}


export default PostList
