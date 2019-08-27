import React from 'react'

import classNames from 'classnames/bind';
import styles from './PostBody.scss'
import MarkdownRender from 'components/common/MarkdownRender';

const cx = classNames.bind(styles);

const PostBody = ({body, error}) => {
  return (
    <div className={cx('post-body')}>
      <div className={cx('paper')}>
        {error ?  <div>ERROR :: 권한없음</div> :<MarkdownRender markdown={body}/>}
      </div>
    </div>
  )
}

export default PostBody;
