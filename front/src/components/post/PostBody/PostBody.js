import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames/bind';
import styles from './PostBody.scss'
import MarkdownRender from 'components/common/MarkdownRender';

const cx = classNames.bind(styles);

const PostBody = ({body}) => {
  return (
    <div className={cx('post-body')}>
      <div className={cx('paper')}>
        <MarkdownRender markdown={body}/>
      </div>
    </div>
  )
}

export default PostBody;
