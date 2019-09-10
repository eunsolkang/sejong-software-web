import React from 'react'

import styles from './PostList.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import moment from 'moment';
import removeMd from 'remove-markdown';


const cx = classNames.bind(styles);

const PostItem = ({title, ix, createdAt, isPrivate, userName}) => {
  let privated = false
  if(title === 'private post'){
    console.log('비밀글');
    privated = true
  }
  return (
      <div className={cx('post-item', {isPrivate})}>
        <h2><Link className={cx({isPrivate})} to={`/post/${ix}`}>{privated ? <div>비밀글입니다</div> : title}</Link></h2>
        <div className={cx('date', {isPrivate})}>{moment(createdAt).format('ll')} / {userName ? userName : "이름없음"}</div>
      </div>
  )
}
const PostList = ({posts, search}) => {
  let filteredList =  posts.filter(
    post => post.toJS().title.indexOf(search.trim()) !== -1
  );
  const postList = filteredList && filteredList.map(
    (post) => {
      const {ix, title, createdAt, is_private, user_name} = post.toJS();
      return (
        <PostItem
          title={title}
          key={ix}
          ix={ix}
          createdAt={createdAt}
          isPrivate={is_private}
          userName={user_name}
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
